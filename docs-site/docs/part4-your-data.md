---
id: part4-your-data
title: "PART 4: Your data"
sidebar_label: "Your data"
sidebar_position: 4
---

*Four places data lives, and what each is for. This is the longest part; read the section you need and skip the rest.*

## 4.1 Fact Bases: your figures

> `/t/<workspace>/data-studio/fact-bases`

:::note Terms on this page

- **[Fact Base](/glossary#fact-base)** — Your records in tables, ready to be counted and filtered.
- **[Provisioned](/glossary#provisioned)** — The real storage for a Fact Base has been created; it can hold data.
- **[Append / Replace](/glossary#append--replace)** — Add rows to what is there, or clear first and then load.
- **[Query](/glossary#query)** — A saved question against a Fact Base, such as “revenue by region”.
- **[Parameter](/glossary#parameter)** — A value supplied when a query runs, so one question serves many cases.

:::

A **Fact Base** holds records (orders, tickets, staff, whatever you work with) arranged in tables so they can be counted, totaled and filtered. When your dashboard shows a number, that number came from a Fact Base.

![The Fact Bases list showing Regional Sales.](/img/manual/40-factbases-list.png)

_FIG 4.1 — The Fact Bases list._


#### Making one

1.  The easiest route is Part 1: attach a spreadsheet to your request and let flexday.ai build the Fact Base for you.
2.  To make one directly, open **Fact Bases** and select **New**, then give it a name and a file of example rows.
3.  flexday.ai reads the file and works out the columns and their types. Check its work on the **Tables** tab.
4.  Open **Provision Schema** and select **Recreate schema**. "Schema" just means the shape of your tables; this step builds the real storage from that shape, ready for rows.
5.  Open **Data Ingestion** and load your rows.

A **[Provisioned](/glossary#provisioned)** label by the title means step 4 is done and the Fact Base is ready to hold data.

![A Fact Base overview showing counters for tables, columns, primary keys and foreign keys, with a chart of columns per table.](/img/manual/41-factbase-overview.png)

_FIG 4.2 — Overview: how many tables and columns, and a Provisioned label showing it is ready._


#### Tables: checking the shape

The **Tables** tab lists each table and its columns. A **Verified** mark means a person has confirmed it looks right. Expand a table to read each column's meaning and correct anything flexday.ai misread: a date stored as plain text, for instance.

![The Tables tab showing one verified table, regional_sales, with six columns, and a Provision Schema button.](/img/manual/42-factbase-tables.png)

_FIG 4.3 — Tables. After changing anything here, return to **Provision Schema** so the change reaches the real storage._

- **1** Apply changes here


#### Diagram: the picture

The **ER Diagram** tab draws your tables, their columns and types, and how they relate. It is the fastest way to explain your data to someone else.

![The ER Diagram tab showing the regional_sales table with its six columns and their types.](/img/manual/43-factbase-diagram.png)

_FIG 4.4 — The diagram, with each column's type beside it._


#### Loading data

The **Data Ingestion** tab is how rows get in. Two choices matter:

| Choice | Meaning | Use when |
| --- | --- | --- |
| Append | Adds these rows to what is already there | Regular top-ups, such as this week's orders |
| Replace | Clears each table the file mentions first, then loads | You are reloading a full, corrected extract |
| Stored sample | Loads the file the Fact Base already points at | Re-running after a change to the tables |
| Upload new | Replaces the stored file with a new one | The source data has changed |

The page tells you how many rows are currently loaded, so you can confirm the result.

![The Data Ingestion tab with Append and Replace options, a data source choice, and a note that 122 rows are currently loaded.](/img/manual/45-factbase-ingestion.png)

_FIG 4.5 — Loading data. Note the row count: here, 122 rows loaded._


:::danger Careful

**Replace** deletes rows before loading. If the new file is wrong or incomplete, the old rows are gone. Prefer **Append** unless you are certain.

:::

#### Provision Schema: applying changes

Two separate actions live here, and the difference matters. **Recreate schema** applies changes you made to the tables. **Clear data** empties the rows and leaves everything else (tables, saved questions and connections) exactly as it was.

![The Provision Schema tab offering Recreate schema and Clear data, with a preview of the commands that will run.](/img/manual/46-factbase-provision.png)

_FIG 4.6 — Provision Schema. The preview below shows exactly what will run, if you want to check._


#### Queries: the questions your app asks

A **query** is a saved question, such as "revenue by region". Your dashboard runs these; giving them clear names and descriptions is what makes a Solution understandable to the next person.

A query can take a **[parameter](/glossary#parameter)**: a value supplied when it runs, so one saved question can answer "revenue for the West" and "revenue for the North". The list marks these, for example _array · 1 param_.

![The Queries tab listing four saved queries with their identifiers, types and descriptions.](/img/manual/44-factbase-queries.png)

_FIG 4.7 — Four saved queries. The _1 param_ marker shows one expects a value when it runs._

- **1** Add a saved question


#### Monitoring and Access

**Monitoring** shows how often each query runs, how quickly, and whether any failed. It is where to look when someone says the dashboard is slow.

**Access** controls which parts of the data different readers may see. The defaults are sensible; change them only with advice from whoever looks after data protection in your organization.

![The Monitoring tab with counters for query runs, average latency and failures, plus a per-query table.](/img/manual/47-factbase-monitoring.png)

_FIG 4.8 — Monitoring: runs, speed and failures per query._


![The Access tab listing reader and writer roles and the tables each may read.](/img/manual/48-factbase-roles.png)

_FIG 4.9 — Access. Reader and writer roles come ready-made._


## 4.2 Doc Bases: your documents

> `/t/<workspace>/data-studio/doc-bases`

:::note Terms on this page

- **[Doc Base](/glossary#doc-base)** — Documents searchable by meaning, with citations.
- **[Chunk](/glossary#chunk)** — A passage a document was split into so it can be searched.
- **[Audience](/glossary#audience)** — A tag on a file or document deciding who may read it.

:::

A **Doc Base** makes documents searchable _by meaning_. Ask "what is the discount limit?" and it finds the paragraph about approval thresholds even though your words and the document's words differ. It also reports which document an answer came from, so answers can be checked.

![The Doc Bases list showing Sales Playbook.](/img/manual/50-docbases-list.png)

_FIG 4.10 — The Doc Bases list._


1.  Open **Doc Bases** and select **New**, then name it after the body of knowledge it holds: "Sales Playbook", "HR Policies".
2.  On the **Files** tab, add documents with **Upload from your device**, or **Add a File Store** to index files that are already in flexday.ai.
3.  Wait for **indexing**, which is flexday.ai reading each document and making it searchable. It happens by itself; the Files tab shows how many are done and how many are still waiting.
4.  Test it on the **Search** tab before pointing an assistant at it.

![A Doc Base overview with counters for documents, chunks, storage and searches, and a configuration panel.](/img/manual/51-docbase-overview.png)

_FIG 4.11 — Overview. ["Chunks"](/glossary#chunk) are the passages a document was split into for searching._


![The Files tab showing a File Store with one document indexed and none pending.](/img/manual/52-docbase-files.png)

_FIG 4.12 — Files. The Indexed and Not-yet-indexed columns are where to check progress._


On the **Search** tab, **Mode** changes how matching works. Start with **Hybrid**; it suits almost everything.

| Mode | What it matches | Good for |
| --- | --- | --- |
| Hybrid | Both meaning and exact words | The sensible default |
| Semantic | Meaning only | Questions in your own words |
| Keyword | Exact words only | Product codes, names, references |

![The Search tab with Hybrid, Semantic and Keyword modes and a preset selector.](/img/manual/53-docbase-search.png)

_FIG 4.13 — Search. Test here before an assistant relies on it._


![The Settings tab showing the default search preset and default access for new documents.](/img/manual/54-docbase-settings.png)

_FIG 4.14 — Settings, including who new documents are readable by._


:::warning Watch this

New documents are readable by **everyone** unless you set an [audience](/glossary#audience) on them. If a Doc Base will hold anything sensitive, set the default access in **Settings** before adding documents, not after.

:::

## 4.3 File Stores: where files live

> `/t/<workspace>/data-studio/file-stores`

:::note Terms on this page

- **[File Store](/glossary#file-store)** — Where uploaded files live, and who may read them.

:::

A **File Store** is the actual home of uploaded files, and the boundary for who may read them. That is why it is separate from a Doc Base: "public uploads" and "internal documents" should not share one set of rules.

![The File Stores list.](/img/manual/55-filestores-list.png)

_FIG 4.15 — The File Stores list. A Fact Base gets its own store automatically._


Every file keeps its previous versions, so replacing one is safe and reversible. The Files tab shows size, version, who may read it, and when it changed.

![A File Store's Files tab listing one file with its size, version, access and modified date.](/img/manual/56-filestore-files.png)

_FIG 4.16 — Files, with folders, upload, and a version for each file._


![A File Store's Access tab showing default audiences for new uploads.](/img/manual/57-filestore-access.png)

_FIG 4.17 — Access. Set this before uploading, for the same reason as a Doc Base._


:::tip If a file will not delete

flexday.ai refuses to delete a file something still uses, and names what is using it. That is deliberate, not a fault; remove the reference first, then delete the file.

:::

## 4.4 Data Portraits: what your data means

> `/t/<workspace>/data-studio/data-portraits`

:::note Terms on this page

- **[Data Portrait](/glossary#data-portrait)** — The agreed meaning of your data: concepts, metrics, assumptions.

:::

A **Data Portrait** records the meaning behind a Fact Base: what a "customer" is, how "revenue" is calculated, which assumptions are being made. It exists so that two people asking the same question get the same answer.

![The Data Portraits list showing Regional Sales portrait.](/img/manual/58-portraits-list.png)

_FIG 4.18 — The Data Portraits list._


flexday.ai drafts a portrait by examining your data, then you correct it. The order is fixed: it studies the data (**Profile**), and from that builds the vocabulary (**Domain**, **Concepts**, **Metrics**, **Lifecycles**, **Assumptions**).

![A Data Portrait's Domain tab showing a message that the data profile has not completed yet, with a link to the data profile.](/img/manual/60-portrait-ontology.png)

_FIG 4.19 — The vocabulary tabs stay locked until the profile finishes, and say so plainly with a link to the right place._


:::warning Treat it as a draft

A portrait is flexday.ai's best reading of your data, not the truth. Review the metrics especially; an agreed definition of "revenue" is worth more than a fast one.

:::
