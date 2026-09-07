# Build notes and known gaps

A record of what was built, what it rests on, and where it is weak. Written
to be picked apart — by a reviewer, human or otherwise. If you are reviewing
this, skip to **Known gaps** and **What to attack first**; the sections
before them are context you need to judge the ones after.

Status: unsolicited pitch. The client has not seen it, has not approved a
word of the copy, and has not been asked for anything.

---

## 1. What this is

`index.html` is a complete single-file website for Chad's Chimney LLC, a
one-person chimney sweep and stove installer in Andover, Kansas, serving the
greater Wichita area. It was built to be attached to a cold outreach email —
the pitch being that the business is priced well below the local market and
that neither its current site nor its Google presence says so.

Five tabs (Home, Services & prices, Inspections, Questions, Contact) switched
by JavaScript within one document. One call to action everywhere: the phone
number, as a header button on every tab and as a fixed bottom bar on screens
under 760px. No build step, no dependencies, no framework. Two Google Fonts.

---

## 2. Where every fact came from

This matters more than anything else in this document. **The live site at
chadschimney.com was never loaded** — the network egress policy of the
environment this was built in blocked that domain. Every claim about the
current site is inference from search-result snippets, not observation.

| Fact used on the site | Source | Confidence |
|---|---|---|
| Sweep + Level 1 inspection, $140 | Third-party directory listing | Medium — never confirmed with the owner |
| Level 2 camera inspection, $220 | Same | Medium |
| Phone, email, street address | Public listings, cross-checked across three | High |
| Services: clean, inspect, install, repair | The owner's own "about" text, supplied by the client | High |
| NFI Woodburning Specialist | Same | High |
| "Certified in cleaning and inspecting chimneys" | Same, verbatim and vague | Low — see gap 3 |
| NFPA 211 levels 1, 2 and 3 | Same | High |
| Wichita market rate $228–$313 | Cost-aggregator sites | **Low** — see gap 2 |
| A competitor's $249 Level 2 | That competitor's own site, via snippet | Medium |
| Competitor names ranking in Wichita | Search results, one query, one day | Low — volatile |
| Hours, insurance | Nothing. Not stated anywhere. | None — flagged on the site itself |

Everything in the "Low" and "None" rows is load-bearing for the sales pitch
and none of it has been verified with a primary source.

---

## 3. Decisions taken, and why

- **Tabs instead of one long page.** The first build was a single scrolling
  page carrying all of this content. It was too much at once. Splitting it
  into five short tabs was a legibility decision, and it created an SEO
  problem — see gap 1.
- **Calling is the only call to action.** No booking form, no chat widget,
  no newsletter. For a one-person trade whose customers are mostly older
  homeowners, the phone is the conversion path. The cost of that choice is
  in gap 7.
- **The price leads.** $140 appears in the first sentence of the page. The
  entire competitive argument is that nobody else in this market publishes a
  number, so burying it would waste the only real advantage the business has.
- **Credentials ordered by what a customer cares about**, not by what is
  most impressive to a tradesman: inspection standard first (NFPA 211),
  same-day written report second, "you get the owner, not an office" third.
  The NFI Woodburning Specialist certification was deliberately demoted to
  the Contact tab. It is a real credential but it reads, to a homeowner, as
  being about stoves rather than about safety.
- **Warm limestone / soot / firebrick palette, Archivo over Newsreader.**
  Chosen to read as a well-lettered service truck rather than an agency
  website. Two alternative directions were drawn and rejected: a dark
  "soot and ember" treatment (memorable, harder to read in daylight on a
  phone) and a clinical "field report" treatment (credible to agents and
  insurers, cold to homeowners).
- **The invented customer reviews were deleted.** An earlier draft carried
  three plausible-sounding testimonials. They were fabricated. They are now
  a marked placeholder. This is the single worst thing that was in this
  project and it is called out here so a reviewer knows to check for more of
  the same.

---

## 4. Known gaps

Ordered by how much damage each one does.

**1. The site is five tabs but one URL. This contradicts the search plan.**
The accompanying strategy calls for separate indexable pages per service and
per town. What was built is a single document with JavaScript tab switching
and hash fragments. Google will index one page. Every long-tail search the
plan targets — "chimney sweep Augusta KS", "wood stove installation Wichita"
— has no page to land on. Either the site becomes real separate HTML files
or the plan is fiction. This was not reconciled and it should have been.

**2. The competitive pricing claim rests on lead-generation websites.**
The "$228–$313 Wichita range" comes from cost-aggregator sites whose business
model is selling leads, not publishing accurate market data. That number is
the backbone of the sales pitch and the proposal. It should be replaced with
prices quoted directly by three named local competitors before anyone says it
out loud to the client.

