---
id: "04-abstract"
title: "Generate an Annotated Abstract"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Generate a catalog abstract"
    type: "prompt"
    instruction: |
      Many catalog records benefit from an annotated abstract in the 520 field. Paste this prompt:
    prompt_text: |
      Write a catalog abstract (MARC 521 field — "Audience") and a summary note (MARC 520 field — "Summary") for "Decolonizing the Library" by Anika R. Thompson.

      520 Summary: 2–3 sentences. Describe the scope and content of the work without evaluative language. Use present tense.
      521 Audience: One sentence identifying the primary intended audience (academic librarians, graduate students, etc.)

      Do not include the field numbers in your response — just label them clearly.
    checkpoint: "Claude should produce two clearly labeled notes in appropriate catalog language."
    facilitator_note: "Watch for evaluative language in the 520 (e.g., 'excellent,' 'important,' 'groundbreaking'). MARC 520 summaries describe, not evaluate. This is a subtle but common error."

  - index: 1
    label: "Check for evaluative language"
    type: "observe"
    instruction: |
      Review Claude's 520 Summary carefully:
    observe_items:
      - "The 520 uses present tense throughout ('examines,' 'provides,' 'explores')"
      - "The 520 contains no evaluative words (e.g., 'excellent,' 'important,' 'groundbreaking,' 'must-read')"
      - "The 521 audience statement is specific (names a profession or level, not just 'researchers')"

  - index: 2
    label: "Revise for specificity"
    type: "prompt"
    instruction: |
      Generic summaries don't help patrons decide whether a work is right for them. Push Claude to be more specific:
    prompt_text: |
      The 520 Summary you wrote describes the topic of the book, but doesn't tell patrons anything about this book's specific argument or approach compared to other books on the same topic. Revise the 520 to add one sentence that distinguishes what this book argues or offers that other works on decolonization and libraries might not.
    checkpoint: "Claude produces a revised 520 that includes something specific about the book's argument, method, or contribution — not just its general topic area."
    facilitator_note: "This is a useful distinction between catalog language (describe the work accurately) and marketing language (describe the work attractively). The goal isn't to sell the book; it's to help patrons locate the right resource for their specific need."

  - index: 3
    label: "Request a scope and content note for an archival item"
    type: "prompt"
    instruction: |
      Abstract writing for archives differs from monographs. Try this variation:
    prompt_text: |
      Write a Scope and Content note (EAD <scopecontent> element) for a small archival collection with the following description:

      Collection name: Papers of Elena Vasquez, Academic Library Director
      Dates: 1978–2019
      Extent: 4.5 linear feet (9 boxes)
      Contents: Correspondence, committee minutes, strategic plans, budget documents, and subject files related to library administration at a mid-size public university. Includes records from the library's transition to an integrated library system (1994–1997) and the construction of a new library building (2007–2012).

      Write 3–5 sentences in third person, past tense, describing the collection's contents and significance without using the word "important."
    checkpoint: "Claude should produce a third-person, past-tense scope note without evaluative language."

  - index: 4
    label: "Try --print for a quick abstract on a simple item"
    type: "terminal"
    instruction: |
      For routine items, you might want a quick abstract without opening a full Claude session. Open a **new terminal tab** and try:

      ```
      claude --print "Write a one-sentence MARC 520 Summary for a 2024 handbook titled 'Digital Preservation Strategies for Small Academic Libraries' edited by Marcus Lee. Use present tense and avoid evaluative language."
      ```

      Compare the result to what you'd write yourself in 30 seconds.
    checkpoint: "Claude produces a clean, present-tense, non-evaluative one-sentence summary directly in your terminal."
    facilitator_note: "The --print flag is particularly useful for abstracting high volumes of routine items. Some catalogers use it in combination with a shell script to process a list of titles. Not every item needs a full interactive session."

  - index: 5
    label: "Reflect on catalog writing vs. other writing"
    type: "reflect"
    instruction: |
      You've now written summaries for a monograph and an archival collection, and practiced in both interactive and non-interactive modes.
    reflection_prompt: "Catalog language has strict rules: descriptive not evaluative, specific register for published works vs. archives. How does using Claude for catalog writing compare to using it for patron-facing reference work? What's easier? What's harder?"
---

## Generate an Annotated Abstract

Catalog notes — summaries, audience statements, scope and content notes — are time-consuming to write well. Claude can produce first drafts that follow the appropriate register: descriptive, not evaluative; present tense for published works, past tense for archival material; third person throughout.

The exercises here practice two distinct contexts: a published monograph (MARC 520/521) and an archival collection (EAD scope and content note). You'll also use the `--print` flag for quick single-item abstracts, and practice pushing Claude toward specificity rather than generic topic descriptions.

## Discussion

- What makes catalog language different from the kind of description you'd write in a book review or selection rationale?
- How would you explain to a colleague when to use Claude for abstract drafting versus when to write it yourself?
