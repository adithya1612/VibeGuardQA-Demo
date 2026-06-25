<div align="center">
  
# VibeGuard QA™

**Validate AI-generated applications before shipping them.**

[![Compliance Gate](https://img.shields.io/badge/VibeGuard-80%25_Gate-brightgreen.svg)](#)
[![Security Scans](https://img.shields.io/badge/Security-Strict-red.svg)](#)
[![Playwright Ready](https://img.shields.io/badge/E2E-Playwright-blue.svg)](#)

*(Insert Screenshot 1: VibeGuard CLI output showing FAIL with red vulnerability alerts)*

</div>

---

## 📖 The Story: Why VibeGuard?

I asked Claude to build a SaaS application for me.

It worked. 

But when I looked under the hood...
- ❌ Hardcoded Stripe secret keys
- ❌ SQL Injection vulnerabilities
- ❌ Missing health endpoints
- ❌ No correlation IDs for tracing
- ❌ Database connection leaks

**VibeGuard found them in seconds.**

I pasted the VibeGuard repair prompt back into the AI. I ran the scanner again. 

**PASS.**

---

## ⚡ What is VibeGuard?

VibeGuard QA™ is a zero-infrastructure, local quality assurance and compliance framework specifically designed for AI-generated codebases. 

It provides instant intent verification, strict security standard mapping, and self-healing repair prompts to ensure the code your AI writes is actually safe for production.

### What Makes VibeGuard Different?

| Feature | Generic Prompt | VibeGuard QA™ |
| :--- | :---: | :---: |
| Reviews code | ✅ | ✅ |
| Intent verification | ❌ | ✅ |
| Standards mapping | ❌ | ✅ |
| Local CLI scanner | ❌ | ✅ |
| Hard Benchmarks | ❌ | ✅ |
| Repair prompts | ❌ | ✅ |
| CI/CD Template | ❌ | ✅ |

---

## 🛠️ How It Works

```text
AI Assistant
      │
      ▼
Generate Application
      │
      ▼
Run VibeGuard Scanner
      │
      ▼
Review Critical Findings
      │
      ▼
Apply Self-Healing Repair Prompt
      │
      ▼
Re-Scan
      │
      ▼
PASS ➔ Deploy to Production
```

---

## 🚀 The Demo: See it in action

This public repository demonstrates the VibeGuard workflow in real-time. 

### Step 1: Clone the Repo
Clone this repository to your local machine.

### Step 2: Run the Scanner on the Broken App
Navigate into this repository and run the VibeGuard CLI scanner against the `broken-app/` directory.

```bash
python /path/to/vibeguard-score.py ./broken-app
```
*(Insert Screenshot 2: Terminal showing VG-SEC-001 and VG-OPS-004 failures)*

### Step 3: Observe the Findings
The scanner will flag the hardcoded secrets, connection leaks, and SQL injection flaws that the AI originally generated.

### Step 4: Apply the Repair Prompt
Copy the VibeGuard repair instruction and ask your AI to fix the app. 
> *"Harden this application according to the VibeGuard standards."*

*(Insert Screenshot 3: AI Assistant automatically generating the fixes)*

### Step 5: Re-scan the Repaired App
Run the scanner against the `repaired-app/` directory (which contains the AI's fixes).

```bash
python /path/to/vibeguard-score.py ./repaired-app
```

**Result: 100% PASS.**
*(Insert Screenshot 4: Terminal showing a green 100% PASS score)*

---

## 📦 What's Included in the Premium Package?

When you buy VibeGuard QA™, you get the complete toolkit to secure your AI workflows:
- **IDE Rule Files**: Drop-in `.cursorrules` and `.clauderules` files to instantly teach your AI secure coding standards.
- **The CLI Engine**: The local `vibeguard-score.py` engine to run compliance checks and generate E2E Playwright tests dynamically.
- **CI/CD Templates**: Ready-to-use GitHub Actions templates to block insecure AI code from ever merging into your `main` branch.
- **Standalone Prompts**: Copy-paste prompt modules for ChatGPT and web interfaces.

---

## ❓ FAQ

**Does my code stay local?**
Yes. The VibeGuard CLI scanner is a 100% local Python script. It never sends your proprietary code to any external servers or APIs.

**Which AI tools does it work with?**
It works seamlessly with Cursor, Claude Code, GitHub Copilot, and any web-based LLM (like ChatGPT) via our standalone prompt modules.

**Does it work on Windows, Mac, and Linux?**
Yes, the Python scoring engine is completely cross-platform.

**Can I customize the rules?**
Absolutely. The `.cursorrules` and prompt matrices are plain text and fully editable so you can add your own internal company standards.

---

## 🛒 Ready to harden your AI code?

Detect production issues before deployment. Validate AI-generated applications before shipping.

👉 **[Get VibeGuard QA™ on Gumroad](https://gumroad.com)**
