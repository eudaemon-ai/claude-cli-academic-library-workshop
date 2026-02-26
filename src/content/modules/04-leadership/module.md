---
id: "04-leadership"
title: "Library Leadership"
tagline: "Draft strategic documents and assessment narratives with AI assistance"
icon: "briefcase"
estimated_minutes: 60
role_tags: ["administration", "leadership"]
exercises:
  - id: "01-orient"
    title: "Orient Claude to Your Leadership Role"
    estimated_minutes: 15
  - id: "02-strategic-plan"
    title: "Draft a Strategic Goal"
    estimated_minutes: 15
  - id: "03-assessment-narrative"
    title: "Turn Data into an Assessment Narrative"
    estimated_minutes: 15
  - id: "04-budget-brief"
    title: "Build a Funding Argument"
    estimated_minutes: 15
---

## About This Module

Library leadership involves a constant stream of high-stakes documents: strategic plans that must satisfy accreditors, board members, and faculty simultaneously; assessment reports that need to tell a coherent story from scattered data; budget arguments that have to be persuasive without overpromising. Each document type has a distinct register, a specific audience, and professional risks if it gets the tone wrong.

Claude Code can act as a first-draft partner for all of these — faster and more malleable than starting from a blank page. But the judgment calls that make these documents defensible remain entirely yours: which findings matter, what commitments you're willing to make, and how much uncertainty to disclose to which audience.

This module assumes you are in a director, dean, or senior administrator role. You won't be writing patron emails or cataloging records — you'll be writing for provosts, board members, and your own staff.

## What You'll Learn

- How to configure and test Claude's understanding of your institution's strategic context
- How to use Claude to draft SMART strategic goals and adapt them for multiple audiences
- How to transform raw annual statistics into a provost-ready executive narrative
- How to use anticipation prompting — asking Claude to surface objections before an audience does
- How constraint-setting (`/clear` and hard word limits) produces sharper leadership documents

## Before You Begin

Make sure Claude Code is installed on your machine. Installation instructions for each platform:

- [macOS](https://docs.anthropic.com/en/docs/claude-code/setup)
- [Windows](https://docs.anthropic.com/en/docs/claude-code/setup#set-up-on-windows)
- [Linux](https://docs.anthropic.com/en/docs/claude-code/setup)

Once installed, navigate to your `library-context/` folder and start Claude Code with `claude`. If you don't have the folder yet, download it from **[workshop-materials](https://github.com/eudaemon-ai/claude-cli-academic-library-workshop/releases/download/workshop-materials/library-context.zip)**. You'll pass `library-stats.txt` to Claude directly with the `@` syntax throughout this module.
