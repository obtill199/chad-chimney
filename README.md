# Chad's Chimney website

A responsive, multi-page website for Chad's Chimney LLC in Andover, Kansas.
The site is plain HTML, CSS, and a small amount of JavaScript, so it can be
hosted without a build step or framework.

## Pages

- `index.html` — homepage
- `services.html` — service overview and starting prices
- `sweeping.html` — chimney-cleaning details
- `inspections.html` — Level 1, 2, and 3 inspection guide
- `installation-repair.html` — installation and repair services
- `about.html` — Chad's qualifications and service approach
- `contact.html` — phone, email, address, and scheduling guidance

Shared styling lives in `styles.css`; the accessible mobile navigation lives
in `site.js`. Approved logo and photography from the current Chad's Chimney
site are stored in `assets/`.

## Local preview

Run any static file server from the repository root, then open `index.html`.
There are no packages to install.

## Before launch

- Confirm the published prices: $160 starting cleaning price, $140 returning
  customer price, and $280 starting Level 2 inspection price.
- Confirm the exact wording and current status of every certification.
- Confirm the public street address and desired service-area wording.
- Add authentic reviews only after Chad supplies or approves them.
- Decide whether the production host will use the clean canonical paths in the
  page metadata or retain the `.html` filenames.
- Replace the year in the footer when needed.

See `CRITIQUE.md` for the source audit, design rationale, and remaining risks.
