---
id: "01-orient"
title: "Orient Claude to Your Library"
estimated_minutes: 15
discovery_moment: false
steps:
  - index: 0
    label: "Open your terminal"
    type: "terminal"
    instruction: |
      Open a terminal window on your computer. If you're on a Mac, press **Command + Space**, type "Terminal," and press Enter.

      Navigate to the workshop's `library-context` folder. Your facilitator will tell you the exact path. It will look something like:

      ```
      cd ~/workshop/library-context
      ```
    checkpoint: "You should see a prompt ending with `library-context $` or similar."

  - index: 1
    label: "Start Claude Code"
    type: "terminal"
    instruction: |
      Start Claude Code by typing the following command and pressing Enter:

      ```
      claude
      ```

      Claude Code will start up and show you a `>` prompt. It will automatically read the `CLAUDE.md` file in the current folder.
    checkpoint: "You should see Claude Code's `>` prompt. Claude is now ready."

  - index: 2
    label: "Explore available commands with /help"
    type: "terminal"
    instruction: |
      Before doing any library work, let's learn the controls. At the Claude `>` prompt, type:

      ```
      /help
      ```

      You'll see a list of slash commands. Take a moment to scan them — you'll use `/clear` later in this module. Notice that Claude Code has built-in shortcuts for managing conversations.
    checkpoint: "You see a list of slash commands. Note /clear, /help, and any others that look useful."
    facilitator_note: "Participants often don't realize slash commands exist. Point out that /clear resets the conversation context (useful when starting a new task), and /help can be typed any time. This is a good moment to distinguish 'Claude Code the CLI tool' from 'the Claude AI model.'"

  - index: 3
    label: "Ask Claude what it knows about your library"
    type: "prompt"
    instruction: |
      Let's see if Claude has picked up the library context. Paste this prompt:
    prompt_text: |
      Please read CLAUDE.md and summarize: (1) who our primary patrons are, (2) what communication tone we use, and (3) one important pitfall I should watch out for in your responses.
    checkpoint: "Claude should describe your library's patrons, tone, and at least one common pitfall (e.g., LCSH verification)."
    facilitator_note: "If Claude gives a generic response without library-specific details, the learner may not be in the right folder. Ask them to run `pwd` and verify they're in `library-context/`."

  - index: 4
    label: "Notice what just happened"
    type: "observe"
    instruction: |
      Take a moment to notice what Claude did. Check each item below:
    observe_items:
      - "Claude mentioned specific details from CLAUDE.md (not just generic library facts)"
      - "Claude described a patron communication tone (professional but approachable)"
      - "Claude flagged at least one pitfall (e.g., verifying LCSH headings, or avoiding internal call numbers)"
    reflection_prompt: "What surprised you about how much Claude already knows from just reading one file?"

  - index: 5
    label: "Reference the file directly in a prompt"
    type: "prompt"
    instruction: |
      Claude Code lets you reference files directly in your prompts using the `@` symbol. This pulls the file's contents into the conversation explicitly. Try it:
    prompt_text: |
      @CLAUDE.md

      Based on the file above, what are three things a new staff member at our library should always do when using you for patron-facing work? Format your answer as a numbered checklist.
    checkpoint: "Claude responds with a checklist that references specific guidance from CLAUDE.md — not generic advice."
    facilitator_note: "The @ file reference is one of Claude Code's most useful features. It works with any file in the current directory or with a full path. Participants can use it to give Claude documents, data files, or templates to work from."

  - index: 6
    label: "Identify gaps in your library's context"
    type: "prompt"
    instruction: |
      The `CLAUDE.md` file sets Claude's context — but every library is different. Let's find out what's missing:
    prompt_text: |
      Looking at CLAUDE.md, what information about our library is NOT included that would make your reference assistance more accurate or useful? List 3–4 specific gaps and briefly explain why each matters.
    checkpoint: "Claude suggests additions like specific database subscriptions, subject liaison areas, local catalog quirks, or hours/contact info."

  - index: 7
    label: "Reflect on context and context files"
    type: "reflect"
    instruction: |
      You've now seen how CLAUDE.md shapes Claude's behavior — and where it falls short.
    reflection_prompt: "If you could add one section to CLAUDE.md for your specific role, what would it say? What would change about Claude's responses if it knew that?"
---

## Orient Claude to Your Library

Before asking Claude for help with reference work, it needs to understand your library's context—who your patrons are, what tone you use, and what standards matter. This is done through a `CLAUDE.md` file, a plain text document that acts as standing instructions for every conversation.

Think of `CLAUDE.md` like an orientation document for a new colleague: the better it describes your library's practices and expectations, the more useful Claude will be right out of the gate.

In this exercise, you'll start Claude Code, explore its built-in commands, verify that it has read and understood your library's context file, and practice referencing files directly in prompts.

## Discussion

- How does having a context file change what you'd need to explain in each prompt?
- What would you want to add to `CLAUDE.md` for your specific role or department?
- What are the risks of relying on Claude's interpretation of CLAUDE.md without checking?
