---
sidebar_position: 3
title: Working with data
---

# Working with data

*Where your figures live, how they get in, and how you ask questions of them.*

:::note Terms on this page
- **[Dataset](/docs/glossary#dataset)** — your records in tables, ready to be counted and filtered.
- **[Connection](/docs/glossary#connection)** — a stored, encrypted key for an outside service.
- **[Saved question](/docs/glossary#saved-question)** — a question you asked once and kept.
:::

## 2.1 Datasets hold your figures

A **dataset** is a named collection of tables. Each one belongs to exactly one workspace, and a
report may read from any dataset it has been connected to.

To create one:

1. Open **Data → Datasets** and choose **New dataset**.
2. Give it a name that says what it holds — *Regional sales*, not *Data 2*.
3. Upload a sample file, or connect to a live source.
4. Review the structure Northwind infers, then choose **Provision**.

| Column | Type | What it means |
| --- | --- | --- |
| `order_id` | text | The unique reference printed on the invoice |
| `region` | text | One of: North, South, East, West |
| `amount` | number | Order total, excluding tax, in GBP |
| `ordered_at` | date | When the customer placed the order |

:::warning Before you upload
Uploading a file makes its contents available to Northwind. Use test data rather than real
customer records while you are learning, and check with whoever owns the data if you are unsure.
:::

## 2.2 Loading more rows

Once a dataset exists, you can add to it without starting again:

- **Append** adds rows to what is already there.
- **Replace** clears the table first, then loads.

```json
{
  "orders": [
    { "order_id": "A-1042", "region": "North", "amount": 1290.00, "ordered_at": "2026-03-04" },
    { "order_id": "A-1043", "region": "South", "amount": 845.50, "ordered_at": "2026-03-05" }
  ]
}
```

:::danger
**Replace** empties the table before loading. If the file you upload is missing rows the table
currently has, those rows are gone. Check the row count on the preview screen before confirming.
:::

## 2.3 Saved questions

A **saved question** is a question you asked once and want to ask again — *"revenue by region
this quarter"*. Saving it means a report can use it, and you can hand it to a colleague without
explaining how you built it.

Questions can take a **parameter**, so one question serves many cases:

```sql
SELECT region, SUM(amount) AS revenue
FROM orders
WHERE ordered_at >= $1
GROUP BY region
ORDER BY revenue DESC
```

Here `$1` is supplied when the question runs, so the same question answers "this quarter" and
"last quarter" without being rewritten.

![A saved question showing revenue grouped by region](/img/undraw_docusaurus_react.svg)

*FIG 2.1 — A saved question and its result. The parameter box sits above the results table.*

## 2.4 Connections

A **connection** stores the credentials for an outside service — a database, a cloud drive, an
email relay. The password or key is encrypted when you save it and is never shown again.

| Kind | Used for | What you supply |
| --- | --- | --- |
| Database | Reading live tables | Host, port, database name, user, password |
| API key | Calling a partner service | The key, and the header name it goes in |
| SMTP | Sending scheduled emails | Server, port, username, password |

:::tip
Name a connection after the *system* it reaches, not the person who created it —
*Warehouse (read-only)*, not *Priya's connection*.
:::
