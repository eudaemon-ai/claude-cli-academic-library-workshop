---
id: "03-collection-dev"
title: "Collection Development"
tagline: "Evidence-based selection, evaluation, and usage analysis"
icon: "chart-bar"
estimated_minutes: 60
role_tags: ["collection_dev", "liaison"]
exercises:
  - id: "01-orient"
    title: "Orient Claude to Collection Policy"
    estimated_minutes: 15
  - id: "02-selection"
    title: "Write a Selection Rationale"
    estimated_minutes: 15
  - id: "03-evaluate"
    title: "Evaluate a Vendor Offer"
    estimated_minutes: 15
  - id: "04-usage-analysis"
    title: "Analyze Usage Data"
    estimated_minutes: 15
---

## About This Module

Collection development requires balancing patron needs, budget constraints, collection gaps, and vendor relationships — all while applying consistent selection criteria. Claude Code can help you draft rationales, structure evaluation frameworks, and make sense of usage data, leaving you to exercise the professional judgment that no AI can replicate.

This module uses the library's collection policy (from `CLAUDE.md`) and a sample COUNTER 5 usage report (`usage-report.csv`) to practice realistic collection development tasks.

## What You'll Learn

- How to verify Claude understands your collection policy before making recommendations
- How `claude --print` can handle quick policy lookups, and why it doesn't read CLAUDE.md
- How to pass usage data files (CSV) to Claude using the `@` syntax
- How to draft and compare selection rationales for competing items
- How to build reusable selection templates from Claude-assisted work
- How to evaluate vendor offers systematically against collection policy criteria
- How to prepare for vendor negotiations using Claude-generated comparison tables and draft emails
- How to analyze COUNTER 5 TR_B1/TR_B2 patterns for cancellation and renewal decisions
- How to use `/clear` to reset context mid-session and what that means for ongoing analysis

## Before You Begin

Make sure Claude Code is installed on your machine. Installation instructions for each platform:

- [macOS](https://docs.anthropic.com/en/docs/claude-code/setup)
- [Windows](https://docs.anthropic.com/en/docs/claude-code/setup#set-up-on-windows)
- [Linux](https://docs.anthropic.com/en/docs/claude-code/setup)

Once installed, navigate to the `library-context/` folder and start Claude Code with `claude`. You'll also need `usage-report.csv` available — you'll pass it to Claude directly using the `@` syntax rather than opening it separately.
