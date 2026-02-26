---
id: "03-subject-headings"
title: "Suggest LCSH Subject Headings"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Request subject heading suggestions"
    type: "prompt"
    instruction: |
      Subject heading work is one of the highest-value uses of Claude in cataloging. Paste this prompt:
    prompt_text: |
      For the book "Decolonizing the Library: A Practical Guide for Academic Librarians" by Anika R. Thompson (University of Michigan Press, 2023), suggest 4–6 LCSH subject headings.

      For each heading:
      1. Write it in proper LCSH format (including any subdivisions with the correct dash notation)
      2. Classify it as a main heading, topical subdivision, geographic subdivision, or form subdivision
      3. Indicate whether it is likely to be a preferred heading (established) or a variant/narrower term that I should verify carefully in the LC authority file
      4. Note if the heading has any temporal scope (e.g., only applies to a certain period)
    checkpoint: "Claude should list 4–6 headings with the structural information requested."
    facilitator_note: "This prompt produces excellent teaching moments. Claude often suggests headings like 'Libraries and decolonization' which IS an established LCSH term — but 'Decolonization -- Library science' is NOT; it would be a non-preferred form. Ask: how would you distinguish the two without the authority file?"

  - index: 1
    label: "Probe Claude's uncertainty"
    type: "prompt"
    instruction: |
      Ask Claude to be explicit about which headings it's least confident about:
    prompt_text: |
      Of the subject headings you suggested, which two are you least certain about — where you would most recommend I verify in the LC authority file before applying them to a live record? Explain specifically what you're uncertain about for each one.
    checkpoint: "Claude should identify specific headings and explain its uncertainty (e.g., whether a heading is established, whether a subdivision is valid)."
    facilitator_note: "This 'probe uncertainty' technique is valuable across all Claude work, not just cataloging. Claude that acknowledges uncertainty is more useful than Claude that sounds confident about everything. Ask: does this change how you trust the other headings?"

  - index: 2
    label: "Compare broader and narrower terms"
    type: "prompt"
    instruction: |
      Depth of indexing is a professional judgment call. Practice using Claude to explore options:
    prompt_text: |
      For a patron searching our catalog for this book, which of the following would provide better discoverability: a broader heading like "Academic libraries" or a narrower heading like "Academic libraries — Social aspects — United States"?

      Explain the trade-offs between specificity and recall, and recommend which approach to use for this item.
    checkpoint: "Claude should explain that broader headings improve recall while narrower headings improve precision, and recommend based on the item's specificity."

  - index: 3
    label: "Generate headings for a second catalog item"
    type: "prompt"
    instruction: |
      Practice applying the same approach to a different item. Use the `@` reference to bring in the full list:
    prompt_text: |
      @catalog-items.txt

      Using the same LCSH format and structure as before, suggest 4–5 subject headings for Item 2 in this file. Apply the same criteria: proper LCSH format with subdivisions, indicate confidence level, and flag any that need authority file verification.
    checkpoint: "Claude generates headings for the second item with the same structured format as before."
    facilitator_note: "Participants will notice that the headings for Item 2 may be more or less complex depending on what Item 2 is. If it's a topic with a rich LCSH vocabulary, Claude may suggest more headings; if the topic is newer or less common, Claude may express more uncertainty."

  - index: 4
    label: "Compare heading strategies across the two items"
    type: "prompt"
    instruction: |
      Looking at both sets of headings you've generated:
    prompt_text: |
      Compare the heading strategies you used for Item 1 and Item 2. Are there any structural differences — for example, did one item need more geographic or chronological subdivisions? Did one topic have a richer LCSH vocabulary to draw from? What does that difference tell us about how LCSH covers different subject areas?
    checkpoint: "Claude reflects on the difference in heading depth or vocabulary richness between the two items, ideally noting if one subject area is better-represented in LCSH than the other."

  - index: 5
    label: "Build a verification checklist"
    type: "prompt"
    instruction: |
      Turn this session into a reusable workflow tool:
    prompt_text: |
      Based on our subject heading work today, draft a short verification checklist (5–7 steps) that a cataloger could follow after receiving LCSH suggestions from Claude. Focus on the steps needed to move from "Claude's suggestions" to "ready for live catalog import."
    checkpoint: "Claude produces a practical checklist including steps like: check each heading in LC authority file, confirm subdivision order, verify no deprecated headings, add missing headings if scope doesn't match."

  - index: 6
    label: "Reflect on authority control"
    type: "reflect"
    instruction: |
      Subject heading work requires combining Claude's suggestion capability with your verification expertise.
    reflection_prompt: "Where in your subject heading workflow would Claude be most helpful — generating the initial list, explaining the LCSH structure, comparing broader/narrower options, or building verification tools? What would you never outsource to Claude?"
---

## Suggest LCSH Subject Headings

LCSH is one of the most complex controlled vocabularies in library science. Choosing the right headings requires understanding the hierarchy, valid subdivisions, and whether a heading is actually established in the authority file. Claude can suggest options quickly — but it cannot access the LC authority file in real time.

This exercise focuses on three skills: using Claude to generate a richer set of heading options than you might brainstorm alone, surfacing where Claude is least certain, and comparing heading strategies across different item types. You'll also use the `@` file reference to work with multiple catalog items efficiently and build a reusable verification checklist.

## Discussion

- How did Claude's uncertainty probing change the way you'd use its suggestions?
- What is the professional risk of applying Claude's heading suggestions to live records without verification?
- How might this workflow change if your ILS had real-time LCNAF integration?
