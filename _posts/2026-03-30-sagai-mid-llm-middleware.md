---
layout: post
title: "Behind the Paper: Can LLMs Fix Schema Mismatches?"
date: 2026-03-30 12:00:00 +0200
description: "SAGAI-MID uses LLMs to resolve API schema mismatches at runtime. The CODEGEN strategy generates reusable transformation functions with 0.90 pass@1 accuracy."
tags: [generative-ai, middleware, interoperability, software-architecture, icsa-2026]
categories: [papers]
related_posts: true
---

## The Problem

If you've ever integrated two services that should work together but don't because their JSON schemas are slightly different, you know the pain. Field `user_name` on one side, `username` on the other. Nested objects versus flat structures. Date formats that don't match. Enums with different capitalization.

In microservice architectures, this is not a rare annoyance — it's a persistent tax. Every breaking API change requires someone to write adapter code, coordinate deployment timing, and test the integration. For large systems with dozens of services, schema drift consumes significant engineering bandwidth.

We asked: what if middleware could resolve these mismatches automatically, using an LLM to figure out the mapping?

## What We Did

SAGAI-MID is a **FastAPI middleware layer** that sits between services and intercepts requests with incompatible schemas. When it detects a mismatch (structural, semantic, or type-level), it invokes an LLM to generate a transformation.

The system has a **five-layer pipeline**: request interception, schema comparison, mismatch detection (hybrid rule-based + embedding similarity), resolution strategy selection, and a three-tier safeguard stack (validation, fallback, circuit breaker).

The interesting design decision is the **dual resolution strategy**:

- **DIRECT:** The LLM receives the source payload and target schema, and outputs the transformed payload directly. This is fast — one LLM call — but non-deterministic. Run it twice and you might get different results.

- **CODEGEN:** The LLM generates a Python transformation *function* that maps from source to target schema. This function is compiled, tested against sample data, and cached. Future requests with the same schema pair reuse the cached function — no LLM call needed.

Think of DIRECT as asking a translator to translate each sentence on the fly, and CODEGEN as asking the translator to write a phrasebook that anyone can use later.

## What We Found

We tested across **10 schema mismatch scenarios** (ranging from simple field renames to complex structural transformations) and **6 different LLMs** (including GPT-4, Claude, and open-source alternatives).

Key results:

- **CODEGEN achieves 0.90 pass@1 accuracy** — 90% of generated transformation functions pass correctness tests on the first attempt.
- **CODEGEN outperforms DIRECT by ~8%** in accuracy. The act of writing a reusable function forces the LLM to be more precise than when it's doing ad-hoc translation.
- **Cost varies dramatically across LLMs.** The best-performing model isn't always the most expensive. Some open-source models achieve competitive accuracy at a fraction of the cost.
- **Failed generations are caught by the safeguard stack** before reaching production. The system validates every transformation output, falls back to a default mapping on failure, and trips a circuit breaker if failure rates spike.

## Why It Matters

The immediate application is reducing integration toil in microservice architectures. But the broader implication is about **LLMs as architectural middleware** — using generative models not to create user-facing content, but to handle structural impedance mismatches between system components.

CODEGEN is particularly interesting because it combines LLM flexibility with deterministic execution: the LLM generates the function once, but the function runs without the LLM afterward. That's a pattern — LLM-generated artifacts cached for reuse — that generalizes well beyond schema mapping.

The 0.90 accuracy also sets a clear threshold: good enough for many integration scenarios with proper safeguards, but not a drop-in replacement for hand-written adapters in safety-critical systems. Knowing where that line falls is important for architects deciding whether to adopt this approach.

## Read the Paper

- **Paper:** [SAGAI-MID: A Generative AI-Driven Middleware for Dynamic Runtime Interoperability](/publications/)
- **Code:** [GitHub repository](https://github.com/Oliver1703dk/sagai-mid)
- **Venue:** SAGAI 2026 Workshop at IEEE ICSA 2026, Amsterdam

---

*This post is part of a series summarizing our four papers at [IEEE ICSA 2026](https://conf.researchr.org/home/icsa-2026). See also:*
- *[Behind the Paper: Flood Detection on Edge Devices](/blog/2026/flood-detection-edge-devices/)*
- *[Behind the Paper: Documenting AI Systems for the EU AI Act](/blog/2026/rad-ai-documentation/)*
- *[Behind the Paper: Bitcoin-Native Sovereign Architecture](/blog/2026/bitsov-sovereign-infrastructure/)*
