---
id: "03-evaluate"
title: "Evaluate a Vendor Offer"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Describe the vendor offer"
    type: "prompt"
    instruction: |
      Vendor offers often come with complex terms. Paste this scenario prompt:
    prompt_text: |
      A database vendor has offered us a 3-year deal with the following terms:
      - Content: Full-text access to 420 journals in STEM and Social Sciences
      - Access model: Subscription (access ends if we cancel)
      - DRM: PDF downloads restricted to 5 pages without authenticated printing
      - ILL: Permitted for content published more than 24 months ago
      - Usage data: COUNTER 5 compliant (TR, DR reports available)
      - Post-cancellation access: None unless we purchase perpetual rights for individual titles
      - Annual price increase cap: 4% per year

      Using our collection policy from CLAUDE.md, evaluate this offer on each of the five selection criteria. Then identify the top 2 risks or concerns I should raise in negotiations, without mentioning specific dollar amounts.
    checkpoint: "Claude should evaluate the offer against all five criteria and flag at least 2 concerns (likely: no post-cancellation access, PDF download restriction affecting ILL/accessibility)."
    facilitator_note: "Common discussion triggers: post-cancellation access is one of the most important terms in database deals — if you cancel, do you lose access to content published during your subscription? The 5-page PDF DRM is also worth flagging: it may violate ADA accessibility requirements for patrons using assistive technology."

  - index: 1
    label: "Ask for a negotiation briefing"
    type: "prompt"
    instruction: |
      Claude can help you prepare for vendor meetings. Try this:
    prompt_text: |
      Based on the concerns you identified, help me prepare for a negotiation meeting. For each concern:
      1. Frame the concern as a question I could ask the vendor (not a demand)
      2. Describe what a satisfactory response from the vendor would look like
      3. Note what a red flag response would look like

      Write this as a brief meeting prep note, not a formal document.
    checkpoint: "Claude should produce a practical prep note with vendor-facing questions, not ultimatums."

  - index: 2
    label: "Create an ideal vs. actual comparison"
    type: "prompt"
    instruction: |
      A clear comparison table helps when presenting this to a committee. Ask Claude to build one:
    prompt_text: |
      Create a comparison table with two columns: "This Vendor's Offer" and "Ideal Terms." For each row, list a contract element (access model, DRM, ILL, post-cancellation access, usage data, price cap). Fill in what the vendor is offering and what the ideal alternative would be. Format it as plain text using dashes and pipes — no markdown tables.
    checkpoint: "Claude produces a two-column comparison covering all major contract elements in a readable plain-text format."
    facilitator_note: "Plain-text tables work better than markdown for participants who want to paste the output into email, Word, or a committee report. If participants are comfortable with markdown, offer that as an alternative."

  - index: 3
    label: "Draft a vendor clarification email"
    type: "prompt"
    instruction: |
      Practice one more practical document type — a professional inquiry to the vendor:
    prompt_text: |
      Draft a brief email (150 words or fewer) to the vendor requesting clarification on two points: (1) the specific terms for post-cancellation access and what perpetual rights would cost as a concept, and (2) whether the PDF download restriction can be adjusted for patrons using assistive technology under ADA compliance requirements.

      Tone should be professional and collaborative — this is a relationship, not a dispute. Do not include dollar amounts.
    checkpoint: "Claude produces a polished, professional email that raises both concerns without sounding adversarial and avoids pricing language."
    facilitator_note: "Point out that Claude correctly maintains professional relationship tone. Vendor negotiations go better when you're seen as a partner, not an adversary. Ask: how does framing a concern as 'we want to understand' vs. 'we demand' change the response you're likely to get?"

  - index: 4
    label: "Check the email for compliance"
    type: "observe"
    instruction: |
      Review Claude's vendor email carefully:
    observe_items:
      - "The email is 150 words or fewer"
      - "No specific dollar amounts appear"
      - "Both concerns are raised clearly (post-cancellation access and PDF DRM/ADA)"
      - "The tone is collaborative, not demanding"
      - "There is a clear call to action (what you're asking the vendor to provide)"

  - index: 5
    label: "Reflect on vendor negotiation"
    type: "reflect"
    instruction: |
      Collection development involves ongoing vendor relationships. AI can help you prepare but can't replace the relationship.
    reflection_prompt: "What aspects of vendor negotiation do you think benefit most from AI assistance — the analysis, the comparison framework, or the document drafting? What requires your personal expertise and institutional knowledge that Claude couldn't replicate?"
---

## Evaluate a Vendor Offer

Database contract evaluations are complex: access models, DRM restrictions, ILL permissions, COUNTER compliance, and post-cancellation rights all affect whether a deal serves your patrons well. Claude can work through these systematically against your collection policy — helping you build a structured evaluation quickly.

In this exercise you'll evaluate a vendor offer, prepare for negotiations, create a comparison table, and draft a professional clarification email — all while observing how CLAUDE.md's restriction on dollar amounts shapes Claude's output.

## Discussion

- How did Claude's evaluation of post-cancellation access compare to your own read of the terms?
- What are the limits of using AI assistance in vendor negotiations — what can't be delegated?
- When might you share Claude's evaluation framework with a colleague or committee?
