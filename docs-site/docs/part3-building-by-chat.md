---
id: part3-building-by-chat
title: "PART 3: Building by chat"
sidebar_label: "Building by chat"
sidebar_position: 3
---

*The Builder is where you will spend most of your time, and it works unlike most software. This part is worth reading slowly.*

## 3.1 The Builder screen

> `/solutions/<id>/builder`

The Builder has two halves. On the **left** you talk to flexday.ai. On the **right** you see what it has built: a tab for the app itself, and a tab for each set of data connected to it.

Under the chat is the **build log**. It reports each step as it happens, so a long build never looks like a frozen screen.

![The Builder: a chat panel on the left with a message box and a build log beneath it; on the right, tabs for Sales Dashboard and Regional Sales showing a live preview of the app.](/img/manual/30-builder.png)

_FIG 3.1 — The Builder. Chat on the left, what it built on the right. The **Deployed** button at the top right publishes the app for your users._

- **1** Ask for a change here
- **2** Publish to your users


| Control | What it does |
| --- | --- |
| Message box | Where you ask for a change. Enter sends it. |
| Paperclip | Attach a spreadsheet, document or image to build from. |
| Model | Which AI model to use. Leave it on **Default model** unless told otherwise. |
| New chat | Starts a fresh conversation. Your app is untouched. |
| Tabs (right) | One per app and per connected data set. The **+** opens another. |
| Deployed | Publishes the current app so your users see it. |

## 3.2 Asking for what you actually want

This is the highest-value page in the manual. The difference between a vague request and a good one is the difference between an app you rebuild three times and one that is nearly right first time.

A good request answers three questions: **who uses this**, **what do they need to see**, and **what do they do next**.

| Instead of | Ask for | Why it is better |
| --- | --- | --- |
| "A sales dashboard" | "A dashboard for regional managers showing revenue by region this month, the top ten products, and each rep against their target" | Names the audience and the exact figures |
| "Make it nicer" | "Move the total to the top as three large numbers, and put the table underneath" | Describes the layout instead of a feeling |
| "Add a chart" | "Add a bar chart of revenue by month for the last twelve months, under the totals" | Says which chart, of what, and where |
| "It's wrong" | "The West region total should count only completed orders, not canceled ones" | States the rule, so the fix is unambiguous |
| "A form for leave" | "A form where staff request leave with dates and a reason, their manager approves it, and both see the remaining balance" | Describes the whole task, not one screen |

:::tip Tip

Ask for one change at a time. Five requests in one message tend to produce four of them.

:::

## 3.3 Building from your own data

Attach a file with the paperclip and flexday.ai builds around what is actually in it, rather than inventing example figures.

-   **Spreadsheets and data files** normally become a **Fact Base**: figures you can [query](/glossary#query) (section 4.1).
-   **Documents** normally become a **Doc Base**: text an assistant can search and quote (section 4.2).

You do not have to decide which; flexday.ai chooses and tells you in the chat. Afterwards the new item appears in the Solution's Resources panel (FIG 2.2).

:::warning Before you attach

Attaching a file makes its contents available to flexday.ai to build from. Use test data rather than real customer records while you are learning, and check with whoever owns the data if you are unsure.

:::

## 3.4 While it is working

flexday.ai narrates as it goes: reading your file, creating the data, writing the page. Builds take from a few seconds to a few minutes.

-   **To stop it**: select **Stop** beside the message box. What was finished stays.
-   **To correct it mid-build**: just send another message. It is queued and picked up, not lost.
-   **To try again**: each message can be copied or re-sent from the chat.
-   **If it asks you a question**: the build pauses and waits. Answer in the chat and it carries on.

:::warning If nothing happens at all

If every build fails immediately, the instance is probably missing its AI key. That is a setup task for whoever administers flexday.ai, not something you can fix from these screens.

:::

## 3.5 What changed, and when

> `/solutions/<id>/history`

The **History** tab records every build and change to the Solution. Use it to see what a colleague altered, or to find the point where something stopped behaving. History is the record of _changes_; Versions (section 2.3) is the record of _publishes_.

![A Solution's History tab.](/img/manual/31-solution-history.png)

_FIG 3.2 — History for a Solution. Empty here because this project has not been built by chat yet._

