function InteractiveAvatar() {
  return (
    <div
      style={{
        width: "180px",
        height: "180px",
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
        
        {/* Background circle */}
        <circle cx="100" cy="100" r="95" fill="url(#avatarGrad)" stroke="#90ee90" strokeWidth="2" />
        
        {/* Matrix-style code */}
        <text x="100" y="95" textAnchor="middle" fill="#90ee90" fontSize="24" fontWeight="bold" fontFamily="monospace">
          &lt;AI/&gt;
        </text>
        <text x="100" y="125" textAnchor="middle" fill="#90ee90" fontSize="14" fontFamily="monospace" opacity="0.7">
          ENGINEER
        </text>
        
        {/* Corner tech symbols */}
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
        
        {/* Glow circle */}
        <circle cx="100" cy="100" r="98" fill="none" stroke="rgba(144, 238, 144, 0.2)" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
}

export default InteractiveAvatar;
