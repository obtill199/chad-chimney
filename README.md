# Chad's Chimney — website

A complete, single-file website for Chad's Chimney LLC (Andover, KS).
Everything is in `index.html`: markup, styles and the tab script. No build
step, no dependencies, no framework. Open it in a browser and it works.

## What's in it

Five tabs — Home, Services & prices, Inspections, Questions, Contact — with
one call to action throughout: the phone number. It's a button in the header
on every tab, and on a phone a Call bar is pinned to the bottom of the screen
so the number is never more than a thumb away.

The `<head>` already carries the page title, the meta description and a
`LocalBusiness` JSON-LD block with the address, phone, service area, price
range and credentials, so Google can read the business details straight off
the page.

## Publishing it

**GitHub Pages** — Settings → Pages → Source: *Deploy from a branch* →
`main` / `/ (root)` → Save. The site appears at
`https://obtill199.github.io/chad-chimney/` within a minute or two.
Pages needs the repository to be **public** unless the account is on a paid
plan; this repo is currently private.

**On Chad's own domain** — once he's happy with it, point `chadschimney.com`
at Pages: add a `CNAME` file to this repo containing `www.chadschimney.com`,
then set the DNS record at his registrar. Keeping the site on his own domain
matters for search; a `github.io` address is fine for showing him, not for
the long run.

## Before it goes live

- [ ] Confirm hours and insurance details (the footer says they're unconfirmed)
- [ ] Confirm the installation and repair scope reads the way Chad describes it
- [ ] Swap the reviews placeholder on the Home tab for his real Google reviews
- [ ] Replace the chimney drawing with photographs of his own work
- [ ] Check every price against what he's charging now

## Editing it

Prices, phone number and copy are plain text in `index.html` — search for
`$140`, `655-9875` or any sentence you want to change. Colours are CSS
variables in the `:root` block at the top; the whole palette changes from
about six lines. Both light and dark modes come from the same variables.
