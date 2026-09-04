# BitSov: A Composable Bitcoin-Native Architecture for Sovereign Internet Infrastructure

- Canonical: https://oalarsen.com/papers/bitsov/
- Authors: Oliver Aleksander Larsen, Rasmus Thorsen Larsen, Mahyar T. Moghaddam
- Venue: BlockArch 2026 Workshop at IEEE ICSA 2026
- arXiv: https://arxiv.org/abs/2603.28727
- DOI: https://doi.org/10.1109/icsa-c68850.2026.00060
- IEEE Xplore: https://ieeexplore.ieee.org/document/11641158
- Status: Published (IEEE ICSA 2026 Companion)
- PDF: https://oalarsen.com/papers/bitsov/paper.pdf

## TL;DR

An eight-layer Bitcoin-native protocol stack for sovereign internet infrastructure, featuring payment-gated messaging, timechain-locked contracts, and a self-sustaining economic flywheel.

## Abstract

Today's internet concentrates identity, payments, communication, and content hosting under a small number of corporate intermediaries, creating single points of failure, enabling censorship, and extracting economic rent from participants. We present BitSov, an architectural framework for sovereign internet infrastructure that composes existing decentralized technologies (Bitcoin, Lightning Network, decentralized storage, federated messaging, and mesh connectivity) into a unified, eight-layer protocol stack anchored to Bitcoin's base layer. The framework introduces three architectural patterns: (1) payment-gated messaging, where every transmitted message requires cryptographic proof of a Bitcoin payment, deterring spam through economic incentives rather than moderation; (2) timechain-locked contracts, which anchor subscriptions and licenses to Bitcoin block height (the timechain) rather than calendar dates; and (3) a self-sustaining economic flywheel that converts service revenue into infrastructure growth. A dual settlement model supports both on-chain transactions for permanence and auditability and Lightning micropayments for high-frequency messaging. As a position paper, we analyze the quality attributes, discuss open challenges, and propose a research agenda for empirical validation.

## FAQs

### What is Bitcoin-native sovereign infrastructure?

Infrastructure that uses Bitcoin's blockchain and Lightning Network as foundational layers, removing dependence on centralized DNS, CAs, and cloud providers.

### What are the three architectural patterns in BitSov?

Payment-gated messaging (spam prevention via micropayments), timechain-locked contracts (time-bound agreements settled on-chain), and a self-sustaining economic flywheel (network effects that fund infrastructure).
