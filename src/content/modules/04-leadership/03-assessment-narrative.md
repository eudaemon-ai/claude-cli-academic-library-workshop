---
id: "03-assessment-narrative"
title: "Turn Data into an Assessment Narrative"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Identify the most significant findings"
    type: "prompt"
    instruction: |
      Assessment reports fail when they present data without interpretation — a table of numbers tells an administrator nothing unless someone explains what those numbers mean. Paste this prompt to begin:
    prompt_text: |
      @library-stats.txt

      You are helping me prepare the library's annual assessment report for the Provost. Based on this data, identify the 3 most significant findings from this year — things that signal something meaningful about library performance, patron value, or strategic progress.

      For each finding:
      1. Name the specific metric and its value
      2. Explain what it signals to a Provost reviewing library performance (not what it means to a librarian)
      3. Connect it to one of our four institutional strategic priorities

      Do not use library jargon. Write as if the Provost has never seen a TR_B1 or LibGuide before.
    checkpoint: "Claude identifies 3 findings, at least one of which is a decline (e.g., satisfaction scores, collection adequacy), and frames each in terms of institutional impact rather than library activity. The connection to strategic priorities is explicit, not implied."
    facilitator_note: "The most instructive finding is usually the collection adequacy satisfaction drop (79%, down from 83%). Ask: does Claude present this as a problem or in context? Does it note that the collections budget has been flat while vendor prices increased 5–7%? If Claude only reports the drop without context, this is a teaching moment about the difference between data presentation and narrative."

  - index: 1
    label: "Check for executive register"
    type: "observe"
    instruction: |
      Before drafting the full narrative, evaluate Claude's findings framing:
    observe_items:
      - "No library-specific acronyms appear (TR_B1, ILL, LibGuides, COUNTER, APC)"
      - "Each finding connects to institutional mission or a named strategic priority"
      - "Declining metrics are contextualized — not just reported as drops"
      - "The framing answers 'so what?' for an administrator who manages multiple departments"
    reflection_prompt: "Which finding did Claude frame most effectively for a non-librarian audience? Which would need the most editing before you'd include it in an actual report?"

  - index: 2
    label: "Draft the executive summary"
    type: "prompt"
    instruction: |
      Now turn those findings into a prose narrative the Provost can read in 90 seconds:
    prompt_text: |
      Using the three findings you identified, draft a 3-paragraph executive summary of the library's annual performance. Requirements:
      - 250 words maximum total
      - No library jargon
      - Active voice throughout
      - Each paragraph covers one finding
      - The final sentence of the last paragraph should connect the library's overall performance to a university strategic goal

      Write for a Provost who will read this at the start of a budget meeting.
    checkpoint: "Claude produces a 3-paragraph narrative under 250 words with no jargon, in active voice. The final sentence frames library performance in terms of the university's mission or a named institutional goal."
    facilitator_note: "Budget meeting context matters. A Provost reading before a meeting is primed to ask 'what do you need?' Ask participants: does Claude's summary position the library as an asset or as a problem to solve? The framing shapes what kind of conversation happens next."

  - index: 3
    label: "Anticipate the Provost's questions"
    type: "prompt"
    instruction: |
      The best leaders walk into meetings knowing what questions they'll face. Use Claude to prepare:
    prompt_text: |
      After reading this executive summary, what are the 2 most likely questions the Provost will ask — the questions that probe the data most directly or challenge the framing? For each question, draft a one-sentence response that I could give verbally in the meeting.
    checkpoint: "Claude identifies substantive questions (e.g., 'What's driving the drop in collection satisfaction?' or 'What would it take to reverse this trend?') rather than surface-level ones. Each one-sentence response is direct, not defensive."
    facilitator_note: "Participants are often surprised that Claude's anticipated questions are sharper than they expected. This technique — 'what questions will I get?' — transfers directly to board presentations, faculty senate meetings, and donor conversations. It's one of the highest-value prompting patterns in this module."

  - index: 4
    label: "Find the most challengeable statistic"
    type: "prompt"
    instruction: |
      Every assessment report has at least one number that will draw scrutiny. Ask Claude to find it before your reviewer does:
    prompt_text: |
      Looking at the executive summary and the underlying data in library-stats.txt, which single statistic in this narrative is most likely to be challenged or questioned — either because it looks weak, because it lacks context, or because it could be interpreted differently than I intend? Explain why it's vulnerable, and suggest one sentence I could add to the narrative to pre-empt that challenge.
    checkpoint: "Claude identifies a specific vulnerable statistic (likely the 68% digital resource discoverability score, the 7% survey response rate, or the collection satisfaction decline) and proposes a concrete sentence that adds context or a response frame."
    facilitator_note: "The 7% response rate on the satisfaction survey is often the most defensible vulnerability — it's a legitimate methodological concern. Ask participants: do you include response rates in your reports? If a faculty senate member asked 'how representative is this?' what would you say?"

  - index: 5
    label: "Reflect on data-to-narrative work"
    type: "reflect"
    instruction: |
      You've transformed raw statistics into a provost-ready narrative, anticipated likely questions, and found the most vulnerable data point before your reviewer did.
    reflection_prompt: "How does this process compare to how you currently write assessment narratives? Where did Claude add the most value — finding the findings, drafting the prose, or anticipating the challenges?"
---

## Turn Data into an Assessment Narrative

Every year, library directors produce assessment reports that nobody reads. The data is there — gate counts, downloads, instruction sessions, satisfaction scores — but the story isn't. What does a 12% increase in research consultations actually mean for the institution? What does a 4-point drop in satisfaction signal about resource adequacy? These interpretive moves are what separate a useful assessment narrative from a spreadsheet in a PDF.

Claude can perform these moves quickly: finding the signal in noisy data, translating library metrics into institutional language, and anticipating the questions an administrator will bring to a budget meeting. This exercise builds all three skills in sequence.

## Discussion

- When Claude identifies a "significant finding," how do you verify it's actually significant versus just notable? What would you check?
- Assessment reports often have a political dimension — some findings are better buried than highlighted. Where does Claude's objectivity help, and where does it get in the way?
- How would you use the "anticipate questions" technique before a board presentation or accreditation visit?
