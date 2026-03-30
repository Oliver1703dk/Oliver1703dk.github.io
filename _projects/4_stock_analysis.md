---
layout: page
title: Stock Analysis System
description: Multi-agent LLM system for financial analysis with specialized trading agents
importance: 4
category: research
---

A multi-agent system where specialized LLM agents collaborate on financial analysis and trading decisions. Each agent has a defined role, persistent memory, and inter-agent awareness.

## Architecture

- **Frontend:** Next.js dashboard for portfolio visualization and agent interaction
- **Backend:** Flask API server with Celery task queue and Redis for async processing
- **Database:** MongoDB for agent memory and trade history
- **Agents:** Named specialist agents (fundamental analysis, technical analysis, risk management, execution) with Mem0-based persistent memory

## Design

The system explores how agent specialization and inter-agent communication affect decision quality compared to monolithic LLM prompting. Each agent maintains its own context window and can query other agents for cross-domain signals.
