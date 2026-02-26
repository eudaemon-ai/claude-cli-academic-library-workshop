---
id: "02-cataloging"
title: "Cataloging & Metadata"
tagline: "Generate and enhance catalog records with AI assistance"
icon: "tag"
estimated_minutes: 60
role_tags: ["cataloging", "metadata"]
exercises:
  - id: "01-orient"
    title: "Orient Claude to Cataloging Standards"
    estimated_minutes: 15
  - id: "02-marc-record"
    title: "Generate a MARC-Style Record"
    estimated_minutes: 15
  - id: "03-subject-headings"
    title: "Suggest LCSH Subject Headings"
    estimated_minutes: 15
  - id: "04-abstract"
    title: "Generate an Annotated Abstract"
    estimated_minutes: 15
---

## About This Module

Cataloging is exacting, standards-driven work. Even small errors in subject headings, indicators, or descriptive fields ripple through discovery systems. In this module, you'll learn how to use Claude Code to accelerate the most time-consuming parts of cataloging—while understanding where human verification is irreplaceable.

You'll practice generating MARC-style records, suggesting LC subject headings, and writing annotated abstracts. At each step, you'll also examine Claude's outputs critically—learning to spot where AI assistance helps and where it needs your expertise to catch errors.

## What You'll Learn

- How to verify Claude understands cataloging standards before generating records
- How `claude --help` and `/help` differ — CLI launch flags versus in-session commands
- How to use `claude --print` for quick standards lookups without opening a full session
- How to pass catalog item files to Claude using `@` references
- How to generate MARC 21 records with proper RDA descriptive standards
- How to ask Claude to identify its own uncertain fields before you verify them
- How to use Claude Code's file-writing capability to save draft records
- How to generate LCSH subject headings for multiple items and compare approaches
- How to write catalog-register abstracts (MARC 520/521) and archival scope notes

## Before You Begin

Make sure Claude Code is installed on your machine. Installation instructions for each platform:

- [macOS](https://docs.anthropic.com/en/docs/claude-code/setup)
- [Windows](https://docs.anthropic.com/en/docs/claude-code/setup#set-up-on-windows)
- [Linux](https://docs.anthropic.com/en/docs/claude-code/setup)

Once installed, navigate to your `library-context/` folder and start Claude Code with `claude`. If you don't have the folder yet, download it from **[workshop-materials](https://github.com/eudaemon-ai/claude-cli-academic-library-workshop/releases/download/workshop-materials/library-context.zip)**. Claude will read `CLAUDE.md` automatically and should acknowledge the cataloging standards and MARC conventions described there.
