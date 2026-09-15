---
id: part2-how-it-is-organized
title: "PART 2: How it is organized"
sidebar_label: "How it is organized"
sidebar_position: 2
---

*The handful of words flexday.ai uses for its own parts. Read this once and the rest of the manual reads easily.*

## 2.1 Solutions hold everything else

> `/t/<workspace>/solutions`

:::note Terms on this page

- **[Solution](/glossary#solution)** — One project, holding its app, its data and its automation.

:::

A **Solution** is one project. It holds the app people open, the data that app reads, and any automation behind it. When you built something in section 1.4, a Solution is what flexday.ai created.

Think of it as a folder for one piece of work. "Regional Sales Review" is a Solution; inside it are a dashboard, a set of sales figures, a playbook document and a weekly job.

![The Solutions list showing three solutions: Regional Sales Review, Support Desk and Onboarding Tracker.](/img/manual/20-solutions-list.png)

_FIG 2.1 — The Solutions list. Select **New Solution** to start one without going through Home._


Opening a Solution shows its **Overview**: a live preview of the app on the left, and a list of everything the Solution owns on the right. That right-hand panel is the quickest way to see what a project contains.

![A Solution overview: counters for AI builds, tokens, build time and last built; a live preview of the app; and a Resources panel listing Launchpads, Fact Bases, Doc Bases, File Stores and Flows.](/img/manual/21-solution-overview.png)

_FIG 2.2 — A Solution's Overview. The Resources panel on the right lists everything it owns, with a count and a link to manage each kind._

- **1** The Solution’s tabs


Across the top right are the Solution's tabs. Only **Overview**, **Builder** and **Analytics** are always shown; the rest live under **More**. If you cannot find a tab this manual mentions, look under More.

## 2.2 The building blocks

Inside a Solution you will meet these eleven things. You do not need to remember them now; this table is here to come back to.

| Block | In plain words | Part |
| --- | --- | --- |
| Launchpad | The app your users open in a browser | 5 |
| Bot | The same idea, but inside a chat app such as Microsoft Teams | 5 |
| Fact Base | Your figures and records, arranged so they can be queried | 4 |
| Doc Base | Your documents, made searchable by meaning rather than exact words | 4 |
| File Store | Where the actual files sit, with rules about who may read them | 4 |
| Data Portrait | What your data _means_: the definitions everyone agrees on | 4 |
| Flow | Steps that run in the order you set, on a trigger or a schedule | 6 |
| Agent | An assistant that works out its own steps, inside limits you set | 6 |
| Flex Gateway | A way for another system to ask your Solution for something | 6 |
| [Identity](/glossary#identity) | How the people who use your app sign in to it | 7 |
| Connection | A saved password or key for an outside service | 7 |

## 2.3 Draft, publish, and going back

:::note Terms on this page

- **[Draft / Publish](/glossary#draft--publish)** — Your private copy, and the version everyone else uses.
- **[Version](/glossary#version)** — A kept record of one publish, so you can go back.

:::

Almost everything in flexday.ai works the same way, and knowing this once saves learning it eleven times:

-   You edit a **draft**. Only you see it.
-   You **publish**, and the draft becomes the version everyone else uses.
-   Each publish is kept as a **version**, so you can look back or return to one.

A **Draft** or **Published** label near the title tells you which state you are looking at. The **[Versions](/glossary#version)** tab lists what has been published; **History** records what changed and when.

:::warning Important

Other people and other parts of flexday.ai read the **published** version, never your draft. If a change you made has not appeared for a colleague, the usual reason is that it has not been published yet.

:::

![A Versions tab listing published versions of a Fact Base.](/img/manual/49-factbase-versions.png)

_FIG 2.3 — A Versions tab. Every resource that can be published has one._


## 2.4 Finding something again

> `/t/<workspace>/resources`

**Resources** lists everything created in the workspace, newest first, with filters by kind. When you know you made something but not where it lives, start here, not with the search box, which only offers pages (see the warning in section 1.3).

![The Resources page listing everything in the workspace, with filters for Fact Base, Data Portrait, Solution and Launchpad.](/img/manual/22-resources.png)

_FIG 2.4 — Resources: everything in the workspace, filterable by kind._

