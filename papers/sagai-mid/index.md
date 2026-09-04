# SAGAI-MID: A Generative AI-Driven Middleware for Dynamic Runtime Interoperability

- Canonical: https://oalarsen.com/papers/sagai-mid/
- Authors: Oliver Aleksander Larsen, Mahyar T. Moghaddam
- Venue: SAGAI 2026 Workshop at IEEE ICSA 2026
- arXiv: https://arxiv.org/abs/2603.28731
- DOI: https://doi.org/10.1109/icsa-c68850.2026.00090
- IEEE Xplore: https://ieeexplore.ieee.org/document/11641235
- Status: Published (IEEE ICSA 2026 Companion)
- PDF: https://oalarsen.com/papers/sagai-mid/paper.pdf
- Code: https://github.com/Oliver1703dk/sagai-mid

## TL;DR

A FastAPI middleware that uses LLMs to resolve schema mismatches at runtime, achieving 0.90 pass@1 across 10 interoperability scenarios, with CODEGEN outperforming DIRECT and the cheapest model being the most accurate.

## Abstract

Modern distributed systems integrate heterogeneous services, REST APIs with different schema versions, GraphQL endpoints, and IoT devices with proprietary payloads that suffer from persistent schema mismatches. Traditional static adapters require manual coding for every schema pair and cannot handle novel combinations at runtime. We present SAGAI-MID, a FastAPI-based middleware that uses large language models (LLMs) to dynamically detect and resolve schema mismatches at runtime. The system employs a five-layer pipeline: hybrid detection (structural diff plus LLM semantic analysis), dual resolution strategies (per-request LLM transformation and LLM-generated reusable adapter code), and a three-tier safeguard stack (validation, ensemble voting, rule-based fallback). We frame the architecture through Bass et al.'s interoperability tactics, transforming them from design-time artifacts into runtime capabilities. We evaluate SAGAI-MID on 10 interoperability scenarios spanning REST version migration, IoT-to-analytics bridging, and GraphQL protocol conversion across six LLMs from two providers. The best-performing configuration achieves 0.90 pass@1 accuracy. The CODEGEN strategy consistently outperforms DIRECT (0.83 vs 0.77 mean pass@1), while cost varies by over 30x across models with no proportional accuracy gain; the most accurate model is also the cheapest. We discuss implications for software architects adopting LLMs as runtime architectural components.

## FAQs

### How does SAGAI-MID resolve schema mismatches?

It uses a five-layer pipeline: schema extraction, hybrid mismatch detection, LLM-based resolution (via direct transformation or code generation), and a three-tier safeguard stack for validation.

### What accuracy does SAGAI-MID achieve?

The best LLM configuration achieves 0.90 pass@1 accuracy across 10 diverse interoperability scenarios, with the CODEGEN strategy generally outperforming DIRECT transformation.
