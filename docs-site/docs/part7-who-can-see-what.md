---
id: part7-who-can-see-what
title: "PART 7: Who can see what"
sidebar_label: "Who can see what"
sidebar_position: 7
---

*Two different questions people often merge: who on your team can edit this, and who out in the world may use what you built.*

## 7.1 Sharing a Solution with colleagues

> `/solutions/<id>/people`

The **People** tab controls who may open a Solution and what they may do. Access covers everything the Solution owns (its apps, data, flows and agents), so sharing once is enough.

1.  Open the Solution and find **People** (it may be under **More**).
2.  Select **Share** and choose the person.
3.  Give them a level of access: view, edit, manage or share.
4.  Change or remove it later from the same list.

![A Solution's People tab, listing who can open it and what they can do, with a Share button.](/img/manual/90-solution-people.png)

_FIG 7.1 — People. A person's workspace role is the ceiling; you cannot grant more here than they already have._


:::warning A confusing message, explained

Someone without access sees **"not found"** rather than "no permission". That is intentional (it avoids revealing that the Solution exists), but it reads like a broken link. If a colleague reports a dead link, share it with them first.

:::

## 7.2 Identities: how your users sign in

> `/t/<workspace>/credentials/identities`

:::note Terms on this page

- **[Identity](/glossary#identity)** — How the people using your app sign in to it.

:::

An **Identity** is about the people who use what you built, not about you. It connects your app or gateway to a sign-in system so only the right people get in. Microsoft Entra, Okta, Auth0 and Cognito all work.

Create one here, then attach it to a Flex Gateway (section 6.4) or an app that needs protecting.

![The Identities list, empty.](/img/manual/91-identities-list.png)

_FIG 7.2 — Identities._


:::tip Get help with this one

Setting up an identity provider needs details from whoever runs sign-in at your organization. It is a short conversation with them, not guesswork.

:::

## 7.3 Connections: keys for other systems

> `/t/<workspace>/credentials/connections`

:::note Terms on this page

- **[Connection](/glossary#connection)** — A stored, encrypted key for an outside service.

:::

A **Connection** stores a password or key for an outside service once, so flows and agents can use it without anyone pasting a secret into a message.

![The Connections list, empty.](/img/manual/92-connections-list.png)

_FIG 7.3 — The Connections list._


1.  Open **Connections** and select **New**.
2.  Choose the kind of service and fill in the details it asks for.
3.  Save. The secret is encrypted and not shown again.
4.  Refer to the Connection by name from a Flow or Agent.

![The new connection screen with a choice of connection types and credential fields.](/img/manual/93-connection-new.png)

_FIG 7.4 — Creating a Connection._


:::danger Never do this

Do not type a password or key into the Builder chat, an agent's instructions, or a document. Those are stored as ordinary text and may be read by others. Secrets belong only in a Connection.

:::
