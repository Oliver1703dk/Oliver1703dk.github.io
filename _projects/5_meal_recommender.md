---
layout: page
title: Hybrid LLM Meal Recommender
description: BSc thesis — fine-tuning Mistral-7B with LoRA/PEFT for personalized meal recommendations
importance: 5
category: research
---

My BSc thesis at the University of Southern Denmark, graded 12/12 (A+). The project explored whether parameter-efficient fine-tuning of open-source LLMs could match or exceed proprietary models for structured recommendation tasks.

## Approach

- **Base Model:** Mistral-7B-Instruct
- **Fine-Tuning:** LoRA (Low-Rank Adaptation) via the PEFT library
- **Task:** Generate structured meal recommendations matching user dietary constraints, preferences, and nutritional targets
- **Evaluation:** Accuracy of macro/micronutrient targets, format adherence, user preference matching

## Results

- 46.7% nutritional accuracy on target matching
- 100% format adherence (valid structured output in every generation)
- The fine-tuned open-source model achieved competitive performance with GPT-4 on this narrow domain at a fraction of the inference cost

## Relevance

This work directly informed the CarboPlanner product and established a pattern I continue to use: validate an idea with research, then build the product.
