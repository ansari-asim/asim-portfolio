# StreamWatch - Unified Video & Service Observability Platform

Centralized monitoring platform for RTSP streams, network latency, frame capture pipelines, and cross-environment service uptime.

## Repository

https://github.com/ansari-asim/Monitoring-dashboard.git

## Problem Statement

Distributed video systems can degrade across multiple layers at once, including unstable RTSP feeds, packet loss, rising latency, and failed runtime services. Operators need a single observability layer that identifies whether an issue is caused by the camera stream, network path, frame extraction pipeline, or host-level service failure.

## Solution Description

Designed and built a unified monitoring platform that validates RTSP camera availability, measures latency and network health, extracts diagnostic frames through FFmpeg, and checks service runtime state across Linux services, Python applications, and IIS-hosted workloads. The platform consolidates these signals into one operational workflow so teams can detect failures quickly and troubleshoot with less manual correlation.

## Tech Stack

- Video Monitoring: RTSP, FFmpeg
- Backend and Automation: Python
- Infrastructure: Linux, IIS
- Observability: Latency checks, network health probes, service status inspection
- Operations: Cross-service diagnostics, stream validation

## Key Features

- Monitors RTSP camera streams for reachability and live feed health
- Measures latency and network quality to identify unstable endpoints
- Extracts validation frames with FFmpeg for visual verification and debugging
- Checks runtime state across Linux services, Python processes, and IIS workloads
- Consolidates video telemetry and service telemetry into one monitoring workflow

## Architecture Overview

RTSP endpoints feed into a monitoring layer that performs availability checks, latency probes, and FFmpeg-based frame extraction. In parallel, a service health module inspects Linux services, Python runtimes, and IIS workloads. The outputs are normalized into a shared status model that can be used for alerting, diagnostics, and operational dashboards.

## Future Improvements

- Add threshold-based alerting through Slack, email, or webhook integrations
- Persist metrics for SLA reporting and historical trend analysis
- Containerize monitoring workers for horizontal scaling across sites
- Add dashboard drill-downs for incident timelines and per-camera diagnostics

## GitHub README

```md
# StreamWatch

Unified observability platform for RTSP camera streams, network latency, FFmpeg frame extraction, and heterogeneous service health monitoring.

## Overview

StreamWatch provides a single operational view across video infrastructure and runtime services. It is designed for environments where camera availability, network stability, and supporting services must all remain healthy for downstream analytics and incident response workflows to function reliably.

## Problem

Camera-driven systems often fail across multiple layers at once. A stream may be reachable but delayed, frame extraction may stall even when the endpoint responds, or the analytics service behind the stream may be down while the network remains healthy. Without centralized monitoring, teams lose time correlating failures across video, network, and service layers.

## Solution

StreamWatch continuously validates RTSP streams, measures latency and network health, extracts diagnostic frames with FFmpeg, and verifies runtime status for Linux services, Python processes, and IIS-hosted applications. The result is a unified health model that helps operators identify root cause quickly and respond before downstream systems are impacted.

## Core Capabilities

- RTSP stream availability and health monitoring
- Latency and network quality checks
- FFmpeg-based frame extraction for visual validation
- Linux service, Python process, and IIS health verification
- Consolidated telemetry for faster triage and incident response

## Architecture

1. RTSP camera endpoints are polled for stream reachability and response health.
2. Network probes measure latency and identify unstable paths.
3. FFmpeg workers extract frames for stream validation and debugging.
4. Service monitors inspect Linux services, Python processes, and IIS workloads.
5. Health signals are normalized into a common status layer for dashboards and alerts.

## Tech Stack

- Python
- RTSP
- FFmpeg
- Linux
- IIS
- Network diagnostics
- Service monitoring

## Use Cases

- Monitoring distributed camera infrastructure
- Detecting degraded or frozen RTSP feeds
- Validating frame capture pipelines
- Verifying service uptime for video analytics platforms
- Reducing mean time to detect and mean time to resolve incidents

## Roadmap

- Historical metrics storage and reporting
- Alert routing through Slack, email, and webhooks
- Multi-site worker orchestration
- Rich operator dashboard with incident drill-down

## Outcome

StreamWatch improves visibility across the full video operations stack by combining stream health, network diagnostics, frame validation, and service monitoring in one platform.
```
