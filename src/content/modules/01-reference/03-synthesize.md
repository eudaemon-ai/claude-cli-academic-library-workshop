---
id: "03-synthesize"
title: "Synthesize Multiple Sources"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Introduce the synthesis scenario"
    type: "prompt"
    instruction: |
      A faculty member needs a literature overview, not just a list of databases. Paste this prompt:
    prompt_text: |
      A faculty member in the Psychology department is preparing a grant proposal on adolescent social media use and asks: "Can you give me a brief overview of what the research says about positive vs. negative mental health outcomes, so I can frame my proposal?"

      Using your knowledge of recent research literature, draft a 3–4 paragraph synthesis that:
      1. Describes the general consensus on negative outcomes
      2. Notes evidence of positive or neutral outcomes
      3. Identifies a key methodological debate in the field
      4. Suggests 2 specific journal titles where the best peer-reviewed work on this topic appears

      Write this for a faculty audience, not a general patron.
    checkpoint: "Claude should produce a structured synthesis with distinct sections, not just a bulleted list."
    facilitator_note: "This exercise often produces the most variation. Some Claude responses will be excellent; some will be overly hedged. Ask: how would you verify the journal suggestions Claude made?"

  - index: 1
    label: "Check the synthesis quality"
    type: "observe"
    instruction: |
      Evaluate Claude's synthesis against these criteria:
    observe_items:
      - "The response has clear structure (not just one long paragraph)"
      - "Claude distinguishes between negative and positive/neutral findings"
      - "A methodological debate is mentioned (e.g., causation vs. correlation, self-report bias)"
      - "At least one specific journal title is named"

  - index: 2
    label: "Ask Claude to sharpen one section"
    type: "prompt"
    instruction: |
      Practice iterating on Claude's output. Paste this follow-up:
    prompt_text: |
      The section on methodological debates is the weakest part of your synthesis. Expand it to two sentences and name at least one specific study design limitation that researchers in this field commonly acknowledge.
    checkpoint: "Claude should revise only that section, not rewrite the whole response."
    facilitator_note: "Point out: Claude remembered the context of the previous response. This is multi-turn conversation — Claude can build on prior output without you repeating everything."

  - index: 3
    label: "Ask Claude to flag its own uncertain claims"
    type: "prompt"
    instruction: |
      A crucial habit with AI-generated content: ask Claude to identify where it's least confident. Try this:
    prompt_text: |
      Looking at the synthesis you just wrote, flag any specific claims where you are uncertain about the accuracy — where you think I should independently verify before sharing with the faculty member. Be specific about what you're uncertain about and why.
    checkpoint: "Claude identifies at least 1–2 specific claims and explains the source of its uncertainty (e.g., training data cutoff, contested findings, limited research base)."
    facilitator_note: "This is one of the most valuable prompts in the workshop. Claude that acknowledges uncertainty is far more useful than Claude that sounds uniformly confident. When Claude says 'I'm not sure about this,' that's a feature, not a failure — it tells you exactly where to direct your expertise."

  - index: 4
    label: "Reset the conversation context with /clear"
    type: "terminal"
    instruction: |
      Claude remembers everything in your current session. That's useful — but sometimes you want to start fresh on a completely different task without the prior conversation affecting Claude's responses.

      At the Claude `>` prompt, type:

      ```
      /clear
      ```

      Then immediately ask:

      ```
      What were we just discussing?
      ```
    checkpoint: "Claude responds that it has no memory of the previous conversation — the synthesis, the faculty scenario, and all prior context are gone."
    facilitator_note: "This is often a moment of 'oh, so that's what context means.' Use it to explain: Claude's memory is only within a session, and /clear wipes that session. There is no persistent memory between days unless CLAUDE.md records it."

  - index: 5
    label: "Observe context loss"
    type: "observe"
    instruction: |
      After using /clear, confirm what changed:
    observe_items:
      - "Claude's response to 'what were we discussing?' shows no knowledge of the synthesis"
      - "Claude does NOT remember the faculty patron scenario"
      - "A new question now starts with a clean slate (no residual assumptions from the prior conversation)"
    reflection_prompt: "When in your work would you want to /clear context before starting a new task? When would you want to keep it?"

  - index: 6
    label: "Reflect on iterative prompting"
    type: "reflect"
    instruction: |
      You've practiced iterating on a draft, asking Claude to self-critique, and managing conversation context.
    reflection_prompt: "How does iterative prompting change how you'd approach asking Claude for help? What kinds of 'sharpening' prompts — like asking for uncertainty flagging or section expansion — do you think you'd use most in your work?"
---

## Synthesize Multiple Sources

Sometimes patrons—especially faculty and graduate students—don't need a list of databases. They need a brief intellectual map of a field: what the research says, where there's debate, and what the key venues are. This kind of synthesis is time-consuming to write from scratch, but Claude can produce a solid first draft quickly.

The key skills in this exercise are **iterative prompting** (asking Claude to revise a specific section), **uncertainty probing** (asking Claude to flag its own least-confident claims), and **context management** (using `/clear` to reset between tasks).

## Discussion

- How does Claude's synthesis compare to what you might write yourself after 20 minutes of scanning the literature?
- What's the risk of sending Claude's synthesis to a faculty member without running it through the uncertainty-flagging prompt first?
- When would you use synthesis drafting most often in your work?
