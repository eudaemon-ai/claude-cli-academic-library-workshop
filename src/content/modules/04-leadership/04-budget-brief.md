---
id: "04-budget-brief"
title: "Build a Funding Argument"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Draft the executive brief"
    type: "prompt"
    instruction: |
      Funding arguments are among the hardest documents to write: they need to be persuasive without being promotional, specific without naming dollar amounts, and urgent without creating alarm. Paste this prompt:
    prompt_text: |
      I am preparing a funding request to add a Research Services Librarian position to support our Research Support Expansion strategic priority. We currently have 2 open positions and have documented unmet demand: research consultations grew 11.6% this year, and our two existing research librarians report turning away appointments due to capacity constraints.

      Draft a 250-word executive brief for the Provost making the case for this position. Requirements:
      - No specific dollar amounts
      - Connect to at least two of our institutional strategic priorities
      - Tie the unmet demand to institutional consequences (not just library inconvenience)
      - End with a clear, direct ask

      Write in a formal register appropriate for the Provost.
    checkpoint: "Claude produces a brief under 250 words, with no dollar amounts, connecting the request to research support and at least one other strategic priority, framing the unmet demand in terms of institutional risk (e.g., graduate student retention, grant competitiveness), and ending with a direct statement of the request."
    facilitator_note: "The 'institutional consequences' framing is the key skill here. 'Librarians are busy' is a library problem. 'Graduate students are competing for research support with inadequate infrastructure while the university pursues R2 classification' is a university problem. Ask: which framing is more likely to result in a funded position?"

  - index: 1
    label: "Anticipate the objections"
    type: "prompt"
    instruction: |
      A Provost who reads your brief will have reservations. Better to know them before the meeting:
    prompt_text: |
      If a budget committee read this brief, what are the 3 most likely objections they would raise — the questions or pushbacks that would most threaten this request? For each objection, draft a one-sentence counter-argument that acknowledges the concern without being defensive.
    checkpoint: "Claude produces substantive objections (e.g., 'Why can't existing staff absorb this demand?' / 'Is the 11.6% growth trend sustainable?' / 'Have you explored other staffing models like graduate assistants?') and counter-arguments that don't dismiss the concerns."
    facilitator_note: "The counter-arguments are often more revealing than the brief itself. Weak counter-arguments ('We are committed to growth') signal that the underlying argument hasn't been tested. Strong ones engage the premise: 'Current staff are at capacity as evidenced by documented appointment refusals — redistribution would require eliminating services, not just shifting them.'"

  - index: 2
    label: "Rewrite around the strongest objection"
    type: "prompt"
    instruction: |
      The best funding arguments preempt objections rather than responding to them. Choose the strongest challenge from step 1 and restructure the brief around it:
    prompt_text: |
      Looking at the three objections you identified, which one is hardest to counter — which one, if raised in the meeting, would most undermine this request? Take that objection and rewrite the opening paragraph of the executive brief so it proactively addresses the concern as a strength, not a weakness. Don't just add a defensive sentence — restructure the argument.
    checkpoint: "Claude restructures the opening around the hardest objection, turning it from a vulnerability into a framing device. If the hardest objection was 'why can't existing staff absorb this,' the revised opening might lead with the documented capacity analysis rather than the growth statistic."
    facilitator_note: "This is the most advanced prompting pattern in the module: using anticipated objections to restructure an argument, not just defend it. Participants who understand this technique apply it in grant writing, committee proposals, and donor conversations — anywhere they need to persuade a skeptical audience."

  - index: 3
    label: "Reset and rewrite with a constraint"
    type: "terminal"
    instruction: |
      Sometimes the most effective leadership document is the shortest one. Clear your context and try a radically constrained version:

      At the Claude `>` prompt, type:

      ```
      /clear
      ```

      Then paste this prompt:

      ```
      I am requesting a new Research Services Librarian position. Write exactly 3 bullet points — one sentence each — that make the case for this request to a Provost who has 30 seconds to decide whether to read further. No jargon. No dollar amounts.
      ```
    checkpoint: "Claude produces exactly 3 bullets, each one sentence, that are compelling without being vague. The /clear means Claude no longer has the earlier brief in context — this is a genuinely fresh draft."
    facilitator_note: "The /clear is intentional here — it forces Claude to work only from the 30-second constraint, not from the elaborate 250-word brief. The result is often sharper. Ask: which version would you lead with in an email to the Provost? Which would you attach as a full document?"

  - index: 4
    label: "Compare the two versions"
    type: "observe"
    instruction: |
      You now have two funding arguments for the same request: a 250-word formal brief and a 3-bullet summary. Compare them:
    observe_items:
      - "The 3-bullet version leads with the institutional consequence (not the library problem)"
      - "The 250-word brief contains evidence the bullets don't have room for"
      - "The bullets would work as an email subject and preview — the brief works as an attachment"
      - "Neither version mentions dollar amounts or internal staffing metrics"
    reflection_prompt: "Which version would you send first to the Provost — and which would you follow up with? What does this suggest about how you'd structure a funding conversation?"

  - index: 5
    label: "Reflect on the full module"
    type: "reflect"
    instruction: |
      You've completed the Library Leadership module.
    reflection_prompt: "How does using Claude for leadership writing differ from using it for reference work, cataloging, or collection development? What would a leadership-optimized CLAUDE.md include that the current workshop version doesn't? What's one document you'll draft differently next week?"
---

## Build a Funding Argument

Funding requests fail for two reasons: they make a library case instead of an institutional case, and they don't pre-empt the objections that kill them in the meeting. A request that says "we need a librarian because we're busy" is easy to defer. A request that says "our graduate students are under-resourced at exactly the moment the university is pursuing a research reclassification" is harder to ignore.

This exercise builds two complementary skills: using Claude to draft and pressure-test a funding argument, and using constraints (a word limit, a bullet count, a `/clear`) to produce sharper versions that work across different delivery contexts.

## Discussion

- A Provost who funds this position will hold you accountable for the outcomes you described. How does that change what you're willing to put in the brief?
- When does anticipating objections become a liability — when does it signal weakness instead of preparation?
- Looking across all four exercises in this module: what kind of institutional knowledge does Claude genuinely lack, and how would you build it into CLAUDE.md before a real leadership document cycle?
