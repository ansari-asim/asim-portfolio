import { useEffect, useMemo, useState } from "react";

function InteractiveAvatar({ compact = false, scrollTargetId }) {
  const [pointerGaze, setPointerGaze] = useState({ x: 0, y: 0 });
  const [scrollGaze, setScrollGaze] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const updateFromPoint = (clientX, clientY) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const normalizedX = clamp((clientX - centerX) / centerX, -1, 1);
      const normalizedY = clamp((clientY - centerY) / centerY, -1, 1);
      setPointerGaze({ x: normalizedX * 3.5, y: normalizedY * 3.5 });
    };

    const onMouseMove = (event) => {
      updateFromPoint(event.clientX, event.clientY);
    };

    const onTouchMove = (event) => {
      const touch = event.touches?.[0];
      if (!touch) return;
      updateFromPoint(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  useEffect(() => {
    if (!scrollTargetId) return;

    const element = document.getElementById(scrollTargetId);
    if (!element) return;

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const onScroll = () => {
      const maxScroll = Math.max(element.scrollHeight - element.clientHeight, 1);
      const ratio = element.scrollTop / maxScroll;
      const scrollY = (ratio - 0.5) * 4;
      const scrollX = Math.sin(element.scrollTop / 120) * 1.5;
      setScrollGaze({
        x: clamp(scrollX, -2, 2),
        y: clamp(scrollY, -2, 2)
      });
    };

    onScroll();
    element.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      element.removeEventListener("scroll", onScroll);
    };
  }, [scrollTargetId]);

  const eyeOffset = useMemo(() => {
    const x = Math.max(-4.5, Math.min(4.5, pointerGaze.x + scrollGaze.x));
    const y = Math.max(-4.5, Math.min(4.5, pointerGaze.y + scrollGaze.y));
    return { x, y };
  }, [pointerGaze, scrollGaze]);

  const avatarSize = compact ? 150 : 180;

  return (
    <div
      style={{
        width: `${avatarSize}px`,
        height: `${avatarSize}px`,
        borderRadius: "50%",
        background: "linear-gradient(135deg, #90ee90 0%, #65d965 100%)",
        padding: "3px",
        marginBottom: "20px",
        boxShadow: "0 0 30px rgba(144, 238, 144, 0.6)",
      }}
    >
      <svg viewBox="0 0 200 200" width="100%" height="100%" style={{ borderRadius: "50%" }}>
        <defs>
          <radialGradient id="avatarGrad" cx="35%" cy="35%">
            <stop offset="0%" stopColor="rgba(144, 238, 144, 0.2)" />
            <stop offset="100%" stopColor="rgba(0, 0, 0, 0.5)" />
          </radialGradient>
        </defs>

        <circle cx="100" cy="100" r="95" fill="url(#avatarGrad)" stroke="#90ee90" strokeWidth="2" />

        <ellipse cx="72" cy="92" rx="18" ry="12" fill="rgba(0, 0, 0, 0.45)" stroke="#90ee90" strokeWidth="1" />
        <ellipse cx="128" cy="92" rx="18" ry="12" fill="rgba(0, 0, 0, 0.45)" stroke="#90ee90" strokeWidth="1" />

        <circle cx={72 + eyeOffset.x} cy={92 + eyeOffset.y} r="5" fill="#90ee90" />
        <circle cx={128 + eyeOffset.x} cy={92 + eyeOffset.y} r="5" fill="#90ee90" />

        <circle cx={72 + eyeOffset.x + 1.2} cy={92 + eyeOffset.y - 1.2} r="1.5" fill="white" opacity="0.9" />
        <circle cx={128 + eyeOffset.x + 1.2} cy={92 + eyeOffset.y - 1.2} r="1.5" fill="white" opacity="0.9" />

        <path
          d="M70 132 Q100 150 130 132"
          fill="none"
          stroke="#90ee90"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.9"
        />

        <text x="100" y="64" textAnchor="middle" fill="#90ee90" fontSize="10" fontFamily="monospace" opacity="0.7">
          LIVE AI AVATAR
        </text>

        <text x="35" y="45" fill="#90ee90" fontSize="16" opacity="0.5" fontFamily="monospace">
          01
        </text>
        <text x="155" y="45" fill="#90ee90" fontSize="16" opacity="0.5" fontFamily="monospace">
          10
        </text>
        <text x="35" y="165" fill="#90ee90" fontSize="16" opacity="0.5" fontFamily="monospace">
          11
        </text>
        <text x="155" y="165" fill="#90ee90" fontSize="16" opacity="0.5" fontFamily="monospace">
          00
        </text>

        <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(144, 238, 144, 0.2)" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
}

export default InteractiveAvatar;
