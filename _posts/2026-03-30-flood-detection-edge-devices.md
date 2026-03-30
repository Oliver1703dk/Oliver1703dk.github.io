---
layout: post
title: "Behind the Paper: Flood Detection on Edge Devices"
date: 2026-03-30 09:00:00 +0200
description: "How we built an agricultural flood detection system that runs YOLO models on a Raspberry Pi and Jetson, using a finite-state machine to pick the right model for the conditions."
tags: [edge-computing, computer-vision, iot, software-architecture, icsa-2026]
categories: [papers]
related_posts: true
---

## The Problem

Flooding in agricultural fields can destroy crops in hours, but many farms sit in areas with unreliable cellular coverage. Cloud-based detection systems fail when the network drops, and by the time a farmer drives out to check, the damage is done. What if the detection system could run entirely on devices mounted on farm vehicles — no cloud required?

That was the starting point for this paper. We wanted a system that could detect standing water in real time using edge hardware: a Raspberry Pi for sensor ingestion and control logic, and a Jetson device for running computer vision models. The hard part isn't just running a model on cheap hardware — it's knowing *which* model to run, and *when*.

## What We Did

The core idea is **FSM-guided model tiering** — a finite-state machine (FSM) that monitors environmental conditions and selects the appropriate detection tier.

Here's the intuition: standing water looks different throughout the day. In bright daylight, a lightweight YOLO model can confidently distinguish between water, wet soil, and dry ground. At dawn or dusk, shadows create ambiguity. In rain or fog, even a heavy model struggles without additional sensor input.

Our FSM tracks ambient conditions — light level, time of day, temperature, humidity — and transitions between states that each activate a different detection strategy:

- **Clear conditions:** A single lightweight YOLO model runs on the Jetson. Fast, low-power.
- **Ambiguous conditions:** A heavier model activates, or multiple models run in parallel. Detection requires multi-model consensus — at least two detectors must agree before flagging water.
- **Sensor fusion:** When visual detection alone isn't reliable, the system fuses camera output with environmental sensor readings to adjust confidence thresholds.

This is what we call **diurnal sensor fusion**: adapting the detection pipeline to the day-night cycle by combining what the camera sees with what the sensors measure.

## What We Found

The multi-model consensus approach significantly reduces false positives compared to single-model detection. The FSM keeps tail latency bounded by avoiding the heaviest inference paths unless conditions truly require them. The entire pipeline runs on-device — Raspberry Pi plus Jetson — with no cloud calls in the detection loop.

The key architectural insight is that the FSM acts as a **control plane** for inference: it doesn't do detection itself, but it decides how detection should happen given current conditions. This separation of detection logic from orchestration logic makes the system adaptable to new sensors or models without rearchitecting the pipeline.

## Why It Matters

Edge AI is often discussed in terms of model compression — making big models fit on small devices. This paper takes a different angle: instead of shrinking one model, use a state machine to choose among several models based on context. That's fundamentally an architectural decision, not just a machine learning one, and it generalizes beyond flood detection to any edge scenario where conditions change and hardware is constrained.

For the agricultural sector specifically, reliable flood detection without cloud dependency could prevent significant crop losses in areas where connectivity is patchy — which describes much of the world's farmland.

## Read the Paper

- **Paper:** [Edge-Based Standing-Water Detection via FSM-Guided Tiering and Multi-Model Consensus](/publications/)
- **Code:** [GitHub repository](https://github.com/Oliver1703dk/flood_detection_system)
- **Venue:** IEEE ICSA 2026, In Practice Track, Amsterdam

---

*This post is part of a series summarizing our four papers at [IEEE ICSA 2026](https://conf.researchr.org/home/icsa-2026). See also:*
- *[Behind the Paper: Documenting AI Systems for the EU AI Act](/blog/2026/rad-ai-documentation/)*
- *[Behind the Paper: Bitcoin-Native Sovereign Architecture](/blog/2026/bitsov-sovereign-infrastructure/)*
- *[Behind the Paper: Can LLMs Fix Schema Mismatches?](/blog/2026/sagai-mid-llm-middleware/)*
