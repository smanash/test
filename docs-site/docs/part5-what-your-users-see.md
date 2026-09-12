---
id: part5-what-your-users-see
title: "PART 5: What your users see"
sidebar_label: "What your users see"
sidebar_position: 5
---

*Everything so far has been your view. This part is about the thing you hand to other people.*

## 5.1 Launchpads: the app itself

> `/t/<workspace>/apps/launchpads`

:::note Terms on this page

- **[Launchpad](/glossary#launchpad)** — The app your users open in a browser.

:::

A **Launchpad** is the app flexday.ai built: a real page with its own address that you can send to a colleague. A Solution can have more than one.

There are two versions of every Launchpad: the **draft** you are working on and the **deployed** one your users see. The Overview gives you a link to each.

![The Launchpads list showing Sales Dashboard.](/img/manual/65-launchpads-list.png)

_FIG 5.1 — The Launchpads list._


![A Launchpad overview showing status Live, file count, connected fact bases and links to the deployed and draft addresses.](/img/manual/66-launchpad-overview.png)

_FIG 5.2 — Overview. **Deployed URL** is the link to share; **Draft URL** is your preview._


#### Connecting it to your data

A Launchpad can only read Fact Bases that are explicitly connected to it. This is the single most common cause of an empty chart.

1.  Open the Launchpad and go to its **Queries** tab.
2.  Select **Link a Fact Base** and choose one belonging to this Solution.
3.  The saved queries from that Fact Base become available to the app.

:::danger If a chart or table is empty

Check three things in order: is a Fact Base linked here; is that Fact Base **Provisioned**; and has data been loaded into it (FIG 4.5, which shows the row count).

:::

![A Launchpad's Queries tab with a linked fact base and its available queries.](/img/manual/68-launchpad-queries.png)

_FIG 5.3 — Queries, after linking a Fact Base._


![A Launchpad's Files tab listing the files that make up the app.](/img/manual/69-launchpad-files.png)

_FIG 5.4 — Files: the pieces of the app. You rarely need this; ask for changes in chat instead._


The Launchpad's own **Builder** tab edits just this app, with the same preview and **Deployed** control as the Solution Builder in Part 3.

![A Launchpad's Builder tab showing Files and Application views with a Deployed control.](/img/manual/67-launchpad-builder.png)

_FIG 5.5 — The Launchpad's own Builder._


## 5.2 Bots: your assistant in a chat app

> `/t/<workspace>/apps/bots`

:::note Terms on this page

- **[Bot](/glossary#bot)** — An assistant answering inside Microsoft Teams.

:::

A **Bot** puts an assistant where your colleagues already work. Instead of opening a page, they message it in **Microsoft Teams** and it answers with the same knowledge and the same limits as the Agent behind it. Slack, WhatsApp, Telegram and SMS are listed as coming later.

1.  First build and **publish** an Agent (section 6.3). A Bot needs a published Agent; a draft will not do.
2.  Open **Bots** and select **New bot**.
3.  Choose **Microsoft Teams** and the Agent it should use.
4.  Follow the setup steps. Installing into Teams usually needs your Teams administrator.
5.  Message it in Teams to test, then watch **Conversations** to see real use.

![The Bots list, empty, explaining that a published Agent can be put into Microsoft Teams.](/img/manual/70-bots-list.png)

_FIG 5.6 — The Bots list before any bot exists._


![The Create a bot screen showing Microsoft Teams available and Slack, WhatsApp, Telegram and SMS marked coming soon.](/img/manual/71-bot-new.png)

_FIG 5.7 — Creating a bot. Only Teams can be chosen today._