**3. The certification story is unresolved.**
A third-party directory describes the owner as CSIA certified. His own copy
says NFI Woodburning Specialist and, separately, "certified in cleaning and
inspecting chimneys" without naming the certifying body. These are different
organizations with different scopes. The site currently asserts both the NFI
credential and generic certification. If he is not in fact CSIA certified,
earlier drafts of this project said he was, and if any of that reaches a
customer it is a false credential claim. Resolve this before publishing.

**4. There are no photographs.**
A chimney service site with zero images of real work is a conversion problem
that no amount of typography fixes. The hand-drawn SVG cutaway is a stopgap
chosen because no photos were available, and it may read as a stock
illustration. Twenty photos from the owner's phone would improve this site
more than any other single change.

**5. No social proof at all.**
The reviews block is an empty placeholder. For a local trade, reviews are
probably the highest-weighted ranking and conversion factor there is. The
site ships with none, and the plan for getting them (Google Places API caps
at five; scraping violates Google's terms; manual transcription is what most
trade sites actually do) was described but not built.

**6. Sharing and indexing metadata is incomplete.**
No favicon. No Open Graph or Twitter card tags, so the link previews as a
blank box in a text message or on Facebook — for a business whose customers
are on Facebook, that is a real cost. No sitemap, no robots.txt, no canonical
strategy for the tab fragments.

**7. Call-only excludes a real slice of customers.**
Younger homeowners, people at work, people who would rather not talk to
anyone. No form, no text-message option, no online booking. This was a
deliberate simplification and it is defensible, but it is a choice with a
cost and it was not measured against anything.

**8. Nothing has been tested on a real device.**
Rendering was checked in headless Chromium at five widths. No iOS Safari, no
Android Chrome, no real phone in a hand, no screen reader, no keyboard-only
pass beyond the tab roving-focus implementation. Color contrast was chosen by
eye and never measured against WCAG. Dark mode inherits from the OS and no
human has looked at it.

**9. The structured data is thin and partly unverifiable.**
`hasCredential` is a free-text string rather than a proper credential object.
`makesOffer` has prices but no `itemOffered`. `openingHours` was deliberately
omitted because the hours are unknown — which is correct, but it means the
markup is incomplete in exactly the field local search uses most.

**10. The copy is machine-drafted and the client has approved none of it.**
Every sentence on the site was written for the owner, not by him, from public
information. It has been passed over once to strip the tells — the aphoristic
headline, the em-dash habit, the parallel triplets — but a reviewer should
assume more remain. He has a voice; nobody has heard it yet.

**11. Business figures in the proposal are illustrative, not real.**
The break-even table uses $1,500 / $2,500 / $3,500 as example fees against a
$140 job. The installation figure is a blank placeholder. No margin, no job
mix, no seasonality, no capacity ceiling — a one-person operation can only
sweep so many chimneys in a week, and if the marketing works, the constraint
becomes his calendar, not his leads. That was never modeled.

**12. Consent.**
The business name, address, phone number and prices are used throughout
without the owner's knowledge. This is normal for a spec pitch and the footer
says the page is a preview and not the live site. It is still someone's real
business identity sitting in a repository and on a hosting service before he
has said yes.

---

## 5. What to attack first

If you are reviewing this, these are the questions worth your time:

1. **Is the one-page/five-tab structure defensible at all**, given the search
   strategy attached to it? What is the smallest change that fixes it —
   five real HTML files, a static generator, or abandoning the town-page plan?
2. **Is the price-leading strategy right?** Publishing $140 wins the
   comparison shopper and may anchor the business low forever. The
   installation work is worth many multiples of a sweep. Is the front page
   selling the cheap thing at the expense of the profitable one?
3. **Where else is fabricated or unverifiable content hiding?** Three
   testimonials were invented and removed. Assume the same failure mode
   elsewhere and go looking — particularly in claims about how the owner
   works ("cleans up after himself", "quotes before he drives out"), which
   sound like facts and were inferred.
4. **Does the copy read as machine-written?** Point at specific sentences.
5. **Is the credential language safe** given gap 3, and does anything on the
   site imply a certification that has not been confirmed?
6. **What is missing that a working sweep would notice immediately** and that
   nobody who has never swept a chimney would think of?

---

## 6. Files

- `index.html` — the site. Everything is in this one file.
- `README.md` — how to publish it, and the pre-launch checklist.
- `CRITIQUE.md` — this document.

Not in the repository: the local-search strategy and the client proposal,
which live elsewhere and carry their own placeholders.
