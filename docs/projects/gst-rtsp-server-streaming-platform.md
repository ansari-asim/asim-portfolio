# GStreamer RTSP Multi-Stream Server - Edge Video Streaming Platform

Production-grade RTSP streaming server that transforms local MP4 files into accessible RTSP camera feeds with automatic hardware acceleration, multi-stream support, and fallback software pipeline handling for Jetson and Linux environments.

## Repository

https://github.com/ansari-asim/Gst-RTSP-Server.git

## Problem Statement

Organizations deploying edge AI and video surveillance systems on embedded platforms (Jetson) or Linux servers need a reliable, configurable RTSP streaming solution that:
- Supports multiple concurrent video streams with minimal latency
- Automatically leverages hardware acceleration when available (NVIDIA hardware)
- Gracefully degrades to software encoding when hardware is unavailable or exhausted
- Provides authentication and fine-grained stream configuration
- Eliminates the need for external streaming infrastructure

## Solution Description

Engineered a production-grade Python RTSP server using GStreamer and GstRtspServer that intelligently manages hardware and software encoding pipelines. The system auto-detects available NVIDIA/Jetson hardware elements and seamlessly falls back to software alternatives, supporting multiple concurrent streams with configurable resolution, framerate, bitrate, and authentication.

## Tech Stack

- **Core**: Python 3 with GStreamer (GstRtspServer)
- **Hardware Support**: NVIDIA Jetson elements (decoder, encoder, converter)
- **Encoding**: H.264 with x264 software fallback
- **Platforms**: Ubuntu 22.04 (Jetson JetPack 6.x), Ubuntu 24.04
- **Client Support**: FFplay, VLC, and any standard RTSP-capable player
- **Configuration**: JSON-based with per-stream customization

## Key Features

- **Multi-Stream RTSP Broadcasting**: Automatic `/cam1`, `/cam2`, `/cam3` endpoint generation
- **Hardware/Software Hybrid Encoding**: Auto-detects NVIDIA plugins with graceful fallback
- **RTSP Basic Authentication**: Built-in credential support with secure URL encoding
- **Fine-Grained Configuration**:
  - Adjustable resolution, framerate, and bitrate per configuration
  - Software vs hardware encoder selection strategies
  - Prebuffering and frame queue tuning for stability
  - Reader stagger timing to manage decoder load
- **Loop Support**: Continuous video cycling for surveillance scenarios
- **Built-in Diagnostics**: Video compatibility checker for pipeline troubleshooting
- **Low-Latency Mode**: Specialized encoder settings for time-sensitive applications

## Architecture Overview

The system launches a Python GStreamer application that:
1. **Initialization**: Loads MP4 file paths and configuration from `config.json`
2. **Pipeline Detection**: Probes available GStreamer elements to determine hardware/software capability
3. **Stream Creation**: Instantiates separate RTSP media factories for each video file
4. **Reader Management**: Spawns staggered file readers to prevent simultaneous hardware decoder initialization
5. **Encoding Selection**: Uses configured encoder presets with hardware acceleration when available
6. **Network Binding**: Exposes authenticated RTSP server on configured host and port
7. **Client Delivery**: Handles RTSP clients requesting individual `/camN` streams

## Configuration Highlights

```json
{
  "video_paths": ["video/stream1.mp4", "video/stream2.mp4"],
  "width": 1280,
  "height": 720,
  "framerate": 15,
  "bitrate": 4096,
  "encoder_preset": "ultrafast",
  "low_latency": true,
  "prebuffer_frames": 8,
  "force_software_on_multi": true,
  "host_ip": "192.168.1.100",
  "port": 8554,
  "loop": true,
  "rtsp_username": "admin",
  "rtsp_password": "secure-password"
}
```

- **Hardware vs Software Strategy**: `force_software_on_multi` prevents hardware encoder contention on Jetson with multiple streams
- **Quality/Performance Tuning**: Encoder presets (ultrafast, fast, medium) balance quality and CPU usage
- **Prebuffering**: Configurable frame buffer and timeout for stable client connections

## Integration Patterns

- **Surveillance Systems**: Stream video feeds to VMS platforms over RTSP
- **AI Inference Pipelines**: Source video for edge processing with minimal latency
- **Remote Monitoring**: Secure authenticated streaming for distributed monitoring
- **Development/Testing**: Diagnostics tool enables rapid pipeline compatibility validation

## Platform Support

| Platform | Status | Details |
|----------|--------|---------|
| Jetson Ubuntu 22.04 | ✅ Fully Supported | Full hardware acceleration via JetPack 6.x plugins |
| Ubuntu 24.04 | ✅ Fully Supported | Software encode/decode with optional hardware support |
| Multi-Stream | ✅ Supported | Dynamic endpoint scaling with tunable resource allocation |

## Dependencies & Tooling

- **System Packages**: GStreamer core, RTSP server, codec plugins (base, good, bad, ugly, libav)
- **Python Bindings**: GObject Introspection for GStreamer and GstRtspServer
- **Client Tools**: FFplay (integrated testing), VLC (cross-platform validation)
- **Diagnostics**: Included `diagnose.py` for video pipeline compatibility analysis

## Key Design Decisions

1. **GStreamer Foundation**: Leverages battle-tested multimedia framework with broad codec and hardware support
2. **Configuration-Driven Architecture**: JSON configuration eliminates code changes for environment differences
3. **Fallback Strategy**: Automatic software encoding ensures reliability across heterogeneous hardware
4. **Reader Staggering**: Temporal offset between file readers prevents simultaneous hardware decoder bottlenecks
5. **Authentication Built-In**: RTSP basic auth with automatic URL encoding for special characters

## Future Optimization Opportunities

- Advanced load balancing across multiple server instances
- Stream transcoding profiles for adaptive bitrate scenarios
- Integration with monitoring/metrics systems (Prometheus, Grafana)
- Support for RTMP and HLS streaming protocols alongside RTSP
- Dynamic stream creation from client requests
- Hardware encoder load monitoring and intelligent distribution

## GitHub README

```md
# GStreamer RTSP Multi-Stream Server

Python-based RTSP streaming server for local MP4 files with automatic hardware acceleration, multi-stream support, and intelligent software fallback for Jetson and Ubuntu systems.

**Features:**
- Streams MP4 files as RTSP camera feeds (`/cam1`, `/cam2`, etc.)
- Auto-detects NVIDIA/Jetson hardware acceleration
- Configurable resolution, framerate, bitrate, and authentication
- Works on Jetson (JetPack 6.x) and Ubuntu 24.04
- Includes pipeline diagnostics tool

**Quick Start:**
```bash
pip install -r requirements.txt
# Edit config.json with your video paths and IP
python3 server.py
# Stream: rtsp://user:pass@host:8554/cam1
```
```

