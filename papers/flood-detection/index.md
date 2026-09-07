# Edge-Based Standing-Water Detection via FSM-Guided Tiering and Multi-Model Consensus

- Canonical: https://oalarsen.com/papers/flood-detection/
- Authors: Oliver Aleksander Larsen, Mahyar T. Moghaddam
- Venue: IEEE ICSA 2026, Software Architecture in Practice Track
- Status: Published (IEEE ICSA 2026 Companion)
- arXiv: https://arxiv.org/abs/2604.03308
- DOI: https://doi.org/10.1109/icsa-c68850.2026.00016
- IEEE Xplore: https://ieeexplore.ieee.org/document/11641159
- PDF: https://oalarsen.com/papers/flood-detection/paper.pdf
- Code: https://github.com/Oliver1703dk/flood_detection_system

## Cite this

Larsen, O. A., & Moghaddam, M. T. (2026). Edge-Based Standing-Water Detection via FSM-Guided Tiering and Multi-Model Consensus. In 2026 IEEE 23rd International Conference on Software Architecture Companion (ICSA-C) (pp. 45–52). IEEE. https://doi.org/10.1109/icsa-c68850.2026.00016

```bibtex
@inproceedings{larsen2026flood,
  title     = {Edge-Based Standing-Water Detection via
               FSM-Guided Tiering and Multi-Model Consensus},
  author    = {Larsen, Oliver Aleksander and Moghaddam, Mahyar T.},
  booktitle = {2026 IEEE 23rd International Conference on Software Architecture Companion (ICSA-C)},
  year      = {2026},
  doi       = {10.1109/icsa-c68850.2026.00016},
  publisher = {IEEE},
  pages     = {45--52},
  eprint    = {2604.03308},
  archiveprefix = {arXiv},
  primaryclass  = {cs.CV},
}
```
## TL;DR

A deployed edge architecture for standing-water detection that uses an FSM to trade accuracy, latency, and energy across inference tiers, outperforming static baselines while using less energy than always-offload policies.

## Abstract

Standing water in agricultural fields threatens vehicle mobility and crop health. This paper presents a deployed edge architecture for standing-water detection using Raspberry-Pi-class devices with optional Jetson acceleration. Camera input and environmental sensors (humidity, pressure, temperature) are combined in a finite-state machine (FSM) that acts as the architectural decision engine. The FSM-guided control plane selects between local and offloaded inference tiers, trading accuracy, latency, and energy under intermittent connectivity and motion-dependent compute budgets. A multi-model YOLO ensemble provides image scores, while diurnal-baseline sensor fusion adjusts caution using environmental anomalies. All decisions are logged per frame, enabling bit-identical hardware-in-the-loop replays. Across ten configurations and sensor variants on identical field sequences with frame-level ground truth, we show that the combination of adaptive tiering, multi-model consensus, and diurnal sensor fusion improves flood-detection performance over static local baselines, uses less energy than a naive always-heavy offload policy, and maintains bounded tail latency in a real agricultural setting.

## FAQs

### What hardware does this system run on?

The system runs on a Raspberry Pi for lightweight inference and offloads to a Jetson AGX Orin for heavier models, connected via MQTT.

### How does the FSM control model selection?

A finite-state machine monitors resource utilization and environmental signals to transition between inference tiers, ranging from a fast, low-power model to a full YOLO ensemble when conditions demand it.

### What accuracy does the system achieve?

The multi-model consensus approach with diurnal sensor fusion achieves robust detection across varying lighting conditions, outperforming single-model baselines on our agricultural dataset.
