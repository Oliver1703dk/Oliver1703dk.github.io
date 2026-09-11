# Persona-as-Configuration: Generative Stakeholder Reporting for Agricultural Floods

- Canonical: https://oalarsen.com/papers/persona-as-configuration/
- Authors: Oliver Aleksander Larsen, Tiziano Santilli, Francesco Daghero, Mahyar T. Moghaddam
- Venue: CASA 2026 Workshop at ECSA 2026
- arXiv: https://arxiv.org/abs/2607.17774
- PDF: https://oalarsen.com/papers/persona-as-configuration/paper.pdf
- Code: https://github.com/Oliver1703dk/generative-reporting-for-agricultural-floods

## TL;DR

An architectural pattern that keeps LLM stakeholder reports out of the flood-detection control plane: the generative layer is read-only, and each stakeholder is a versioned prompt template. Expert review rated it favourably on ISO/IEC 25010, with strongest agreement on separation of concerns.

## Abstract

Cyber-physical systems built on deterministic edge inference, such as on-vehicle flood detection for agricultural fields, produce structured decision logs that must be interpreted differently by heterogeneous stakeholders. Pairing such systems with large language models (LLMs) to generate stakeholder-specific reports introduces a tension: the generative layer is non-deterministic, while the edge plane must remain replayable and auditable. We propose an architectural pattern resting on two invariants: unidirectional consumption, in which the generative layer is a strict read-only consumer of the deterministic plane and never writes back, and persona-as-configuration, in which stakeholder adaptation is a versioned prompt-template artifact rather than runtime improvisation. We instantiate the pattern as a context-aware dashboard layer over the JSON decision logs of a previously published edge-based standing-water detection system, and analyse how the integration boundary admits standard generative-reliability mitigations as configuration- or middleware-level extension points. A structured expert review rated the pattern favourably across five ISO/IEC 25010-aligned quality dimensions, with strongest agreement on separation of concerns. End-user evaluation with agricultural stakeholders is planned for future work.

## FAQs

### What is persona-as-configuration?

Stakeholder adaptation is treated as a versioned prompt-template artifact rather than runtime improvisation. Each of six stakeholders (farmers, agronomists, farm managers, government agencies, insurers, decision-makers) maps to a first-class configuration element.

### How does the LLM stay out of the flood detection system?

Unidirectional consumption: the generative layer is a strict read-only consumer of the deterministic edge plane and never writes back, so LLM non-determinism cannot compromise replayability or audit.

### How was the pattern evaluated?

A structured expert review rated it favourably across five ISO/IEC 25010-aligned quality dimensions, with strongest agreement on separation of concerns. End-user evaluation with agricultural stakeholders is planned for future work.
