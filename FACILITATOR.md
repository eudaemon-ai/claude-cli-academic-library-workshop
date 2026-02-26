# Facilitator Guide — Library AI Workshop

## Workshop Overview

**Duration**: 2–2.5 hours (3 modules × 45 min each, plus 15 min intro and 5 min wrap-up)
**Audience**: Non-technical academic library staff (reference librarians, catalogers, collection development officers, administrators)
**Setting**: In-person or hybrid; participants need a laptop with Claude Code installed and a stable internet connection
**Max cohort size**: 20 participants (facilitator dashboard works best below 25)

---

## Pre-Session Checklist

### Technical Setup (Day Before)
- [ ] AWS DynamoDB table `LibraryWorkshop` created with correct GSI (`cohort-lastSeen-index`)
- [ ] `.env` file configured with correct AWS credentials, `FACILITATOR_TOKEN`, and `PUBLIC_COHORT`
- [ ] App running on a URL accessible to all participants (or on localhost for in-person sessions)
- [ ] `src/content/library-context/` folder shared with participants (USB, shared drive, or GitHub link)
- [ ] Claude Code installed and authenticated on at least one test machine

### Content Review
- [ ] Read all 12 exercise files in `src/content/modules/` — especially the `facilitator_note` fields
- [ ] Review `src/content/library-context/CLAUDE.md` — you'll demo this in the orientation
- [ ] Test the full Module 1 flow on your own machine (takes ~30 min)

### Participant Preparation
- [ ] Send participants the workshop URL and ask them to complete the name/role registration before the session
- [ ] Share the `library-context/` folder download link
- [ ] Remind participants that no coding is required — they only type prompts into Claude

---

## Session Agenda

### Introduction (15 minutes)

**Goal**: Frame what Claude Code is and isn't, and set expectations.

**Talking points**:
1. "Claude Code is not autocomplete. It reads files, understands context, and responds to natural language instructions."
2. "The `CLAUDE.md` file is how you tell Claude what it needs to know about your library. Think of it as an orientation document for a very capable new colleague."
3. "Everything Claude produces requires your professional judgment. We're not here to replace your expertise — we're here to make the repetitive parts faster."
4. "You will not write any code today. You'll type prompts and evaluate Claude's output."

**Demo**: Open Claude Code in the `library-context/` folder on the projector. Show the `>` prompt. Show that Claude reads `CLAUDE.md` automatically. Ask Claude: "What do you know about this library?" — show participants what it says.

---

### Module 1: Reference & Research (45 minutes)

**Exercises**: 4 exercises, 10–15 min each

**Exercise 1 — Orient Claude (10 min)**
- Common issue: Participant runs `claude` from wrong folder. Ask them to run `pwd` and check.
- Facilitator note for Step 2: "What did Claude say the library's tone policy is?" — use this to check comprehension.

**Exercise 2 — Patron Query (10 min)**
- This is the first real output exercise. Expect variation.
- Common issue: Claude suggests databases the library doesn't subscribe to. Discussion point: "What does this tell you about how specific your CLAUDE.md needs to be?"
- **Discovery Moment follows this exercise** — pause the group, show the discussion questions on screen, give 3–4 minutes of discussion before everyone clicks "Continue."

**Exercise 3 — Synthesis (15 min)**
- The "explain your reasoning" prompt in Step 2 often produces the best discussion. "Does Claude's explanation change your confidence in its answer?"
- Highlight context persistence: Claude remembered the previous response and built on it.

**Exercise 4 — Refine and Follow Up (10 min)**
- **Discovery Moment follows this exercise**.
- The 3-sentence constraint exercise often produces surprisingly useful output. Note: if Claude produces 4 sentences, that's itself a prompt design lesson.

---

### Module 2: Cataloging & Metadata (45 minutes)

**For non-catalogers in the room**: "Even if you don't do cataloging yourself, understanding how Claude handles structured, standards-driven work is valuable for any library role."

**Exercise 1 — Orient (10 min)**
- The MARC indicator question is often unfamiliar to non-catalogers. Brief explanation: "Indicators are two digits after the field number that control how the field is displayed and indexed. Getting them wrong can cause records to appear twice in the catalog."

