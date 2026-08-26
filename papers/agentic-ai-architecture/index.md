# Mining Architectural Quality Under Agentic AI Adoption: A Causal Study of Java Repositories

- Canonical: https://oalarsen.com/papers/agentic-ai-architecture/
- Authors: Oliver Aleksander Larsen, Mahyar T. Moghaddam
- Venue: Euromicro SEAA 2026, STREAM Track
- arXiv: https://arxiv.org/abs/2606.13298
- PDF: https://oalarsen.com/papers/agentic-ai-architecture/paper.pdf
- Code: https://github.com/Oliver1703dk/seaa2026-replication-package

## TL;DR

A causal study of 151 Java repositories showing agentic AI adoption leaves architectural smell counts essentially unchanged while code grows 12.8%; the apparent 6.7% drop in smell density is a denominator effect, not an architectural improvement.

## Abstract

AI coding tools are now used by a majority of developers, and agentic use of these tools has popularized the practice colloquially called "vibe coding". Yet causal evidence on their effect on software architecture is scarce. Prior causal work has measured code-level outcomes (complexity, static analysis warnings); whether such degradation propagates to architecture-level outcomes remains unknown. We mine 151 open-source Java repositories, 74 with detectable agentic AI adoption (identified via configuration files and Co-Authored-By commit trailers) and 77 propensity-matched controls, across a 13-month per-repository window yielding 1,811 monthly Arcan snapshots. We estimate the causal effect of adoption on architectural smell density (ASD) with a staggered difference-in-differences design and the Borusyak imputation estimator, applying a causal design recently used for code-level metrics to the architecture level. Total smell counts are essentially unchanged (+1.1%, p=0.82) while lines of code grow +12.8% (p=0.003); the resulting 6.7% ASD decline (p=0.004) is therefore a denominator effect rather than an architectural improvement. Per-type estimates and robustness checks (wild cluster bootstrap, Lee bounds, stale-observation sensitivity) corroborate the pattern; pre-trends are flat (Wald p=0.90), consistent with parallel trends. Density-normalized outcomes can mislead when treatment affects system size: raw counts and explicit decomposition are required for causal mining studies of AI tool adoption. The complete replication package, including the curated 151-repository monthly panel, is publicly available.

## FAQs

### Does AI-assisted coding degrade software architecture?

Across 151 open-source Java repositories, agentic AI adoption left total architectural smell counts essentially unchanged (+1.1%, p=0.82) while lines of code grew 12.8%. The study found no evidence of architecture-level degradation, but no genuine improvement either.

### Why does architectural smell density drop after AI adoption?

The 6.7% decline in architectural smell density is a denominator effect: code grows faster than new smells appear. Density-normalized metrics can mislead when a treatment changes system size, so raw counts and explicit decomposition are required.

### How was the causal effect of AI adoption estimated?

With a staggered difference-in-differences design and the Borusyak imputation estimator over 1,811 monthly Arcan snapshots, comparing 74 repositories with detectable agentic AI adoption against 77 propensity-matched controls, with robustness checks including wild cluster bootstrap and Lee bounds.
