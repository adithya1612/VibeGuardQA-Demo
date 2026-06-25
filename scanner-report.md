# VibeGuard QA™ Compliance Report

**Generated on:** 2026-06-25  
**Target Directory:** `broken-app/`  
**Overall Status:** **FAIL**  
**Compliance Score:** **50.0%** (Gate: >=80.0%)

---

## Executive Summary

The target codebase failed the VibeGuard QA™ compliance gate due to severe security vulnerabilities (SQL Injection, Hardcoded Secrets) and missing production operations scaffolding. Remediation is required before merging code into release branches.

---

## Finding Breakdown

### 🚨 Critical Severity Findings

#### 1. VG-SEC-001: Hardcoded Secrets Detector
- **Control Category:** Security
- **Confidence:** HIGH
- **File:** `server.js:6`
- **Evidence:** `const STRIPE_SECRET = "sk_test_51P32jABcDefGhIjKlMnOpQrStUvWxYz1234567890";`
- **Remediation:** Remove plain-text secret strings from source code. Migrate values into environment variables loaded securely via `process.env`.

---

### 🔴 High Severity Findings

#### 2. VG-SEC-002: SQL Injection Prevention Check
- **Control Category:** Security
- **Confidence:** HIGH
- **File:** `server.js:21`
- **Evidence:** ``const query = `SELECT * FROM users WHERE username = '${searchTerm}'`;``
- **Remediation:** Parameterize queries using query placeholders (e.g. `?` or `$1`) and array inputs instead of backtick template string variable interpolation.

---

### 🟡 Medium Severity Findings

#### 3. VG-SEC-003: Docker Root Privileges Check
- **Control Category:** Security
- **Confidence:** HIGH
- **File:** `Dockerfile`
- **Evidence:** File contains no `USER` declaration.
- **Remediation:** Declare a non-root user (like `USER node` or `USER 1000`) before the container start command to limit potential container breakouts.

#### 4. VG-OPS-004: Database Connection Leaks Heuristic
- **Control Category:** Operations
- **Confidence:** MEDIUM
- **File:** `server.js:18`
- **Evidence:** Database client connection is initialized (`mysql.createConnection`) inside request lifecycle but lacks a corresponding `.end()` or `.close()` call.
- **Remediation:** Wrap database actions in `try...finally` blocks to guarantee release, or migrate database clients to standard connection pools.

---

### 🔵 Low Severity Findings

#### 5. VG-OPS-001: Health Endpoint Validation
- **Control Category:** Operations
- **Confidence:** HIGH
- **File:** `server.js`
- **Evidence:** No `/health` or `/status` web routes detected in server source.
- **Remediation:** Implement a lightweight GET endpoint `/health` returning status headers for orchestrator checks.

#### 6. VG-OPS-003: Correlation ID Middleware Check
- **Control Category:** Operations
- **Confidence:** HIGH
- **File:** `server.js`
- **Evidence:** Request tracing middleware not found.
- **Remediation:** Inject a middleware assigning unique correlation IDs to incoming request headers and tracing context.
