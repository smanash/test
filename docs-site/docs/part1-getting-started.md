---
id: part1-getting-started
title: "PART 1: Getting started"
sidebar_label: "Getting started"
sidebar_position: 1
---

*From opening flexday.ai to having your first working app.*

## 1.1 What flexday.ai does .

flexday.ai builds working software from a sentence. You type what you need ("a dashboard showing revenue by region") and it produces a real page your colleagues can open in a browser, along with somewhere to keep the data that page read.

You then keep talking to it. Ask for a chart to be added, a column removed, a filter put at the top, and it changes the app. Nothing is thrown away and started again; you refine what is already there.

Beyond pages, flexday.ai can answer questions about your documents, run jobs on a schedule, and put an assistant into Microsoft Teams. Those come later in this manual. The important thing to hold on to is that everything starts with a sentence.

![The flexday.ai home screen. A menu runs down the left. In the center, the heading What would you like to build sits above a large box for typing, with template cards below.](/img/manual/01-home-full.png)

_FIG 1.1 — The home screen. One box to type in, and everything else is a way of getting back to it._

- **1** The box you type in
- **2** Send


## 1.2 Opening flexday.ai

> `/t/<workspace>`

:::note Terms on this page

- **[Workspace](/glossary#workspace)** — Your organization’s area of flexday.ai: the short name after `/t/` in every address.

:::

Your organization has its own area of flexday.ai, called a **[workspace](/glossary#workspace)**. Its name appears in every address just after `/t/`, and again at the very bottom of the left-hand menu, so you can always check which one you are in.

1.  Open the link your administrator sent you. It will look like `https://…/t/your-workspace`.
2.  Sign in if you are asked to. flexday.ai uses your normal work account, so there is no separate password to remember.
3.  You land on the home screen shown in **FIG 1.1**. You are ready to build.

If you do not know your workspace name, open `/find-workspace` and flexday.ai will help you find it. If you were sent an invitation, following that link joins you to the workspace and brings you straight here.

![The Find your workspace screen.](/img/manual/08-find-workspace.png)

_FIG 1.2 — Where to go if you do not know your workspace address._


![The home screen with the workspace menu open at the bottom of the left-hand menu.](/img/manual/07-workspace-menu.png)

_FIG 1.3 — Your workspace name sits at the foot of the menu. Select it to switch workspace or sign out._


## 1.3 A tour of the screen

Two things stay on screen wherever you go: the **menu** down the left, and the **bar** across the top. Learn these two and you will never be lost.

#### The menu on the left

The top five items are places you visit often. Below them are four labeled groups. Those groups are the shape of this manual: each one gets its own part.

| Group | What is in it | Explained in |
| --- | --- | --- |
| Top five | Home, Templates, Resources, [Solutions](/glossary#solution), Usage | Parts 1, 2 and 8 |
| Apps | [Launchpads](/glossary#launchpad), [Bots](/glossary#bot): the things your users open | Part 5 |
| Executors | [Flows](/glossary#flow), [Agents](/glossary#agent), [Flex Gateways](/glossary#flex-gateway): things that do work for you | Part 6 |
| Credentials | Identities, [Connections](/glossary#connection): sign-in and passwords for other systems | Part 7 |
| Data | [Fact Bases](/glossary#fact-base), [Doc Bases](/glossary#doc-base), [File Stores](/glossary#file-store), [Data Portraits](/glossary#data-portrait) | Part 4 |

Read top to bottom, the menu falls into four bands. Each one is shown below at readable size rather than as a single tall strip.

![The top of the left-hand menu: Home, Templates, Resources, Solutions and Usage.](/img/manual/02a-sidebar-top.png)

_FIG 1.4 — The five everyday items, at the top and always visible._


![The Apps group with Launchpads and Bots, and the Executors group with Flows, Agents and Flex Gateways.](/img/manual/02b-sidebar-apps-executors.png)

_FIG 1.5 — **Apps**: what your users open. **Executors**: things that do work for you._


![The Credentials group with Identities and Connections.](/img/manual/02c-sidebar-credentials.png)

_FIG 1.6 — **Credentials**: how people sign in, and keys for other systems._


![The Data group with Fact Bases, Doc Bases, File Stores and Data Portraits.](/img/manual/02d-sidebar-data.png)

_FIG 1.7 — **Data**: where everything your apps read is kept._


![The top bar: a search box in the middle, help and account buttons on the right.](/img/manual/03-topbar.png)

_FIG 1.8 — The top bar. Search in the middle; help and your account on the right._


#### The bar across the top

The box in the middle jumps you to a page; press `Ctrl` + `K` (or `⌘` + `K` on a Mac) from anywhere to open it. On the right, the question mark opens help, and the circle is your account.

:::danger Read this before you use search

The search box takes you to **pages**, not to your own work. Typing _fact_ offers "Fact Bases" and "Create a Fact Base"; typing the name of one of your Solutions finds nothing. Its wording currently suggests otherwise, so this surprises people. To find something you made, open the list it lives in (Solutions, Fact Bases, and so on) or use **Resources** (section 2.4).

:::

![The search box with the word fact typed in, showing a Go To result for Fact Bases and a Create result for Create a Fact Base.](/img/manual/04-search-destinations.png)

_FIG 1.9 — What search really does: it offers places to go and things to create._


![The home screen with the help menu open from the top bar.](/img/manual/06-help-menu.png)

_FIG 1.10 — The help menu, from the question mark in the top bar._


## 1.4 Build your first app

> `/t/<workspace>`

This is the whole product in five minutes. You will type one sentence and get a working app.

1.  Go to **Home** using the top item in the left-hand menu.
2.  Type what you want into the big box. Be specific about who will use it and what they need to see. There is a good and bad example below.
3.  If you have a spreadsheet or document to build from, select the **paperclip** and choose the file. This is optional.
4.  Select the **arrow** at the right of the box. The arrow fills with color once there is something to send.
5.  flexday.ai names your new project, starts building, and moves you to the Builder screen, where you can watch it work (Part 3).

![The home box containing a typed request for a sales dashboard. The border is highlighted and the send arrow is now solid orange.](/img/manual/10-composer-filled.png)

_FIG 1.11 — A request ready to send. The box highlights and the arrow fills in; that is your cue that flexday.ai has something to work with._

- **1** Send, now filled in
- **2** Attach a file


#### Not sure what to type?

Under the box are three **quick prompts**. Selecting one writes a fuller request for you, which you can then edit. It is the fastest way to see what a good request looks like.

![The Leave management quick prompt selected and outlined, with the box now filled with a longer leave-management request.](/img/manual/11-quickprompt-filled.png)

_FIG 1.12 — Selecting "Leave management" wrote the request. Every word is still yours to change._


:::tip Tip

flexday.ai chooses a name for your project. You can rename it later, so do not worry about it now.

:::

## 1.5 Start from a template

> `/t/<workspace>/templates`

Templates are ready-made requests for common jobs: a sales dashboard, a support queue, an approval form. They are _starting sentences_, not fixed products: choosing one writes the request into the box, and you edit it before building.

1.  Select **Templates** in the left-hand menu. Fifty are available, twelve to a page.
2.  Narrow the list: select a category such as **Operations**, or type in **Search templates**.
3.  Select a template. You return to Home with the request already written.
4.  Edit the wording to match your situation, then send it as in section 1.4.

![The Templates gallery: fifty templates shown as cards with category filters, a search box and page controls.](/img/manual/12-templates-gallery.png)

_FIG 1.13 — The template gallery._

- **1** Filter by category
- **2** Search templates


![The gallery filtered to the Operations category, showing five results.](/img/manual/13-templates-filtered.png)

_FIG 1.14 — Filtering to Operations: fifty become five._


![The gallery with the word sales typed into the template search, showing six results.](/img/manual/14-templates-search.png)

_FIG 1.15 — Searching for "sales": fifty become six._


![Home after choosing the Sales dashboard template. The box is filled with a longer request and carries a removable Sales dashboard tag; the chosen card is outlined.](/img/manual/15-template-prefilled.png)

_FIG 1.16 — After choosing a template. The small tag shows which template you used; remove it with its ✕ if you change direction._

