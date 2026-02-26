---
id: "02-marc-record"
title: "Generate a MARC-Style Record"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Provide the bibliographic source"
    type: "prompt"
    instruction: |
      Use Item 1 from `catalog-items.txt`. Paste this prompt to have Claude generate a MARC-style record:
    prompt_text: |
      Here is bibliographic information for a new item:

      Title: "Decolonizing the Library: A Practical Guide for Academic Librarians"
      Author: Thompson, Anika R.
      Publisher: University of Michigan Press
      Publication year: 2023
      Description: 287 pages, 24 cm
      Includes bibliographical references and index
      ISBN: 978-0-472-03945-1
      Subject areas: Libraries and decolonization, Academic libraries — Social aspects, Indigenous peoples — Library services

      Generate a MARC 21 bibliographic record for this item using RDA descriptive standards and LCC classification. Include at minimum: Leader/Type, 020 (ISBN), 100 (Main Entry), 245 (Title), 264 (Production/Publication), 300 (Physical Description), 336/337/338 (Content/Media/Carrier), 504 (Bibliography note), 650 (Subject — Topical), 700 (if applicable).

      For each field, specify BOTH indicator values as digits (even if blank, write "blank" or "b").
    checkpoint: "Claude should produce a structured MARC-like record with field numbers, indicators, and subfield codes."
    facilitator_note: "Watch for: Claude omitting indicator values (a red flag), or using AACR2-style title capitalization instead of RDA (sentence case). Ask participants: how would you verify the LCC call number Claude suggested?"

  - index: 1
    label: "Check the record critically"
    type: "observe"
    instruction: |
      Examine Claude's MARC record carefully:
    observe_items:
      - "Field 245 uses sentence-case capitalization (RDA style, not AACR2 title case)"
      - "Both indicator positions are specified for each field"
      - "Field 264 is used (not 260 — that's AACR2)"
      - "Fields 336, 337, 338 are present (RDA required)"
      - "At least one 650 subject heading is suggested"

  - index: 2
    label: "Ask Claude to correct an error"
    type: "prompt"
    instruction: |
      Practice targeted correction. Paste this prompt (adjust field numbers based on Claude's actual output):
    prompt_text: |
      In the 245 field you generated, the title appears to use title-case capitalization. Under RDA, only the first word of the title and proper nouns should be capitalized. Please correct the 245 field and explain why RDA uses sentence case instead of title case.
    checkpoint: "Claude should correct the capitalization and explain that RDA follows natural language capitalization rules."

  - index: 3
    label: "Ask Claude to identify its own uncertain fields"
    type: "prompt"
    instruction: |
      Good catalogers check their work. Ask Claude to do the same:
    prompt_text: |
      Looking at the MARC record you generated, which 2–3 fields are you least confident about? For each one, explain what you're uncertain about and what a cataloger would need to verify or look up to confirm the correct value.
    checkpoint: "Claude identifies fields like the LCC call number (requires LC classification schedules), LCSH subject headings (require authority file), or specific subfield codes."
    facilitator_note: "This is the self-uncertainty technique introduced in Module 1, now applied to structured data. Claude often correctly identifies that LCC call numbers require the actual classification schedules, and that LCSH headings need authority file confirmation. This is the behavior you want to reinforce."

  - index: 4
    label: "Ask Claude to save the record to a file"
    type: "prompt"
    instruction: |
      Claude Code can create and write files in your current directory. Ask it to save the corrected record:
    prompt_text: |
      Please write the complete corrected MARC record to a new file called `draft-record-thompson.txt` in the current directory. Include a line at the top noting the date (2026-02-26) and that this is a Claude-assisted draft requiring verification before import.
    checkpoint: "Claude creates the file. You can verify it exists by switching to your other terminal tab and running `ls` or `cat draft-record-thompson.txt`."
    facilitator_note: "Claude Code's ability to write files is one of its most practical features for catalogers. Point out the header Claude adds — it makes clear this is a draft, which is important if the file ever gets mixed in with production records."

  - index: 5
    label: "Generate a record for a second item"
    type: "prompt"
    instruction: |
      Use the `@` reference to work with the next catalog item from the file:
    prompt_text: |
      @catalog-items.txt

      Using the same MARC 21 / RDA standards, generate a draft bibliographic record for Item 2 from this file. Apply the same field requirements as before (Leader/Type, 020, 100, 245, 264, 300, 336/337/338, 504 if applicable, 650).
    checkpoint: "Claude produces a second MARC record using the same standard, adapted for the different item type or format."

  - index: 6
    label: "Reflect on Claude-assisted cataloging"
    type: "reflect"
    instruction: |
      You've generated two records, corrected errors, and saved a draft file.
    reflection_prompt: "Where in your cataloging workflow is Claude most useful — original cataloging from scratch, copy cataloging from a brief record, or retrospective conversion of legacy records? What would you always need to verify manually, no matter how good the draft is?"
---

## Generate a MARC-Style Record

MARC records are the backbone of library catalogs, but creating them from scratch is time-consuming. Claude can generate a first-draft record that captures the major fields — giving catalogers a structured starting point rather than a blank form.

The catch: Claude will sometimes make mistakes that only a cataloger would catch — wrong indicator values, outdated field usage (260 vs 264), or AACR2-era capitalization. This exercise builds the habit of reviewing Claude's work critically, asking Claude to flag its own uncertain fields, and using Claude Code's file-writing capability to save drafts for later verification.

## Discussion

- Which errors in Claude's record would have made it into your catalog if you hadn't checked?
- How does the "targeted correction" technique help you work faster than regenerating the whole record?
- Where in your cataloging workflow would this be most useful: original cataloging, copy cataloging, retrospective conversion?
