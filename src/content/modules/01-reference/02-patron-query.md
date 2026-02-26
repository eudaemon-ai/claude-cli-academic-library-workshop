---
id: "02-patron-query"
title: "Draft a Reference Response"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Open patron-queries.txt"
    type: "terminal"
    instruction: |
      In a new terminal tab (keep Claude Code open in the other tab), view the sample patron questions file:

      ```
      cat patron-queries.txt
      ```

      Read through the questions. Notice the range of patron types and complexity levels.
    checkpoint: "You should see a list of 10 sample patron questions."

  - index: 1
    label: "Give Claude the full list using @"
    type: "prompt"
    instruction: |
      Instead of copying and pasting the file contents, use the `@` reference to give Claude the whole file at once. Switch to your Claude Code tab and type:
    prompt_text: |
      @patron-queries.txt

      Look at these patron questions. Which one would be most challenging to answer well — where getting it wrong could genuinely mislead the patron? Explain your reasoning in 2–3 sentences.
    checkpoint: "Claude picks a specific question and gives a thoughtful explanation about why it's high-stakes (e.g., medical, legal, or requires very specific local knowledge)."
    facilitator_note: "This step introduces @file references. The reason we start with a meta-question ('which is hardest?') rather than jumping straight to drafting is it trains participants to think about risk before they produce output. This mirrors good reference interview practice."

  - index: 2
    label: "Draft a response to the first patron query"
    type: "prompt"
    instruction: |
      Now let's put Claude to work. Paste this prompt, which uses the first sample question:
    prompt_text: |
      A patron has sent this question via our Ask a Librarian chat service:

      "I need peer-reviewed sources about the mental health impacts of social media on college students, published in the last 5 years."

      Draft a reference response following our library's communication style from CLAUDE.md. Include 3–4 types of sources to check (e.g., specific databases, source types) and explain briefly why each is appropriate for this question.
    checkpoint: "Claude should produce a 150–250 word response with source recommendations. It should sound like something you'd actually send to a patron."
    facilitator_note: "Common issues: Claude suggests databases your library doesn't subscribe to (use this as a teaching moment about CLAUDE.md specificity), or the response is too long. Ask participants: would you send this as-is?"

  - index: 3
    label: "Evaluate Claude's draft"
    type: "observe"
    instruction: |
      Read Claude's draft carefully. Check each item:
    observe_items:
      - "The tone is professional but approachable (matches CLAUDE.md)"
      - "The response is roughly 150–250 words"
      - "At least 2–3 database or source types are named"
      - "There are no internal call numbers or system identifiers in the patron-facing text"

  - index: 4
    label: "Handle a follow-up patron scenario"
    type: "prompt"
    instruction: |
      Real reference work often requires follow-up. The patron replied: they can't access one of the databases you recommended because they're a community member, not a currently enrolled student. Practice adapting:
    prompt_text: |
      The patron replied: "I don't have student access to PsycINFO — I'm a community borrower. Can you suggest alternatives I can actually get to?"

      Draft a follow-up response that:
      1. Acknowledges their access situation without making them feel bad
      2. Recommends 2–3 free or open-access alternatives
      3. Offers one next step they can take on their own
    checkpoint: "Claude adjusts to the patron's access situation and recommends open alternatives (PubMed, Google Scholar, PsycARTICLES open access, etc.)."
    facilitator_note: "This is a common real-world scenario. Point out that Claude carries forward the context from the previous message — it knows this is the same patron and same question without you having to repeat it."

  - index: 5
    label: "Ask Claude to improve its own draft"
    type: "prompt"
    instruction: |
      Claude can critique its own output. This is a powerful editing technique:
    prompt_text: |
      Read your most recent response — the follow-up for the community borrower. Identify one thing you would change to make it more useful for someone who isn't familiar with library terminology. Then make that change.
    checkpoint: "Claude identifies a specific issue (e.g., jargon like 'open access,' assumed knowledge) and produces an improved version."

  - index: 6
    label: "Reflect on the draft"
    type: "reflect"
    instruction: |
      You've now drafted a response, handled a follow-up, and asked Claude to self-edit.
    reflection_prompt: "What's the most useful thing Claude did in this exercise — the first draft, the follow-up adaptation, or the self-critique? Which of those would you actually use in your reference workflow?"
---

## Draft a Reference Response

Reference librarians field dozens of patron questions every week. Each one requires assessing what the patron actually needs, identifying the right source types, and communicating clearly without overwhelming them. Claude Code can help you draft a first response quickly—leaving you to focus on the judgment calls only you can make.

In this exercise, you'll use the `@` file reference feature to give Claude a set of patron questions directly, then practice drafting, adapting, and self-editing responses across a realistic multi-turn scenario.

## Discussion

- Was Claude's draft usable as-is, or did it need editing? What kinds of edits?
- Did Claude stick to the tone described in CLAUDE.md, or drift toward something more formal or informal?
- What information would you add to CLAUDE.md to make Claude's reference responses better from the start?
