# Hybrid Large-Language-Model Meal Recommender System for Athletes: A Short Communication

- Canonical: https://oalarsen.com/papers/meal-recommender/
- Authors: Oliver Aleksander Larsen, Vinay Chakravarthi Gogineni
- Venue: Results in Engineering
- SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6233133
- SSRN identifier: 6233133

## TL;DR

A hybrid LLM recommender for CarboPlanner that combines in-context learning with LoRA fine-tuned Mistral-7B, achieving 46.7% accuracy and 100% format adherence, outperforming ICL-only and random baselines.

## Abstract

Athletes often struggle with static, rule-based meal plans that fail to adapt to evolving personal preferences and feedback, leading to reduced adherence and suboptimal nutrition for performance. This short communication introduces a hybrid large-language-model (LLM)-driven recommender system to personalize meal recommendations within CarboPlanner, a sports nutrition platform. The system combines in-context learning (ICL) for short-term adaptation via dynamic prompts incorporating user profiles, recent feedback, and meal candidates, with parameter-efficient fine-tuning (PEFT) using low-rank adaptation (LoRA) on the Mistral-7B-Instruct model for long-term, system-wide learning from accumulated feedback. Implemented as a modular Flask API integrated seamlessly into CarboPlanner's existing infrastructure (Flutter app, NestJS backend, and MongoDB database), the system processes athlete feedback through dual loops: immediate ICL updates and periodic PEFT retraining. Evaluation on 1000 test prompts from a held-out dataset demonstrated superior performance over baselines. The hybrid model achieved 46.7% prediction accuracy and 100% format adherence, outperforming the non-fine-tuned ICL-only model (41.5% accuracy, 39.7% format adherence) and random selection (20% accuracy, 100% format adherence).

## FAQs

### What model does the meal recommender use?

The system uses Mistral-7B-Instruct fine-tuned with LoRA/PEFT (Parameter-Efficient Fine-Tuning), enabling dietary-aware meal generation without full model retraining.

### How accurate is the meal recommender?

The hybrid model achieves 46.7% prediction accuracy and 100% format adherence on 1000 test prompts, outperforming ICL-only (41.5% accuracy, 39.7% format adherence) and random selection (20% accuracy).

### Is this related to CarboPlanner?

This research extends the BSc thesis work at SDU on personalized nutrition for athletes, which informed the development of the CarboPlanner startup.
