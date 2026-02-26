---
id: "04-followup"
title: "Refine and Follow Up"
estimated_minutes: 15
discovery_moment: true
steps:
  - index: 0
    label: "Change the audience mid-conversation"
    type: "prompt"
    instruction: |
      Claude remembers the conversation so far. Practice redirecting it:
    prompt_text: |
      Take the synthesis you just wrote for the faculty member and rewrite it for an undergraduate student who has never written a literature review. Use simpler language, cut the methodological debate section, and add a sentence suggesting where they should start their research.
    checkpoint: "Claude should produce a noticeably simpler version targeted at undergraduates, not just lightly edited."
    facilitator_note: "This demonstrates context persistence. Claude doesn't need to re-read the synthesis — it already has it in context. Ask: what does this mean for how you structure a working session with Claude?"

  - index: 1
    label: "Ask Claude to explain its choices"
    type: "prompt"
    instruction: |
      A useful skill is asking Claude to be transparent about its decisions. Try this:
    prompt_text: |
      Why did you choose the starting point you suggested for the undergraduate? What other starting points did you consider and why did you not recommend them?
    checkpoint: "Claude should explain its reasoning, not just repeat the recommendation."
    facilitator_note: "This 'explain your reasoning' technique is valuable for verification — it surfaces assumptions you can then check. Some Claude responses will reveal limitations worth discussing."

  - index: 2
    label: "Set a constraint and see what changes"
    type: "prompt"
    instruction: |
      Constraints often produce better output. Paste this:
    prompt_text: |
      Rewrite the undergraduate version in exactly 3 sentences: one describing what the research says overall, one naming where to start, and one flagging what to watch out for.
    checkpoint: "Claude should produce exactly 3 sentences. If it doesn't, note that as a prompt design issue."

  - index: 3
    label: "Ask what context would help Claude improve"
    type: "prompt"
    instruction: |
      Claude can tell you what it's missing. This helps you think about what to add to CLAUDE.md or provide in future prompts:
    prompt_text: |
      Based on the reference and synthesis work we've done in this conversation, what 3 pieces of information about our library — things you don't currently know — would most improve the quality of your responses? Be specific about how each piece of information would change your output.
    checkpoint: "Claude suggests specific, practical additions: e.g., which databases the library subscribes to, subject areas covered, typical patron demographics, or citation style preferences."
    facilitator_note: "This is a powerful technique for iterating on CLAUDE.md. Have participants write down Claude's suggestions — many will want to actually update their library's context file after the workshop."

  - index: 4
    label: "Try non-interactive mode from the terminal"
    type: "terminal"
    instruction: |
      Claude Code can also run without an interactive session — useful for quick one-off questions or scripting. Open a **new terminal tab** (not the Claude Code session) and run:

      ```
      claude --print "In one sentence, what is the difference between a reference response and a research consultation?"
      ```

      The answer will print directly to your terminal and the process will exit. No `>` prompt, no session.
    checkpoint: "You see a one-sentence answer printed to your terminal and the shell prompt returns."
    facilitator_note: "The --print flag is useful for batch tasks: librarians sometimes use it to quickly generate form language, check definitions, or process small amounts of text without opening a full session. It's also scriptable — you could pipe output from --print into a file or another tool."

  - index: 5
    label: "Observe the difference between modes"
    type: "observe"
    instruction: |
      Compare what you've used in this module:
    observe_items:
      - "Interactive mode (`claude`): full conversation, context builds up, /clear to reset"
      - "Non-interactive mode (`claude --print`): one question, one answer, no session, good for quick lookups"
      - "@ file references: pass a file's contents directly into any prompt"
      - "/help: see all available slash commands inside a session"

  - index: 6
    label: "Reflect on the full module"
    type: "reflect"
    instruction: |
      You've completed the Reference & Research module.
    reflection_prompt: "Which of the four exercises in this module would you use in your actual work next week? And which Claude Code feature — @file references, /clear, --print, or iterative prompting — seems most useful for your workflow?"
---

## Refine and Follow Up

A single prompt is rarely the end of a productive Claude session. In practice, the most effective use of Claude Code involves a back-and-forth: generating a first draft, redirecting it for a different audience, asking Claude to explain its choices, and imposing constraints to sharpen the output.

In this exercise, you'll practice three follow-up techniques (audience reframing, transparency prompting, and constraint-setting), ask Claude what information would make it more useful, and compare interactive versus non-interactive modes.

## Discussion

- How does the "explain your reasoning" technique change your confidence in Claude's output?
- When would you use `--print` mode versus an interactive session in your work?
- What's the most useful single thing you learned in this module?
