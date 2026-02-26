---
id: "01-orient"
title: "Orient Claude to Cataloging Standards"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Start Claude Code in the library-context folder"
    type: "terminal"
    instruction: |
      Navigate to the `library-context/` folder and start Claude Code:

      ```
      cd ~/workshop/library-context
      claude
      ```
    checkpoint: "You see the Claude Code `>` prompt."

  - index: 1
    label: "Explore the CLI before diving in"
    type: "terminal"
    instruction: |
      Before cataloging work, learn what Claude Code can do from the command line. Type `/help` at the Claude `>` prompt:

      ```
      /help
      ```

      Scan the list of slash commands. Then, to see all the options available when launching Claude Code, open a **second terminal tab** and run:

      ```
      claude --help
      ```

      You'll see flags like `--print` (non-interactive output) and `--model` (choose a specific model). Come back to your Claude session when done.
    checkpoint: "You've seen both /help (slash commands inside a session) and claude --help (CLI launch flags)."
    facilitator_note: "The distinction between /help and claude --help confuses participants at first. /help is for commands inside an active session; claude --help is for the shell command itself. Make the analogy: /help is like a menu inside a restaurant; --help is the sign outside."

  - index: 2
    label: "Test Claude's cataloging knowledge"
    type: "prompt"
    instruction: |
      Let's verify Claude understands the cataloging standards in CLAUDE.md. Paste this prompt:
    prompt_text: |
      Based on CLAUDE.md, tell me:
      1. Which descriptive standard should I use for new records?
      2. Which classification scheme does our library use?
      3. What does "specify both indicator positions" mean for MARC 21 fields?
      4. Why must LCSH headings be verified against the LC authority file after you suggest them?
    checkpoint: "Claude should answer RDA, LCC, explain indicator positions, and acknowledge that its LCSH suggestions need authority file verification."
    facilitator_note: "The indicator question often trips participants up. MARC indicators control display and indexing — two blanks is not the same as two zeros. Ask: has anyone ever seen a record where the title appeared twice in the catalog? Indicator error."

  - index: 3
    label: "Pass the catalog items file directly to Claude"
    type: "prompt"
    instruction: |
      Use the `@` file reference to give Claude the catalog items without copying and pasting. Type:
    prompt_text: |
      @catalog-items.txt

      Look at these catalog items. For Item 1, identify: (1) what type of material it is, (2) which MARC Leader/Type value it would use, and (3) any detail that might complicate cataloging (e.g., unusual format, multiple authors, series information).
    checkpoint: "Claude reads the file and correctly identifies Item 1's material type, suggests a Leader/Type value, and notes any complicating factors."
    facilitator_note: "The @ syntax is one of Claude Code's most efficient features. Once participants see they can pass a whole catalog-items file in one gesture, they usually start thinking about other files they'd want to pass: policy documents, authority lists, existing catalog records for comparison."

  - index: 4
    label: "Use --print for a quick standards check"
    type: "terminal"
    instruction: |
      Sometimes you just need a quick fact, not a full session. Open a **new terminal tab** and run:

      ```
      claude --print "What is the difference between MARC field 260 and 264, and which should be used for new RDA cataloging records?"
      ```

      The answer prints immediately and the shell returns. No session needed.
    checkpoint: "You see a clear explanation of 260 vs. 264 printed to your terminal."
    facilitator_note: "Catalogers often use --print for quick standards lookups during busy cataloging sessions. It's faster than opening a browser to check a cataloging manual, and Claude can answer in plain language rather than pointing you to a technical spec."

  - index: 5
    label: "Observe what CLAUDE.md does and doesn't cover"
    type: "observe"
    instruction: |
      Review what you know about the CLAUDE.md cataloging configuration:
    observe_items:
      - "CLAUDE.md specifies the descriptive standard (RDA) and classification scheme (LCC)"
      - "CLAUDE.md instructs Claude to specify both indicator values explicitly"
      - "CLAUDE.md includes a warning that LCSH suggestions must be verified"
      - "CLAUDE.md does NOT contain the actual LC authority file — Claude cannot look up headings in real time"
    reflection_prompt: "What's one piece of cataloging policy specific to your institution that isn't in CLAUDE.md and that would affect how Claude generates records?"
---

## Orient Claude to Cataloging Standards

Cataloging work requires Claude to understand a specific set of rules: which descriptive standard to follow, which classification scheme to use, and how MARC 21's field-indicator system works. The `CLAUDE.md` file in the workshop folder configures all of this — but it's worth verifying that Claude actually understood before you start generating records.

This exercise also introduces a critical concept: **Claude can suggest LCSH headings but cannot verify them**. Authority control requires checking against the LC authority file — a step that must always be done by you.

You'll also practice two ways to run Claude Code: the interactive session for complex cataloging work, and `--print` for quick standards lookups.

## Discussion

- Why does it matter that Claude "acknowledges" limitations rather than just proceeding confidently?
- What would happen to downstream catalog users if unverified LCSH headings made it into live records?
