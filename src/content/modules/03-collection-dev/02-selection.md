---
id: "02-selection"
title: "Write a Selection Rationale"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Draft a selection rationale"
    type: "prompt"
    instruction: |
      Selection rationales justify acquisitions to administrators and budget committees. Paste this prompt:
    prompt_text: |
      I am considering acquiring the following item for our academic library collection:

      Title: "The Algorithm Audit: Ethics, Accountability, and AI Governance"
      Author: Rashid, Priya J., and Torres, Marco E.
      Publisher: MIT Press
      Year: 2024
      Format: Print monograph + perpetual e-book access (dual purchase)
      List price: [omitted — not to be included in the rationale]
      Relevant programs: Computer Science, Law, Public Policy, Data Science

      Write a selection rationale using our five selection criteria from CLAUDE.md (scope, authority, accuracy, currency, coverage). For each criterion, write 2–3 sentences applying it to this specific item. Use formal but accessible language appropriate for a faculty advisory committee.
    checkpoint: "Claude should produce a structured rationale with all five criteria addressed in 2–3 sentences each."
    facilitator_note: "Notice that Claude avoids price language because CLAUDE.md instructs it to. If participants ask 'but shouldn't the rationale include cost?', this is a good discussion: rationales justify the intellectual value; budget justification is a separate document type."

  - index: 1
    label: "Check rationale quality"
    type: "observe"
    instruction: |
      Review the selection rationale:
    observe_items:
      - "All five criteria are addressed (scope, authority, accuracy, currency, coverage)"
      - "Each criterion section is 2–3 sentences applied specifically to this item (not generic boilerplate)"
      - "No dollar amounts or price language appears"
      - "The tone is formal but readable for a non-librarian faculty audience"

  - index: 2
    label: "Adapt for a different format"
    type: "prompt"
    instruction: |
      Selectors often need the same rationale adapted for different audiences. Try this:
    prompt_text: |
      Rewrite the selection rationale as a 3-sentence summary for our new acquisitions newsletter. The audience is graduate students and faculty browsing recent additions — they want to know why this is worth reading, not a formal criteria evaluation.
    checkpoint: "Claude should produce a 3-sentence reader-focused summary, not a compressed version of the formal rationale."

  - index: 3
    label: "Draft a rationale for a contrasting item"
    type: "prompt"
    instruction: |
      Selection work often involves comparing items competing for the same budget line. Paste this prompt for a second item:
    prompt_text: |
      I am also considering this item:

      Title: "AI and the Law: A Casebook for Legal Practitioners"
      Author: Okonkwo, Dele B.
      Publisher: American Bar Association Press
      Year: 2023
      Format: Print only
      List price: [omitted]
      Relevant programs: Law

      Write a selection rationale using the same five criteria (scope, authority, accuracy, currency, coverage) in the same format as before. Be equally specific.
    checkpoint: "Claude produces a second rationale in the same structured format, with different criteria emphasis given the narrower scope of this item."

  - index: 4
    label: "Compare the two items"
    type: "prompt"
    instruction: |
      Now ask Claude to weigh the two against each other:
    prompt_text: |
      Comparing the two items we've just evaluated — "The Algorithm Audit" and "AI and the Law" — if our library could only acquire one this fiscal year, which would you recommend prioritizing and why? Use the five selection criteria framework but focus on the criterion where the items differ most significantly. Do not mention dollar amounts.
    checkpoint: "Claude makes a recommendation grounded in the criteria framework — likely favoring breadth of coverage, or currency, or author authority — without deferring entirely to price."
    facilitator_note: "This is a valuable exercise in using AI to support professional judgment rather than replace it. Claude's recommendation here isn't authoritative — it's a structured argument the selector can agree with, disagree with, or modify. Ask: does Claude's reasoning match yours?"

  - index: 5
    label: "Build a reusable selection template"
    type: "prompt"
    instruction: |
      Turn this workflow into something you can reuse:
    prompt_text: |
      Based on the selection rationales we've written today, draft a reusable template I could fill out for any new acquisition. The template should have labeled sections for each of the five criteria, a placeholder for item metadata, and a brief instruction (1 sentence per section) reminding me what to address. Format it as plain text suitable for a shared document.
    checkpoint: "Claude produces a clean, fillable template with five labeled sections and metadata fields at the top."

  - index: 6
    label: "Reflect on the selection workflow"
    type: "reflect"
    instruction: |
      You've drafted rationales for two items, compared them, and built a reusable template.
    reflection_prompt: "How does drafting with Claude change how you think about selection criteria — does it sharpen your own analysis, or does it risk making rationale-writing feel like a checkbox exercise? How would you use this template in real practice?"
---

## Write a Selection Rationale

A selection rationale is a professional argument for acquisition. It connects an item's specific characteristics to your collection policy's criteria — and it needs to be defensible to administrators, faculty advisors, and auditors. Claude can draft the body of a rationale quickly, but you need to verify the factual claims it makes about authority, accuracy, and coverage.

In this exercise, you'll draft rationales for two items, compare them using Claude's structured reasoning, and build a reusable template for future selection work.

## Discussion

- How would you verify Claude's claims about the authors' credentials (the "authority" criterion)?
- When would you use a formal rationale versus a newsletter summary? What other formats do you write for collection decisions?
