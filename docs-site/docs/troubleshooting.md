---
sidebar_position: 4
title: Troubleshooting
---

# Troubleshooting

*What to do when something looks wrong, and where to get help.*

## 3.1 When something goes wrong

Find the symptom in the left column. These are the causes that actually come up.

| What you see | Usually means | What to do |
| --- | --- | --- |
| A chart or table is empty | No dataset linked to the report, or no data loaded | Link it on the Data tab, then check the row count |
| Searching your report's name finds nothing | The search box only offers pages, not your content | Use the Reports list instead |
| The build seems stuck | A long step, or it is waiting for an answer from you | Read the last line of the build log and look for a question |
| "Not found" on a link a colleague sent | It has not been shared with you | Ask them to add you on the People tab |
| A change is not visible to others | It is still a draft | Publish it |
| Loading data does nothing | The dataset is not provisioned | Provision the schema first |
| A file will not delete | Something still refers to it | Remove that reference first; the message names it |

## 3.2 Reading the build log

Every build writes a line per step. A line beginning with a warning triangle is not always a
failure — it often means Northwind chose a different approach and is telling you so.

```text
✓ Created dataset "Regional sales"
✓ Provisioned 3 tables (orders, customers, regions)
⚠ Column "discount_pct" was empty in every sample row — skipped
✓ Saved question "revenue by region"
✓ Built report page
```

:::note
The log is kept with the report, so you can read it again later. Open the report and choose
**History**.
:::

## 3.3 Getting help

- The **question mark** in the top bar carries in-product help and links.
- Your **workspace owner** handles members, cost and access.
- For a problem only the Northwind team can see, turn on **Support access** in Settings.
  Sessions are recorded, time-limited, and notified to owners.

:::danger When to stop and ask
If a report is showing figures you believe are wrong — not missing, but *wrong* — stop sharing it
and raise it immediately. A number that looks plausible and is incorrect does more damage than an
empty chart.
:::
