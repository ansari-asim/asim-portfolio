# ReviewPilot - Local AI Pull Request Review Platform

Offline pull request review system that integrates Gitea with Ollama-powered LLM inference to generate automated code review feedback.

## Repository

https://github.com/ansari-asim/PR_Agent-Gitea-Ollama.git

## Problem Statement

Engineering teams using self-hosted source control need AI-assisted PR review without exposing proprietary code to external SaaS services. They require a local review workflow that can analyze diffs, generate actionable feedback, and integrate with existing Gitea processes while keeping infrastructure simple and controllable.

## Solution Description

Designed and implemented a local LLM-based PR review system that connects Gitea pull request events to an Ollama inference backend and surfaces the review workflow through Open WebUI. The platform processes code diffs, generates structured review suggestions, and keeps the full inference path inside the local environment for privacy, governance, and predictable operating cost.

## Tech Stack

- Source Control: Gitea
- Inference Runtime: Ollama
- Review Interface: Open WebUI
- Automation: Git hooks or PR event integration
- AI Workflow: Prompt orchestration, diff analysis, structured review generation

## Key Features

- Automates PR review suggestions using local LLM inference
- Integrates directly with Gitea-based pull request workflows
- Runs fully offline to keep repository content on-premise
- Produces feedback focused on code quality, maintainability, and implementation risks
- Uses Open WebUI for prompt iteration, visibility, and operator control

## Architecture Overview

Gitea emits pull request events to an integration layer that fetches metadata and code diffs. A review agent prepares prompts and routes them to Ollama for offline inference. The generated suggestions are then formatted for consumption in the review workflow, while Open WebUI provides an interface for testing prompts, inspecting responses, and tuning the system behavior.

## Future Improvements

- Add severity scoring and policy-driven quality gates
- Support repository-specific review prompts and coding standards
- Cache summaries or embeddings to reduce repeat review latency
- Expand feedback formatting to inline comments and approval recommendations

## GitHub README

```md
# ReviewPilot

Local AI-powered pull request review platform for Gitea, backed by Ollama and surfaced through Open WebUI.

## Overview

ReviewPilot brings automated code review into self-hosted development environments. It is designed for teams that want LLM-assisted PR analysis while keeping source code, prompts, and inference fully inside local infrastructure.

## Problem

Hosted AI review tools create privacy, governance, and cost concerns for teams working with proprietary repositories. Self-hosted engineering organizations need review automation that fits naturally into Gitea workflows without requiring external inference providers.

## Solution

ReviewPilot connects Gitea pull request events to a local Ollama inference backend and uses Open WebUI as the operator-facing interface. It analyzes code diffs, generates structured review suggestions, and keeps the entire review loop offline.

## Core Capabilities

- Automated PR review suggestions from local LLM inference
- Native alignment with Gitea workflows
- Offline inference with Ollama
- Prompt iteration and output visibility through Open WebUI
- Structured feedback focused on maintainability, correctness, and implementation quality

## Architecture

1. Gitea emits pull request events or provides PR diffs to the integration layer.
2. The agent collects repository metadata and changed files.
3. Prompt orchestration prepares review context for the model.
4. Ollama performs local inference on the PR content.
5. Review outputs are formatted into actionable suggestions for the development workflow.
6. Open WebUI supports prompt testing, review inspection, and system tuning.

## Tech Stack

- Gitea
- Ollama
- Open WebUI
- Git
- LLM prompt orchestration
- Self-hosted automation

## Use Cases

- AI-assisted code review for self-hosted repositories
- Privacy-preserving analysis of proprietary codebases
- Faster first-pass review on large or repetitive pull requests
- Standardized review feedback across teams

## Roadmap

- Repository-aware review policies
- Inline comment generation
- Approval and severity scoring workflows
- CI integration for mandatory review gates

## Outcome

ReviewPilot reduces review turnaround time while preserving local control over source code, inference, and operational policy.
```
