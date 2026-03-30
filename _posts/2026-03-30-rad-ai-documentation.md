---
layout: post
title: "Behind the Paper: Documenting AI Systems for the EU AI Act"
date: 2026-03-30 10:00:00 +0200
description: "RAD-AI extends arc42 and C4 architecture docs for AI systems, improving EU AI Act Annex IV compliance addressability from 36% to 93%."
tags: [ai-governance, architecture-documentation, eu-ai-act, software-architecture, icsa-2026]
categories: [papers]
related_posts: true
---

## The Problem

If you've documented a software system using arc42 or C4, you know the drill: context diagrams, component views, deployment views, runtime scenarios. These frameworks are mature and widely adopted. But they were designed for traditional software systems, and they have a blind spot: machine learning.

An ML-powered system has concerns that arc42 and C4 simply don't address. Where does training data come from, and how is its provenance tracked? How is model versioning handled? What happens when a model drifts in production? Who oversees the system's decisions, and what feedback loops exist?

These aren't edge cases anymore. The EU AI Act — which entered into force in 2024 — requires providers of high-risk AI systems to maintain detailed technical documentation covering exactly these topics. Annex IV of the Act specifies what that documentation must include: training data descriptions, design choices, risk management, monitoring plans, and more.

We checked: standard arc42 and C4 documentation, applied by the book, covers roughly **36% of Annex IV requirements**. That's a compliance gap no team wants to discover during an audit.

## What We Did

RAD-AI is a **backward-compatible extension** of arc42 and C4 that adds AI-specific viewpoints. It is not a replacement — teams already using arc42 or C4 can adopt RAD-AI incrementally.

The core additions are:

- **8 new arc42 sections** covering data lineage, model lifecycle, feedback loops, drift monitoring, ethical constraints, and human oversight mechanisms.
- **3 new C4 diagram types** that visualize ML pipeline components, training-inference boundaries, and data flow from ingestion through model deployment.
- **An explicit mapping to EU AI Act Annex IV** — each RAD-AI viewpoint is traced to the specific regulatory clause it satisfies, so architects can verify compliance structurally rather than through ad-hoc checklists.

The framework is parameterized by AI risk classification: a low-risk system won't need all sections, while a high-risk medical AI needs every one.

## What We Found

We evaluated RAD-AI against Annex IV requirements using two real-world case studies: Uber's Michelangelo ML platform and Netflix's Metaflow pipeline framework. The results:

- **Standard arc42 + C4:** ~36% of Annex IV requirements addressable
- **RAD-AI extensions:** ~93% of Annex IV requirements addressable

The remaining ~7% gap covers organizational and legal requirements (e.g., contact information for the responsible person, CE marking) that fall outside the scope of architecture documentation.

A practitioner evaluation with software architects confirmed that the extensions integrate naturally into existing documentation workflows. The most valued additions were data lineage tracking and the regulatory compliance mapping itself.

## Why It Matters

The EU AI Act applies to any AI system deployed in or affecting the EU market. Compliance is not optional, and the documentation requirements are detailed. Most teams don't have a structured way to produce the required documentation — they rely on ad-hoc write-ups that miss critical sections.

RAD-AI gives architects a concrete framework: follow the template, fill in the sections, and you can trace your documentation to regulatory requirements. It turns a legal obligation into an engineering workflow, which is where compliance actually scales.

## Read the Paper

- **Paper:** [RAD-AI: Rethinking Architecture Documentation for AI-Augmented Ecosystems](/publications/)
- **Code:** [GitHub repository](https://github.com/Oliver1703dk/RAD-AI)
- **Venue:** ANGE 2026 Workshop at IEEE ICSA 2026, Amsterdam

---

*This post is part of a series summarizing our four papers at [IEEE ICSA 2026](https://conf.researchr.org/home/icsa-2026). See also:*
- *[Behind the Paper: Flood Detection on Edge Devices](/blog/2026/flood-detection-edge-devices/)*
- *[Behind the Paper: Bitcoin-Native Sovereign Architecture](/blog/2026/bitsov-sovereign-infrastructure/)*
- *[Behind the Paper: Can LLMs Fix Schema Mismatches?](/blog/2026/sagai-mid-llm-middleware/)*
