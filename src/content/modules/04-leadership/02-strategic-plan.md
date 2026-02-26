---
id: "02-strategic-plan"
title: "Draft a Strategic Goal"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Draft a SMART strategic goal"
    type: "prompt"
    instruction: |
      Strategic plans live or die on the measurability of their goals. A goal that says "improve research support" is unverifiable; a goal that says "increase individual research consultations by 20% by June 2026" gives you something to report against. Paste this prompt:
    prompt_text: |
      Our library wants to expand research consultation services as part of our Research Support Expansion strategic priority. We currently provide 1,847 individual research consultations per year, reaching approximately 15% of our graduate student population.

      Draft a strategic goal for this initiative in SMART format (Specific, Measurable, Achievable, Relevant, Time-bound). Include:
      1. The goal statement itself (one sentence)
      2. Two supporting objectives with measurable targets
      3. One success metric we could track quarterly

      Write for an internal strategic planning document.
    checkpoint: "Claude produces a goal statement with a specific percentage target and a defined time horizon, two concrete objectives (e.g., hire a research services librarian, launch a consultation scheduling system), and at least one quarterly trackable metric."
    facilitator_note: "Watch for Claude producing a goal like 'improve research support services.' This is not SMART — it has no measure and no time horizon. Ask participants: what question does this goal fail to answer? (Answer: 'How will we know when we've succeeded?')"

  - index: 1
    label: "Evaluate against SMART criteria"
    type: "observe"
    instruction: |
      Before asking Claude to revise, evaluate the goal yourself:
    observe_items:
      - "The goal statement includes a specific numerical target (not 'improve' or 'increase' without a number)"
      - "The time horizon is explicit — a fiscal year end date or a specific month/year"
      - "The two objectives are independently achievable, not just restatements of the goal"
      - "The quarterly metric is something you could actually track with existing data systems"
    reflection_prompt: "Which criterion is weakest in Claude's draft? What would a budget committee ask that this goal can't currently answer?"

  - index: 2
    label: "Ask Claude to self-evaluate and revise"
    type: "prompt"
    instruction: |
      Claude can evaluate its own output against explicit criteria. This often surfaces weaknesses you might not have caught:
    prompt_text: |
      Evaluate the strategic goal you just drafted against the SMART framework — be specific about what each letter means for this goal. Then identify the weakest element and revise only that part. Explain your revision.
    checkpoint: "Claude identifies a specific weakness (usually the 'Achievable' criterion — whether the % target is realistic given current staffing — or a time horizon that's too vague) and produces a targeted revision with an explanation."
    facilitator_note: "This self-evaluation technique works across all Claude tasks. When the goal is to produce a document that will be scrutinized, asking Claude 'where is this weakest?' surfaces assumptions you can then verify. Participants are often surprised that Claude will identify real problems with its own output."

  - index: 3
    label: "Adapt for three audiences"
    type: "prompt"
    instruction: |
      The same strategic goal needs different language for different readers. Practice audience adaptation:
    prompt_text: |
      Take the revised strategic goal and rewrite it three ways:

      1. **Board of Trustees** (formal, 2 sentences max, connect to university's research mission, no library jargon)
      2. **Library staff** (internal, conversational, explain what this means for their day-to-day work)
      3. **Accreditation self-study** (academic register, cite current baseline data, use standard outcomes language)

      Label each version clearly.
    checkpoint: "Three distinct versions are produced. The board version avoids terms like 'research consultations' in favor of 'one-on-one expert support.' The staff version is noticeably less formal. The accreditation version includes the baseline number and uses language like 'documented outcomes.'"
    facilitator_note: "The most instructive comparison is usually board vs. staff. Board language often sounds cold when read by staff; staff language often sounds casual to trustees. Ask: has anyone ever sent the wrong version to the wrong audience? What happened?"

  - index: 4
    label: "Ask what evidence would strengthen the goal"
    type: "prompt"
    instruction: |
      Before taking a strategic goal to the Provost, you need to know what questions it will face. Ask Claude to help you prepare:
    prompt_text: |
      If I presented this strategic goal to the Provost, what 3 pieces of evidence or baseline data would make it more credible — things that would answer "why this goal, why now, and why this target?" Then flag any of those data points that you cannot provide yourself and that I would need to gather independently.
    checkpoint: "Claude suggests specific evidence types (e.g., benchmarking data from peer institutions, student demand surveys, current consultation queue data) and is explicit about which of those it cannot generate (peer benchmarks, institutional survey data, internal wait-time records)."
    facilitator_note: "The explicit self-limitation here is a feature, not a failure. Claude is telling you where to do additional work. Participants who skip this step often present goals to administrators and get asked exactly the questions Claude flagged."

  - index: 5
    label: "Reflect on SMART goal drafting"
    type: "reflect"
    instruction: |
      You've drafted a strategic goal, tested it against SMART criteria, asked Claude to self-evaluate, adapted it for three audiences, and identified the evidence needed to defend it.
    reflection_prompt: "How does the SMART self-evaluation step change what you'd accept from Claude in a strategic planning document? Would you use this workflow before your next strategic planning cycle — and if so, which step would you skip?"
---

## Draft a Strategic Goal

Strategic goals are among the most reused documents in library administration — the same goal language appears in annual reports, accreditation self-studies, board presentations, and grant applications. Getting the goal right the first time, and then adapting it for each audience, is time-consuming work that Claude can accelerate.

The skill this exercise builds is **precision prompting for professional document types**: giving Claude enough context to draft well, then using follow-up prompts (self-evaluation, audience adaptation, evidence mapping) to surface the goal's weaknesses before your provost or accreditor does.

## Discussion

- When does a SMART goal become so specific that it's a liability? (What if you set a 20% increase target and only hit 14%?)
- How do you handle audience adaptation when board language has to be formally approved but staff need to understand the same goal?
- What strategic planning work would you never start with Claude? What would you always start with Claude?
