# POC runbook — what's done, and what's left

Everything that can be done from a terminal is done. The three remaining steps are all browser
actions on accounts only you can sign into.

---

## ✅ Done

| | |
|---|---|
| Docusaurus site scaffolded in a `docs-site/` subfolder | mirrors the real monorepo shape |
| Five demo pages installed | fictional content, all Markdown features covered |
| Config pointed at `smanash/test` | `editUrl` → GitHub's web editor on `develop` |
| Strict link checking enabled | `onBrokenLinks` + `onBrokenAnchors` both `throw` |
| Production build passing | zero broken links or anchors |
| Pushed to GitHub | `main` and `develop` both live |
| Local preview running | http://localhost:3100 |

---

## ☐ Step 1 — Protect `develop` (2 minutes)

**This is the step the manager demo depends on.** Without it, Act 3 has nothing to show.

1. Go to **https://github.com/smanash/test/settings/rules**
2. **New ruleset → New branch ruleset**
3. Name it `protect-develop`
4. **Enforcement status: Active**
5. Target branches → **Add target** → **Include by pattern** → type `develop`
6. Tick ✅ **Require a pull request before merging**
7. Set **Required approvals** to **`0`**
8. **Create**

> ### Why zero approvals
> On a solo repository, requiring one approval means *you* cannot approve your own pull request
> and the live demo dead-ends with nothing to merge. Requiring a **pull request** still
> demonstrates the gate — which is the whole point.
>
> In the meeting, say: *"production additionally requires one approval from an engineer."*
> That's true of the real setup.

**Verify it works** — this should be REFUSED:

```bash
cd dhub-poc
git checkout develop
echo "test" >> README.md
git commit -am "should be refused"
git push            # ← expect: "Changes must be made through a pull request"
git reset --hard origin/develop   # undo
```

If that push succeeds, the ruleset isn't active and Act 3 of your demo is not true.

---

## ☐ Step 2 — Connect Dhub (20 minutes)

1. **https://dhub.dev** → sign up with your **personal** GitHub account
2. **Try the free Hobby tier first** — it covers personal projects on public repos, which is
   exactly what this is. If it refuses, start the 14-day trial and note the end date.
3. Authorize the GitHub App — scope it to **`smanash/test` only**, not all repositories.
   (Get into this habit: it's exactly what you'll ask the org owner to do for the real repo.)
4. Find `test` → **Import**
5. Fill in the import dialog:

| Field | Value |
|---|---|
| **Branch** | `develop` |
| **This is a Docusaurus project** | ✅ ticked |
| **Project directory** | `docs-site` |
| **Image directory** | `docs-site/static/img` |
| **Callout format** | Docusaurus-style |

> ### The one that matters
> **Project directory = `docs-site`.** Leave it blank and Dhub looks at the repository root,
> finds a monorepo instead of a docs site, and the import looks broken. This is the same setting
> the real repo will need — which is exactly why the POC was built with a subfolder.

---

## ☐ Step 3 — The round-trip test (10 minutes)

**Do this before inviting anyone.** Open `working-with-data` in Dhub — it's the page that
exercises the most features — and confirm:

| | Check | Where to look |
|---|---|---|
| 1 | `:::tip` renders as a **styled box**, not literal `:::tip` text | Section 2.4, bottom |
| 2 | The three tables render as tables | Sections 2.1, 2.4 |
| 3 | Images appear | Section 2.3 |
| 4 | JSON and SQL code blocks keep syntax highlighting | Sections 2.2, 2.3 |
| 5 | **Edit → push as PR → pull back → nothing silently rewritten** | The whole page |

**Step 5 is the one people skip, and the only one that matters.** A CMS that *renders* correctly
but *rewrites on save* will reformat the entire manual on the first edit — and you find out in a
pull request with hundreds of changed lines.

To check it properly: after pulling the change back, run `git diff` locally and confirm the only
changes are the ones the writer actually made.

---

## ☐ Step 4 — Invite the writer (10 minutes)

1. Use an email **genuinely not attached to any GitHub account** — `yourname+writer@gmail.com`
   works. Better: borrow a real colleague from the writing team for 15 minutes; their reaction
   is itself evidence you can quote.
2. Dhub → workspace settings → **invite by email**
3. Have them edit a page and click **Create pull request**
4. Go to https://github.com/smanash/test/pulls — there it is, from someone with no GitHub account
5. **Reset it** (close or merge) so the live demo starts clean

**Write down what you find:** can a Dhub member be restricted to "propose only" rather than
"push directly"? We couldn't confirm this from the public docs, and if no such role exists then
GitHub's branch protection is the *only* thing preventing a direct push — worth saying plainly
rather than discovering later.

---

## Demo-day checklist

Four tabs, pre-loaded, before anyone walks in:

| Tab | Contents |
|---|---|
| 1 | Dhub editor, on a demo page, signed in **as the writer** |
| 2 | https://github.com/smanash/test/pulls |
| 3 | https://github.com/smanash/test/settings/rules |
| 4 | http://localhost:3100 (run `npm start` in `docs-site/` first) |

Then follow the three-act script in **`flexday-dhub-poc-guide.pdf`**, Section 6.

Also: notifications silenced, screen-share tested, and a **screen recording of the working loop**
as a fallback. A tool failing live isn't evidence the tool is bad, but it's very hard to recover
the room afterwards — and a two-minute recording costs nothing to make.
