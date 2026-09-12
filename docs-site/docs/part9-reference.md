---
id: part9-reference
title: "PART 9: Reference"
sidebar_label: "Reference"
sidebar_position: 9
---

*What to do when something looks wrong, and where to get help. Every word is explained where it is first used, in the section it belongs to.*

## 9.1 When something goes wrong

Find the symptom in the left column. These are the causes that actually come up.

| What you see | Usually means | What to do |
| --- | --- | --- |
| A chart or table is empty | No Fact Base linked to the Launchpad, or no data loaded | Link it on the Queries tab (section 5.1), then check the row count (FIG 4.5) |
| Searching your Solution's name finds nothing | The search box only offers pages, not your content | Use the Solutions list, or Resources (section 2.4) |
| The build seems stuck | A long step, or it is waiting for an answer from you | Read the last line of the build log and look for a question |
| Every build fails at once | The instance has no AI key configured | Contact whoever administers flexday.ai |
| "Not found" on a link a colleague sent | It has not been shared with you | Ask them to add you on the People tab (section 7.1) |
| A change is not visible to others | It is still a draft | Publish it (section 2.3) |
| Loading data does nothing | The Fact Base is not provisioned | Recreate the schema first (FIG 4.6) |
| An agent answers vaguely | No Knowledge attached | Attach a Doc Base or Fact Base (FIG 6.6) |
| An agent will not use a document | Indexing unfinished, or audiences exclude the reader | Check the Files tab counts and the document's audiences (FIG 4.12) |
| A file will not delete | Something still refers to it | Remove that reference first; the message names it (section 4.3) |
| Your data-portrait vocabulary is locked | The data profile has not finished | Complete the profile first (FIG 4.19) |

## 9.2 Getting help

-   The **question mark** in the top bar carries in-product help and links (FIG 1.10).
-   Your **workspace owner** (Part 8) handles members, cost and AI model choices.
-   For a problem only Flexday can see, turn on **Support access** in Settings (section 8.4). Sessions are recorded, time-limited and notified to owners.
