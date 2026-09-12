---
id: part8-managing-the-workspace
title: "PART 8: Managing the workspace"
sidebar_label: "Managing the workspace"
sidebar_position: 8
---

*For the one or two people who look after the workspace. Everyone else can skip this part.*

## 8.1 Members

> `/t/<workspace>/members`

**Members** is who belongs to the workspace at all. It is a different question from who can open a particular Solution (section 7.1): membership is the front door, sharing decides which rooms.

1.  Select **Invite member** and enter their work email address.
2.  Give them a role. A member's role is the most they can ever be granted on any Solution.
3.  They appear as pending until they accept.

![The Members page listing one owner and a note that pending invitations appear below.](/img/manual/95-members.png)

_FIG 8.1 — Members, with pending invitations listed underneath._


## 8.2 Usage and cost

> `/t/<workspace>/usage`

**Usage** shows what the workspace's AI activity has cost, broken down by Solution, resource and service, over a period you choose. It can be exported as a spreadsheet.

The page counts **tokens** as well as money. A token is roughly a word; it is the unit AI work is billed in, so a long conversation costs more than a short one. You do not need to manage tokens; the figure is there to explain where the cost came from.

Individual resources have their own Usage tab; this page is the total.

![The Usage and cost page with day, week, month and custom periods, an Export CSV button, and totals for cost, tokens and model calls.](/img/manual/96-workspace-usage.png)

_FIG 8.2 — Usage and cost. Zero here because no AI builds have been run in this workspace._


## 8.3 AI models

> `/t/<workspace>/ai-models`

This page shows which AI model handles each use case: running an agent, scoring tests, and so on. Each row can be left on the platform default or given an override.

:::tip Leave it alone unless advised

The defaults are chosen to balance quality against cost. Changing them affects every agent and build in the workspace.

:::

![The AI models page listing use cases with an override column and the effective model for each.](/img/manual/97-ai-models.png)

_FIG 8.3 — AI models, one row per use case, with the model actually in effect._


## 8.4 Settings and support access

> `/t/<workspace>/settings`

The setting that matters most here is **Support access**. When it is on, Flexday staff can open a recorded, time-limited session in your workspace to help with a problem (read-only unless you agree otherwise), and the owners are told each time. When it is off, new sessions are refused and any live one ends at once.

![The workspace Settings page describing support access and offering to disable it.](/img/manual/98-settings.png)

_FIG 8.4 — Settings. Turn support access off if your policy requires it, and on when you need help._

