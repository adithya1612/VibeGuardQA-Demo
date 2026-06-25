# VibeGuard QA™ — Quick Start & Setup Guide

Welcome to VibeGuard QA™! 

> [!NOTE]
> **This is a preview of the Quick Start guide included in the premium VibeGuard QA™ package.** The rules files (`.cursorrules`, `.clauderules`, etc.) mentioned below are provided when you purchase the full framework and are not included in this free demo repository.

This guide explains how to set up and run the VibeGuard 80% Compliance Standard pack on your application.

VibeGuard QA™ is a zero-infrastructure, local compliance framework that audits, hardens, and checks AI-generated codebases before they hit production, helping you defend against SQL injection, unhandled crashes, hardcoded credentials, and performance resource leaks.

### 🛡️ Core Verification Components

VibeGuard operates using two distinct, complementary auditing layers:
- **Local Scanner (`vibeguard-score.py`):** Runs local, deterministic static analysis (regex credentials scans, SQL injection patterns, file structures, connection releasing, and health/logging endpoints). Highly reproducible and suitable for local pre-commit and CI/CD quality gates.
- **Cognitive AI Auditor (prompts/IDE rules):** Evaluates reasoning-based codebase quality, analyzing user intent alignment (Pre-Flight), edge-case architectural safety, structured model logic boundaries, and general code maintainability.

---

## 📂 What's in the ZIP File?

When you extract the ZIP file, you get:
- **IDE Rules:** `.cursorrules`, `.clauderules`, `.github/copilot-instructions.md`, and `.cursor/rules/vibeguard-qa.mdc`
- **Standalone Prompt:** `vibeguard-standalone.md` (for browser chats)
- **Changelog:** `CHANGELOG.md` (release log and known limitations)
- **Scoring Engine Script:** `core/vibeguard-score.py`
- **Modular Prompts:** `prompt-pack/`
- **Scoring Rubric:** `core/coverage-rubric.md` and `core/methodology-onepager.md`
- **CI/CD Integration:** `ci-cd/github-actions-validation.yml`
- **Sanity Test Fixtures:** `fixtures/`

---

## 📋 Prerequisites

1. **Python 3.x** (Required to run the local scorer scanner script).
2. **Your IDE / AI Coding Tool of choice** (Cursor, Claude Code, GitHub Copilot, ChatGPT, or Claude Web).

---

## 🚀 Setup Steps by AI Tool

Follow the steps below matching the AI coding tool you are using:

### 1. In Cursor, Antigravity IDE, or Windsurf
Copy the rule configurations directly to your application's root directory:
- Copy the `.cursorrules` file to your project root.
- **AND/OR** Copy the `.cursor/` folder to your project root.
*Your AI coding assistant will instantly read these rules and auto-audit its own generated code to meet VibeGuard's standards.*

### 2. In Claude Code (CLI)
Copy the rules configuration file to your project's root directory:
- Copy the `.clauderules` file to your project root.
*Claude Code will automatically detect and respect the rules stored in this file during development sessions.*

### 3. In VS Code (GitHub Copilot Chat)
Copy the configuration folder to your project's root directory:
- Copy the `.github/` folder (containing `copilot-instructions.md`) to your project root.
*GitHub Copilot Chat automatically loads these instructions to contextualize all workspace coding answers.*

### 4. In ChatGPT Web or Claude Web (Browser Chats)
- Open `vibeguard-standalone.md`.
- Copy the entire contents of the file and paste them as the system prompt or custom instructions inside your web browser chat.

---

## 🔍 How to Run the Scanner Script

VibeGuard QA™ includes a local Python scanner that automatically calculates a mathematical compliance score for your application codebase.

To run a scan:
1. Open your terminal.
2. Run the command pointing to your project directory:
   ```bash
   python /path/to/vibe-guard-qa/core/vibeguard-score.py /path/to/your/project
   ```
3. Read the scorecard output:
   - **Score >= 80%:** PASS (Your code meets the compliance standard).
   - **Score < 80%:** FAIL (Your code has critical security or reliability gaps).

---

## 🛠️ Auto-Remediating Gaps

If the scanner outputs a `FAIL` audit result:
1. Scroll down to the **`### 🛠️ SELF-HEALING REPAIR PROMPTS`** section in your terminal output.
2. Copy the text block containing the refactoring commands.
3. Paste it directly into your AI assistant (Cursor, Claude Code, Copilot, or Claude Web).
4. The AI will automatically refactor and fix the compliance failures!

---

*Created and Owned by Adithya HS. Copyright (c) 2026 Adithya HS. All rights reserved.*
