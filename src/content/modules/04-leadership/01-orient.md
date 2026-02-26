---
id: "01-orient"
title: "Orient Claude to Your Leadership Role"
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

      Claude will automatically read `CLAUDE.md`, which now includes a Leadership Context section with institutional strategic priorities and stakeholder communication norms.
    checkpoint: "You see the Claude Code `>` prompt."

  - index: 1
    label: "Test Claude's leadership context"
    type: "prompt"
    instruction: |
      Before drafting any documents, verify Claude has absorbed the leadership-specific context from CLAUDE.md. Paste this prompt:
    prompt_text: |
      Based on CLAUDE.md, answer these questions:
      1. What are our four institutional strategic priorities for 2024–2027?
      2. What is the correct format for a memo to the Provost?
      3. What two things must never appear in documents intended for external audiences?
      4. How should I present a statistic that declined year-over-year?
    checkpoint: "Claude correctly names all four priorities, describes the 3-bullet provost format, identifies dollar amounts and personnel names as prohibited, and explains the 'context and response frame' approach for declines."
    facilitator_note: "If Claude can't answer question 1, the participant may not be in the correct folder. Ask them to run `pwd`. This is also a good moment to point out that the Leadership Context section was added alongside the existing cataloging/collection dev sections — CLAUDE.md is cumulative and modular."

  - index: 2
    label: "Check what Claude knows about your library"
    type: "observe"
    instruction: |
      Review Claude's answers against the criteria:
    observe_items:
      - "All four strategic priorities are named (Research Support, Information Literacy, Collection Sustainability, Space Modernization)"
      - "The provost memo format described is 3 bullets connecting library outcomes to university goals"
      - "Dollar amounts and personnel names are both identified as prohibited in external documents"
      - "The response to declining metrics includes 'context and response frame,' not just the number"
    reflection_prompt: "Which of Claude's answers surprised you? Is there anything in the Leadership Context section of CLAUDE.md that doesn't accurately describe your institution?"

  - index: 3
    label: "Load the library stats file"
    type: "prompt"
    instruction: |
      Now give Claude your institution's actual data using the `@` file reference. This is the same technique used in other modules — it works just as well with institutional data as with patron queries or catalog items:
    prompt_text: |
      @library-stats.txt

      You are preparing a 60-second verbal update for the Provost at the start of a budget meeting. Based on this data, write 3 sentences that summarize the library's current performance — one highlighting a strength, one noting a challenge, and one connecting both to the university's strategic direction. No library jargon.
    checkpoint: "Claude produces exactly 3 sentences using data from the file, without terms like 'TR_B1,' 'LibGuides,' or 'ILL.' The strength and challenge are drawn from the satisfaction survey or usage statistics."
    facilitator_note: "Watch for Claude using library-specific terms the Provost wouldn't know. This is an excellent teaching moment: the Leadership Context section of CLAUDE.md instructs Claude to avoid jargon, but it sometimes slips through. Ask participants: what would you edit before saying this out loud?"

  - index: 4
    label: "Find gaps in your leadership context"
    type: "prompt"
    instruction: |
      CLAUDE.md shapes everything Claude produces. Ask it to identify what's missing for leadership work:
    prompt_text: |
      Based on CLAUDE.md and library-stats.txt, what institutional context is missing that would make your strategic document drafting more accurate? Name 3 specific gaps and explain how each would change the quality of the documents you could help me write.
    checkpoint: "Claude identifies practical gaps such as: the university's own strategic plan language (so Claude can mirror it), the Dean's specific voice or priorities, current year budget context, or faculty governance relationships."
    facilitator_note: "This gap analysis is one of the most valuable exercises in the module. Participants often discover things they haven't documented anywhere — and realize that Claude's limitations mirror their own documentation gaps. Encourage participants to write down Claude's suggestions as a CLAUDE.md improvement checklist."

  - index: 5
    label: "Reflect on leadership context"
    type: "reflect"
    instruction: |
      You've tested Claude's understanding of your leadership context and used it to summarize institutional performance.
    reflection_prompt: "If you were configuring CLAUDE.md specifically for a board of trustees presentation next week, what three pieces of context would you add? How would that change what Claude produces?"
---

## Orient Claude to Your Leadership Role

Leadership documents are context-dependent in a way that reference responses or catalog records are not. A provost expects different language than a faculty senate. An accreditation self-study requires different evidence than a board report. Getting Claude to produce useful leadership drafts means giving it the institutional context that only you have.

The `CLAUDE.md` file in the workshop folder includes a **Leadership Context** section added specifically for this module — strategic priorities, stakeholder communication norms, and administrative writing restrictions. This exercise verifies Claude has absorbed it before you put it to work.

You'll also practice using `@library-stats.txt` to pass institutional data directly to Claude, without copying and pasting.

## Discussion

- What's the difference between Claude "knowing" your strategic priorities and Claude actually using them to shape a document? How do you test the difference?
- What would a truly useful leadership-optimized CLAUDE.md contain that the current workshop version doesn't?
- How much institutional context is too much to put in CLAUDE.md — where does it become a liability (e.g., if someone else reads the file)?
