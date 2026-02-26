---
id: "01-orient"
title: "Orient Claude to Collection Policy"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Start Claude Code"
    type: "terminal"
    instruction: |
      Navigate to the `library-context/` folder and start Claude Code:

      ```
      cd ~/workshop/library-context
      claude
      ```
    checkpoint: "You see the Claude Code `>` prompt."

  - index: 1
    label: "Test Claude's understanding of collection policy"
    type: "prompt"
    instruction: |
      Before working on collection tasks, verify Claude has absorbed the policy details from CLAUDE.md:
    prompt_text: |
      Based on CLAUDE.md, summarize our collection development policy in these terms:
      1. What are the five selection criteria, and what does each one mean in practice?
      2. What COUNTER 5 report types should I reference for usage data, and what does each measure?
      3. What is the critical distinction between TR_B1 and TR_B2 metrics?
      4. What should I avoid writing in vendor-related documents?
    checkpoint: "Claude should list the five criteria (scope, authority, accuracy, currency, coverage), distinguish TR_B1 (requests/downloads) from TR_B2 (investigations/abstract views), and note the restriction on dollar amounts."
    facilitator_note: "The TR_B1 vs TR_B2 distinction matters: TR_B1 counts full-text downloads (high-intent), while TR_B2 counts abstract views (may not lead to full use). If a library is paying for content but TR_B1 is low while TR_B2 is high, patrons are looking at abstracts but not downloading — a signal worth investigating."

  - index: 2
    label: "Use --print for a quick policy lookup"
    type: "terminal"
    instruction: |
      Open a **new terminal tab** and run a non-interactive policy question:

      ```
      claude --print "In one sentence each, define TR_B1 and TR_B2 in the context of COUNTER 5 usage reporting. Then state which metric is more meaningful for a cancellation decision and why."
      ```

      Compare the result to what Claude said in your interactive session. The answer should be consistent.
    checkpoint: "You see a clear two-definition answer with a cancellation recommendation printed directly to your terminal."
    facilitator_note: "Point out that --print doesn't read CLAUDE.md — it uses Claude's general knowledge. This is important: policy-aware responses (referring to your library's specific criteria) only happen in an interactive session where CLAUDE.md is loaded. --print is for general questions, not library-specific ones."

  - index: 3
    label: "Pass the usage report to Claude with @"
    type: "prompt"
    instruction: |
      Switch back to your Claude Code session and use the `@` reference to load the usage data:
    prompt_text: |
      @usage-report.csv

      Look at this COUNTER 5 usage report. Without analyzing it yet, tell me:
      1. What column structure does this report use?
      2. Are there any data quality issues you notice (missing values, zero rows, unusual patterns)?
      3. How many titles are in the report?
    checkpoint: "Claude reads the CSV and correctly describes the column structure, notes the number of titles, and flags any obvious data issues."
    facilitator_note: "This step teaches the @-reference technique with a data file rather than a text document. CSV files are a common format for usage data. Claude can read and reason about them directly — participants are often surprised that they don't need to copy-paste the data manually."

  - index: 4
    label: "Ask Claude what's missing from the collection policy"
    type: "prompt"
    instruction: |
      Like any policy document, CLAUDE.md has gaps. Ask Claude to identify them:
    prompt_text: |
      Based on CLAUDE.md's collection development section, what information is NOT included that would help you make better collection recommendations? Name 3–4 specific gaps and briefly explain what kind of decisions each gap would affect.
    checkpoint: "Claude identifies practical gaps such as: specific subject areas covered, acquisition budget parameters, curriculum alignment details, deaccessioning criteria, or interlibrary loan patterns."
    facilitator_note: "Participants often find this step unexpectedly useful for their actual work. Claude's gap analysis often surfaces things they haven't thought to document in their own collection policies. Encourage them to take notes."

  - index: 5
    label: "Compare interactive vs. non-interactive approaches"
    type: "observe"
    instruction: |
      You've now used both modes. Compare them:
    observe_items:
      - "Interactive mode (claude): reads CLAUDE.md, carries context across turns, can use @file references"
      - "Non-interactive mode (claude --print): fast one-off answers, uses only Claude's general knowledge, no CLAUDE.md context"
      - "@ file references: let you pass structured data (CSV, text, markdown) directly into any interactive prompt"
      - "For collection work: use interactive mode when your library's policy matters; --print for general standards questions"
    reflection_prompt: "Give an example from your own collection work where you'd use --print vs. an interactive session. What's the deciding factor?"
---

## Orient Claude to Collection Policy

Collection development decisions are most defensible when they're grounded in policy. The `CLAUDE.md` file in this workshop includes a simplified version of a collection policy: five selection criteria, COUNTER 5 metric definitions, and a note about vendor negotiations.

This exercise establishes that Claude understands those policy parameters, practices two different Claude Code modes for different question types, and introduces using `@` to pass usage data files directly to Claude.

## Discussion

- What details would you add to the CLAUDE.md collection policy section for your specific subject area or library type?
- How does knowing that `--print` doesn't read CLAUDE.md change which mode you'd use for different questions?
