---
id: "04-usage-analysis"
title: "Analyze Usage Data"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Provide usage data to Claude"
    type: "prompt"
    instruction: |
      Use the `@` reference to pass the usage report directly to Claude — no need to copy and paste:
    prompt_text: |
      @usage-report.csv

      Below is a simplified COUNTER 5 TR (Title Report). TR_B1 = Total Item Requests (full-text downloads); TR_B2 = Total Item Investigations (abstract views).

      Analyze this usage data and:
      1. Identify the 3 highest-use titles by TR_B1 and explain why TR_B1 is the primary indicator of patron value
      2. Identify any titles where TR_B2 is significantly higher than TR_B1 — what might this pattern suggest about patron behavior?
      3. Flag any titles with zero TR_B1 that should be reviewed for cancellation
      4. Write a 2-sentence summary of collection health for this package that I could include in a report to my director
    checkpoint: "Claude should analyze the data with the TR_B1 / TR_B2 distinction applied correctly and produce a usable director summary."
    facilitator_note: "The TR_B2 >> TR_B1 pattern is important: it suggests patrons are finding abstracts in discovery systems but hitting paywalls or choosing not to download full text. This could indicate subject coverage that patrons scan but don't deeply engage with — or it could indicate a UX barrier. Good discussion question."

  - index: 1
    label: "Ask for a cancellation recommendation"
    type: "prompt"
    instruction: |
      Cancellation decisions are difficult but necessary. Practice this workflow:
    prompt_text: |
      Based on the usage data, draft a cancellation recommendation memo for the lowest-use title. The memo should:
      - Name the title and state its TR_B1 usage for the period
      - Apply all five collection criteria from CLAUDE.md (brief, 1 sentence each)
      - Recommend cancellation or retention, with one sentence of justification
      - Note what data you would want before making a final recommendation

      Address the memo to "Collection Development Committee" and sign it from "Electronic Resources Librarian."
    checkpoint: "Claude should produce a structured memo with criteria applied and a justified recommendation."

  - index: 2
    label: "Reset context with /clear"
    type: "terminal"
    instruction: |
      You've had a long productive session. Now practice using `/clear` to reset — as you would when shifting to a completely different task.

      At the Claude `>` prompt, type:

      ```
      /clear
      ```

      Then immediately ask:

      ```
      What collection do you know about? What usage data have we discussed?
      ```
    checkpoint: "Claude responds that it has no memory of the usage report, the cancellation memo, or any earlier context. The slate is clean."
    facilitator_note: "This is the second /clear demonstration in the workshop (the first was in Module 1). Here the lesson is slightly different: in Module 1, we used /clear to start a new task type. Here, we're showing that context loss means you'd need to re-provide the usage data if you wanted to continue analysis — important for planning longer work sessions."

  - index: 3
    label: "Re-provide context and ask a different question"
    type: "prompt"
    instruction: |
      After clearing, the data is gone. To continue, you have to re-provide it — but notice you can now ask a completely different analytical question. Paste both the file reference and a new analysis prompt:
    prompt_text: |
      @usage-report.csv

      Using this COUNTER 5 data, analyze the collection from a cost-per-use perspective (even though we don't have actual prices — use a hypothetical average cost per title to illustrate the framework). For the 3 lowest TR_B1 titles:
      1. Explain how you would calculate cost-per-use if you had the subscription price
      2. What cost-per-use threshold might indicate a title is no longer worth retaining?
      3. What factors beyond raw TR_B1 numbers should influence a cost-per-use assessment?
    checkpoint: "Claude explains the cost-per-use framework, suggests a threshold rationale (e.g., some libraries use $5–$15 per download), and identifies complicating factors like patron type, course reserves, or one-time vs. recurring use."
    facilitator_note: "Cost-per-use is widely used in collection assessment but rarely standardized. Claude can introduce the framework even without real prices. This often generates good discussion about what 'value' means for a journal title."

  - index: 4
    label: "Ask Claude what data would improve the analysis"
    type: "prompt"
    instruction: |
      Good analysis identifies its own limitations. Ask Claude:
    prompt_text: |
      Based on the analysis we've just done, what additional data would meaningfully improve a cancellation or renewal decision for this package? Name 3–4 specific data sources or metrics and explain what each would add to the picture.
    checkpoint: "Claude suggests additions like: actual subscription cost (for cost-per-use), ILL request data (to see if patrons seek unsubscribed titles), faculty request patterns, curriculum mapping, or multi-year usage trends."

  - index: 5
    label: "Reflect on the full workshop"
    type: "reflect"
    instruction: |
      You've completed all three modules. Take a moment to think about the whole experience.
    reflection_prompt: "Across all three modules — reference, cataloging, and collection development — which workflow would you actually change in your day-to-day work after today? And which Claude Code feature do you think you'll use most: interactive sessions, --print mode, @file references, /clear, or iterative prompting?"
---

## Analyze Usage Data

COUNTER 5 usage reports contain more signal than most collection development workflows extract. The TR_B1 / TR_B2 distinction is particularly underused: knowing that patrons are viewing abstracts but not downloading full text suggests something different than low overall usage — and Claude can help surface those patterns quickly.

In this exercise, you'll pass usage data directly to Claude with `@`, practice cancellation memo drafting, use `/clear` to demonstrate context reset, and apply a cost-per-use analysis framework — culminating in a reflection on the complete three-module workshop.

## Discussion

- How did Claude's analysis of the TR_B2 pattern compare to how you typically read usage reports?
- What would you want to add to the CLAUDE.md collection policy to make usage analysis prompts even more specific?
- Looking at the three modules together: where is the line between AI assistance and professional judgment in your work?
