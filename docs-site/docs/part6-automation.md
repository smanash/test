---
id: part6-automation
title: "PART 6: Automation"
sidebar_label: "Automation"
sidebar_position: 6
---

*Two ways to get work done without anyone driving it, and they are easy to confuse, so start with 6.1.*

## 6.1 Flow or Agent?

A **Flow** does exactly what you laid out, in order, every time. An **Agent** decides its own steps to reach a goal, within limits you set. Choose by how much you need to predict the outcome.

|  | Flow | Agent |
| --- | --- | --- |
| Decides the steps | You do, in advance | It does, at the time |
| Same input, same result | Yes, always | Usually, not guaranteed |
| Best for | "Every Monday, email last week's figures" | "Answer staff questions about our policies" |
| Cost | Predictable | Varies with the conversation |
| When it goes wrong | A step failed; the run shows which | Needs testing and guardrails |

They also work together: a Flow can call an Agent, and an Agent can run a Flow.

## 6.2 Flows: steps in order

> `/t/<workspace>/executors/flows`

:::note Terms on this page

- **[Flow](/glossary#flow)** — Steps that run in the order you set.

:::

You build a Flow by dragging steps onto a canvas and joining them. The palette on the left groups them: a **Trigger** for how it starts, **Logic** for branching and waiting, and **Actions** for the real work.

| Step | What it does |
| --- | --- |
| Trigger | How the flow starts: on a schedule, on a request, or by hand |
| Condition | Takes one path or another based on a comparison |
| Switch | Branches many ways on one value |
| Parallel / Join | Runs branches at once, then waits for them |
| Loop | Repeats for each item in a list |
| Delay | Waits before carrying on |
| Terminate | Ends the run early |
| Run query | Runs a saved question against a Fact Base |
| HTTP request | Calls another system |

1.  Open **Flows**, select **New**, and give it a name that says what it achieves.
2.  On the **Builder** tab, drag a **Trigger** on first, then the steps that follow.
3.  Use **Test run** to try it safely with sample values.
4.  Select **Publish** when it behaves. The **Disabled** switch turns a published flow off without deleting it.
5.  Check the **Runs** tab to see each time it ran and what happened.

![The Flow builder: a palette of triggers, logic and action steps on the left, and a canvas with a When run step, with Test run, Run and Publish controls above.](/img/manual/76-flow-builder.png)

_FIG 6.1 — The Flow builder. **Test run** tries it safely; **Publish** makes it real._


![The Flows list showing Weekly sales digest as a draft.](/img/manual/75-flows-list.png)

_FIG 6.2 — The Flows list, with each flow's state._


![A Flow's Runs tab, empty because it has not run yet.](/img/manual/77-flow-runs.png)

_FIG 6.3 — Runs. Each entry opens to show which step failed, if any._


## 6.3 Agents: assistants with limits

> `/t/<workspace>/executors/agents`

:::note Terms on this page

- **[Agent](/glossary#agent)** — An assistant that chooses its own steps within your limits.
- **[Guardrail](/glossary#guardrail)** — A limit on what an agent may say or do.
- **[Eval](/glossary#eval)** — Saved test questions proving an agent still behaves after a change.

:::

An **Agent** answers questions and carries out tasks. You do not program it; you describe its job, give it the things it may use, and set the limits it must respect. Five tabs do almost all the work.

![The Agents list showing Sales Assistant.](/img/manual/78-agents-list.png)

_FIG 6.4 — The Agents list, with each agent's published state._


| Tab | What you set there |
| --- | --- |
| Instructions | Who the agent is, what it does, the rules it follows. The most important tab. |
| Tools | What it may _do_: query data, run a flow, call an API, send email. An explicit allow-list. |
| Knowledge | What it may _read_: Doc Bases to search, Fact Bases to query. |
| [Guardrails](/glossary#guardrail) | Limits: detecting personal data, caps on message rate and length. |
| Playground | A private place to test the draft before anyone else sees it. |

1.  Open **Agents**, select **New**, and name it for its job: "Sales Assistant".
2.  On **Instructions**, write plainly who it is, what it should do, and what it must not do.
3.  On **Knowledge**, attach a Doc Base or Fact Base. Without this it can only talk in generalities. Grounded answers cite what they used.
4.  On **Tools**, add only what it genuinely needs. Start with none and add as required.
5.  On **Guardrails**, set personal-data handling to **Warn**, **Mask** or **Block** as your policy requires.
6.  Test in **Playground**, then select **Publish**.

![The Instructions tab with a large text area for the agent's instructions and a conversation openers section.](/img/manual/80-agent-instructions.png)

_FIG 6.5 — Instructions. **Conversation openers** set the first message users see._


![The Knowledge tab offering Attach Doc Base and Attach Fact Base, with nothing attached yet.](/img/manual/82-agent-knowledge.png)

_FIG 6.6 — Knowledge. Attach something here or the agent has nothing of yours to draw on._


![The Tools tab, empty, explaining that tools let the agent query data, run flows, call APIs, send email or escalate.](/img/manual/81-agent-tools.png)

_FIG 6.7 — Tools: an allow-list, up to twenty._


![The Guardrails tab with personal-data detection modes Off, Warn, Mask and Block, and rate and length caps.](/img/manual/83-agent-guardrails.png)

_FIG 6.8 — Guardrails. **Block** refuses, **Mask** hides, **Warn** only flags._


![The Playground tab with Draft and Published options and an invitation to send a message to test the agent.](/img/manual/84-agent-playground.png)

_FIG 6.9 — Playground. Note the Draft / Published switch; check you are testing the one you mean._


![An Agent overview showing sessions, turns and tokens, and a definition panel listing model, tools, knowledge, budgets and guardrails.](/img/manual/79-agent-overview.png)

_FIG 6.10 — Overview: everything the agent is, on one page, plus whether it is published._


Two more tabs matter once an agent is in use. **[Evals](/glossary#eval)** stores test questions with expected answers, so you can prove a change did not break anything. **Sessions** shows real conversations people had with it.

![An Agent's Evals tab, empty, ready for a first test set.](/img/manual/85-agent-evals.png)

_FIG 6.11 — Evals. Build a set once, and every later change can be checked against it._


:::tip Tip

Every agent has a budget (a cap on tools and tokens per turn) shown on the Overview. It stops a confused agent running up cost. Leave the defaults until you have a reason.

:::

## 6.4 Flex Gateways: letting other systems in

> `/t/<workspace>/executors/gateway`

:::note Terms on this page

- **[Flex Gateway](/glossary#flex-gateway)** — A way for another system to ask your Solution for something.

:::

A **Flex Gateway** lets another system ask your Solution for something: your finance system fetching revenue totals, for instance. Use it instead of a page when the consumer is software rather than a person.

![The Flex Gateways list showing Sales API.](/img/manual/86-gateways-list.png)

_FIG 6.12 — The Flex Gateways list._


Each gateway has an address, and one or more **endpoints**. Each endpoint maps to a published Flow. New gateways start **open**, meaning no sign-in is required; attach an Identity (section 7.2) to protect it.

![A gateway's Endpoints tab, empty, explaining an endpoint maps to a published flow.](/img/manual/87-gateway-endpoints.png)

_FIG 6.13 — Endpoints. Each one needs a published Flow behind it._


![A gateway's Authentication tab showing No authentication (open) and an invitation to attach an identity.](/img/manual/88-gateway-auth.png)

_FIG 6.14 — Authentication, showing the open default._


:::danger Before you share a gateway address

A new gateway is **open**: anyone with the address can call it. Attach an Identity before it returns anything you would not publish.

:::