**Exercise 2 — MARC Record (10 min)**
- Common errors in Claude's output: title case in 245, using 260 instead of 264, missing indicators.
- Discussion: "Which errors would have made it into your catalog if you hadn't checked?"

**Exercise 3 — Subject Headings (15 min)**
- The uncertainty probe (Step 2) is the pedagogical highlight of this module. Claude that acknowledges uncertainty is demonstrably more useful than Claude that sounds confident about everything.
- **Discovery Moment follows this exercise**.

**Exercise 4 — Abstract (10 min)**
- Watch for evaluative language in the 520 field. Common violations: "groundbreaking," "important," "must-read."
- The archival scope note variation introduces EAD concepts — skip or simplify for audiences without archival background.

---

### Module 3: Collection Development (45 minutes)

**Exercise 1 — Orient (10 min)**
- The TR_B1 vs TR_B2 distinction is the key concept for this module. Spend 2 minutes on this before learners start.
- Talking point: "TR_B2 >> TR_B1 doesn't mean low use. It means patrons are finding the content but not downloading it. That could be a UX problem, a subject coverage mismatch, or a paywalled access issue."

**Exercise 2 — Selection Rationale (10 min)**
- Notice Claude doesn't include price language — that's CLAUDE.md doing its job.
- Common question: "Shouldn't rationales include cost?" Answer: "The rationale justifies intellectual value. Cost justification is a budget memo — a different document type."

**Exercise 3 — Vendor Evaluation (15 min)**
- The post-cancellation access concern is the most important concept here. Brief summary: "If you cancel and have no perpetual rights, you've lost access to everything published during your subscription — even content patrons cited in their dissertations."
- **Discovery Moment follows this exercise**.

**Exercise 4 — Usage Analysis (10 min)**
- Participants need to paste the CSV content into Claude manually. This step takes 2–3 extra minutes.
- The `Serials Review` row (0 TR_B1, 12 TR_B2) is a clear cancellation candidate. Claude should flag it.
- **Discovery Moment follows this exercise** — this is the final exercise, so treat this discussion as a workshop wrap-up prompt.

---

### Closing (5 minutes)

**Questions to pose to the group**:
1. "Which module's workflow are you most likely to actually change after today?"
2. "What's one thing you'd add to CLAUDE.md for your specific department?"
3. "Where is the line between AI assistance and professional judgment in your role?"

**Logistics**:
- The workshop data TTLs automatically in 48 hours (DynamoDB TTL)
- AWS teardown: delete the `LibraryWorkshop` table from the DynamoDB console
- Participant reflections/notes are stored in DynamoDB and can be exported before teardown

---

## Backup Plans

### If a participant can't run Claude Code
- Pair them with a neighbor who has it working
- They can participate in observation and discussion without CLI access
- As a last resort, they can use Claude.ai (claude.ai) in the browser — they'll need to paste CLAUDE.md content manually into each conversation

### If the workshop app URL is unavailable
- Print the exercise markdown files (in `src/content/modules/`) as a paper handout
- The step-by-step instructions work independently of the web UI

### If AWS/DynamoDB is unavailable
- The app still works for exercises — it just won't track progress
- Facilitator dashboard will be empty, but exercises are fully functional
- Inform participants progress won't be saved; they can still complete all exercises

### If Claude Code returns generic (non-library-specific) responses
- Ask participant: "Are you in the `library-context/` folder?" (`pwd` to check)
- Ask: "Did Claude show any acknowledgment of CLAUDE.md when you started?" (it usually logs this)
- If problem persists: ask Claude directly: "Please read CLAUDE.md and summarize your instructions" — this forces a re-read

---

## Facilitator Dashboard

Access the dashboard at: `http://[your-workshop-url]/facilitator?token=<FACILITATOR_TOKEN>`

The dashboard refreshes every 30 seconds. Key things to watch:
- **Pacing alert**: Fires when any learner is 2+ exercises behind the cohort median
- **Module heatmap**: Shows which exercises the cohort has reached — useful for pacing decisions
- **Talking points**: Automatically surfaces facilitator notes for the median exercise

When to intervene based on the dashboard:
- If >3 learners are stuck on the same exercise: pause and do a group walkthrough
- If a learner is inactive for >10 min: check in with them directly
- If the cohort is running ahead of schedule: skip the cross-module Discovery Moment discussions
