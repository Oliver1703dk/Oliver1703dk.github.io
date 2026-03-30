---
layout: page
title: Konsensus (Mindlink AI)
description: Bitcoin-native sovereign mesh communication — 30,000 lines of Rust
importance: 3
category: startup
related_publications: true
---

Konsensus is the core communication infrastructure of [Mindlink AI](https://mindlink.tech), a company I co-founded. It is a sovereign mesh communication system built entirely in Rust.

## Architecture

The system implements the BitSov architectural framework described in our ICSA 2026 paper. Communication is payment-gated via Lightning Network micropayments, eliminating spam without centralized moderation.

## Technical Details

- **Language:** Rust (approximately 30,000 lines)
- **Networking:** Peer-to-peer mesh with NAT traversal
- **Payments:** Lightning Network integration for micropayment gating
- **Identity:** Decentralized identity via Bitcoin key pairs
- **Encryption:** End-to-end encrypted messaging

## Status

Under active development. Pursuing a Horizon Europe DATA-02 consortium grant (EUR 7-11M) with partners in the Netherlands, Spain, and Austria.

## Links

- **Related Paper:** {% cite larsen2026bitsov %}
- **Company:** [mindlink.tech](https://mindlink.tech)
