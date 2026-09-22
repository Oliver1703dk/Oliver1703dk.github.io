# NostrAgent: A Decentralized Identity and Delegation Architecture for Sovereign Agentic Systems

- Canonical: https://oalarsen.com/papers/nostr-agent/
- Authors: Oliver Aleksander Larsen, Mahyar T. Moghaddam
- Venue: AGENTICS 2026 (IJCCI), AIPAA special session, Full Paper
- arXiv: https://arxiv.org/abs/2609.22944
- PDF: https://oalarsen.com/papers/nostr-agent/paper.pdf
- Code: https://github.com/Oliver1703dk/agentics2026-replication-package

## TL;DR

NostrAgent unifies operator-sovereign identity, scoped delegation, peer trust, discovery, and Lightning L402 payment over Nostr relays, evaluated with a mixed-method design (ATAM/Delphi, STRIDE, benchmarks, and failure-mode analysis).

## Abstract

Autonomous AI agents increasingly act across organizational boundaries on behalf of human operators: they invoke third-party services, delegate subtasks to other agents, and pay for metered resources. Deploying such agents safely requires five capabilities that today live in separate systems: persistent identity, scoped delegation, peer trust, discovery, and payment. Existing approaches root these in centralized authorities or cover only subsets, so authority, trust, and payment fracture exactly where autonomy needs continuity: when a key rotates or a delegation must be revoked. We present NostrAgent, a decentralized architecture that unifies all five over Nostr relays using three custom event kinds: Kind 38100 identity declarations authenticated by BIP340 Schnorr signatures with pre-rotation commitments, Kind 38101 scoped delegation chains whose every hop verifiably narrows granted capabilities, and Kind 38102 peer attestations forming a Sybil-deterrent trust graph, with Lightning HTTP 402 (L402) binding payment to agent identity. Identity remains operator-sovereign without any registration authority; relays are substitutable transport rather than a trust root; and every authorization decision is replayable offline from signed events. We evaluate a Python prototype with a mixed-method design: ATAM quality analysis with a two-round mini-Delphi panel, STRIDE threat modeling across three trust boundaries, eleven benchmarks with non-parametric statistics, and 19 failure modes. Results show sub-millisecond offline verification, linear delegation-chain scaling, and Lightning-settled L402 at 157 ms median on regtest. 17 of 19 failure modes pass empirically, one is bounded analytically, and one is disclosed as an architectural limitation. NostrAgent demonstrates an auditable prototype substrate for trustworthy agentic systems without centralized trust roots.

## FAQs

### What is NostrAgent?

NostrAgent is a decentralized architecture that gives autonomous AI agents persistent operator-sovereign identity, scoped delegation, peer trust, discovery, and payment by publishing signed Nostr events (Kinds 38100–38102) and binding Lightning HTTP 402 (L402) charges to agent identity, without a registration authority.

### Which five capabilities does NostrAgent unify (G1–G5)?

Persistent identity (G1), scoped delegation (G2), peer trust (G3), discovery (G4), and payment (G5). Today these usually live in separate systems; NostrAgent keeps them continuous over Nostr relays with BIP340-authenticated events and L402.

### How was NostrAgent evaluated?

With a mixed-method design: ATAM quality analysis plus a two-round mini-Delphi panel, STRIDE threat modeling across three trust boundaries, eleven benchmarks with non-parametric statistics, and 19 failure modes (17 pass empirically, one bounded analytically, one disclosed as an architectural limitation).
