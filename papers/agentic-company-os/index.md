# The Agentic Company OS: Substrate Inversion for Sustained Enterprise Agent Deployment

- Canonical: https://oalarsen.com/papers/agentic-company-os/
- Authors: Oliver Aleksander Larsen, Mahyar T. Moghaddam
- Venue: AGENTICS 2026, position-paper track (IJCCI 2026)
- arXiv: https://arxiv.org/abs/2609.13334
- PDF: https://oalarsen.com/papers/agentic-company-os/paper.pdf

## TL;DR

Position paper arguing that sustained enterprise agent deployment fails when agents read human-shaped data; rebuild the cognitive substrate for LLM reasoning (Markdown as today's option), with context-bandwidth asymmetry, cross-loop coupling, and a four-layer Data/Knowledge/Intelligence/Governance framework.

## Abstract

Enterprise AI agents often succeed in a demonstration and then stall once they must operate day after day. An industry report estimates that most pilots never reach production and that deployed systems rarely retain feedback or improve over time, while agent benchmarks show single-run successes masking unreliable repetition. We argue that these failure modes share a common architectural root: agents reason over data structured for human operators and traditional applications, not for the language models that power them. This position paper proposes that companies deploying agents in sustained operation should rebuild their cognitive substrate, the shared environment agents read as working context, around representations matched to that reasoning surface, isolating schema translation to the action boundary. Markdown is the instantiation available today, not a proven agent-native primitive. Two mechanisms ground the argument: context-bandwidth asymmetry, the gap between one-pass reading of connected prose and field-by-field typed access that strips relations; and cross-loop coupling, the claim that action, skill, and policy loops compound only if they share one substrate. A four-layer framework (Data, Knowledge, Intelligence, Governance) operationalizes the position, with a Sync Agent enforcing the action boundary and a per-skill trust gradient, making governance and auditability structural properties of the substrate. The position revives the shared-substrate tradition of classical multi-agent systems under LLM-era economics. We analyze the main objections and risks, including indirect prompt injection on the compile path, and outline a research agenda for evaluating substrates directly.

## FAQs

### Why do enterprise AI agents stall after successful demos?

The paper argues that pilots often never reach sustained production because agents reason over data structured for human operators and traditional applications, not for the language models that power them. Single-run benchmark successes can also mask unreliable repetition.

### What is substrate inversion?

Companies deploying agents in sustained operation should rebuild their cognitive substrate (the shared environment agents read as working context) around representations matched to LLM reasoning, isolating schema translation to the action boundary. Markdown is the instantiation available today, not a proven agent-native primitive.

### What framework does the paper propose?

A four-layer framework (Data, Knowledge, Intelligence, Governance), with a Sync Agent enforcing the action boundary and a per-skill trust gradient, so governance and auditability become structural properties of the substrate.
