# RAD-AI: Rethinking Architecture Documentation for AI-Augmented Ecosystems

- Canonical: https://oalarsen.com/papers/rad-ai/
- Authors: Oliver Aleksander Larsen, Mahyar T. Moghaddam
- Venue: ANGE 2026 Workshop at IEEE ICSA 2026
- arXiv: https://arxiv.org/abs/2603.28735
- DOI: https://doi.org/10.1109/icsa-c68850.2026.00054
- IEEE Xplore: https://ieeexplore.ieee.org/document/11641201
- PDF: https://oalarsen.com/papers/rad-ai/paper.pdf
- Code: https://github.com/Oliver1703dk/RAD-AI

## TL;DR

A backward-compatible extension of arc42 and C4 for AI-augmented ecosystems, increasing EU AI Act Annex IV documentation addressability from ~36% to ~93%, validated on Uber Michelangelo and Netflix Metaflow.

## Abstract

AI-augmented ecosystems (interconnected systems where multiple AI components interact through shared data and infrastructure) are becoming the architectural norm for smart cities, autonomous fleets, and intelligent platforms. Yet the architecture documentation frameworks practitioners rely on, arc42 and the C4 model, were designed for deterministic software and cannot capture probabilistic behavior, data-dependent evolution, or dual ML/software lifecycles. This gap carries regulatory consequence: the EU AI Act (Regulation 2024/1689) mandates technical documentation through Annex IV that no existing framework provides structured support for, with enforcement for high-risk systems beginning August 2, 2026. We present RAD-AI, a backward-compatible extension framework that augments arc42 with eight AI-specific sections and C4 with three diagram extensions, complemented by a systematic EU AI Act Annex IV compliance mapping. A regulatory coverage assessment with six experienced software-architecture practitioners provides preliminary evidence that RAD-AI increases Annex IV addressability from approximately 36% to 93% (mean rating) and demonstrates substantial improvement over existing frameworks. Comparative analysis on two production AI platforms (Uber Michelangelo, Netflix Metaflow) captures eight additional AI-specific concerns missed by standard frameworks and demonstrates that documentation deficiencies are structural rather than domain-specific. An illustrative smart mobility ecosystem case study reveals ecosystem-level concerns, including cascading drift and differentiated compliance obligations, that are invisible under standard notation.

## FAQs

### What is the best architecture documentation framework for AI systems?

RAD-AI extends arc42 and C4, two of the most widely adopted frameworks, with AI-specific sections and diagrams, making it backward-compatible with existing documentation practices.

### How does RAD-AI address EU AI Act compliance?

RAD-AI maps its documentation sections directly to EU AI Act Annex IV requirements, improving addressability from ~36% (vanilla arc42/C4) to ~93%.

### What case studies validate RAD-AI?

We evaluated RAD-AI on two production ML platforms: Uber Michelangelo and Netflix Metaflow, demonstrating practical applicability at scale.
