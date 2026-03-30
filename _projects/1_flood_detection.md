---
layout: page
title: Flood Detection System
description: Edge-based standing-water detection for agricultural vehicles using FSM-guided YOLO model tiering
img: assets/img/publication_preview/flood-detection-thumb.png
importance: 1
category: research
related_publications: true
---

Real-time standing-water detection on agricultural edge devices. The system runs on a Raspberry Pi 5 paired with an NVIDIA Jetson AGX Orin, using MQTT for inter-device communication.

## Architecture

A finite-state machine (FSM) control plane dynamically selects between inference tiers based on connectivity, battery state, and model confidence thresholds. When the lightweight local model is sufficient, inference stays on the Raspberry Pi. When conditions demand it, frames are offloaded to the Jetson for heavier YOLO ensemble processing.

## Key Components

- **Hardware:** Raspberry Pi 5, NVIDIA Jetson AGX Orin, camera module, environmental sensors
- **ML Models:** YOLO ensemble with multi-model consensus voting
- **Communication:** MQTT publish-subscribe for inter-device coordination
- **Sensor Fusion:** Diurnal-aware fusion of camera and environmental sensor data for robustness across lighting conditions

## Results

The FSM-guided tiering approach bounds tail latency while maintaining detection accuracy across varying field conditions. The multi-model consensus reduces false positives compared to single-model inference.

## Links

- **Paper:** {% cite larsen2026flood %}
- **Code:** [github.com/Oliver1703dk/flood_detection_system](https://github.com/Oliver1703dk/flood_detection_system)
