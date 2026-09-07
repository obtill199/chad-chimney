# Redesign assessment

Status: polished private redesign. Chad has not approved the copy, prices, or
business details for publication.

## What changed

The original prototype was a single dark page with JavaScript-switched tabs.
It has been rebuilt as seven real pages with a warm, service-business design
system. The redesign uses Chad's existing logo and photographs, creates clear
paths for cleaning, inspections, installation, and repair, and keeps calling
Chad as the primary action.

The visual direction is deliberately practical rather than corporate:
charcoal and firebrick establish the trade, warm paper tones improve daytime
readability, the Newsreader body face adds warmth, and Archivo keeps headings
direct. Dark sections provide rhythm instead of making the entire experience
feel heavy.

## Information sources

Business facts and assets were checked against the current public website at
`chadschimney.com` on September 7, 2026.

| Item used | Public source | Confidence |
|---|---|---|
| Phone, email, and Andover address | Current contact page | High |
| Cleaning starts at $160; returning price $140 | Current services page | High |
| Detailed Level 2 inspection starts at $280 | Current services page | High |
| NFI Woodburning Specialist | Current about page | High |
| NFPA-compliant 33-point inspection format | Current about/services copy | High |
| Cleaning, inspection, installation, and repair scope | Current site | High |
| Greater Wichita service area | Current site | High |
| Generic certification in cleaning and inspecting | Current about copy | Medium; certifying body is not named |

No invented testimonials, market comparisons, turnaround promises, insurance
claims, operating hours, or unsupported service towns remain on the site.

## Design and conversion strengths

- The homepage communicates service area, work types, credentials, starting
  prices, and the primary call action within the opening screen.
- Service pages have distinct editorial layouts instead of repeating one card
  template everywhere.
- The inspection page makes Levels 1, 2, and 3 scannable and explains when a
  detailed inspection applies.
- The About page is portrait-led and makes the owner-operated nature of the
  business visible without relying on stock testimonials.
- The contact page treats the phone number and email address as primary visual
  elements instead of hiding them inside a form.
- Mobile visitors get a compact menu and a persistent call bar; keyboard focus,
  skip navigation, and reduced-motion preferences are supported.
- Each page has a unique title, description, canonical URL, and semantic heading
  structure. The homepage includes local-business structured data.

## Remaining risks before launch

1. **Owner approval is still required.** The site is written from public
   information, not from a discovery interview with Chad.
2. **Certification wording should be verified.** The NFI credential is specific;
   the separate public claim about being certified in cleaning and inspecting
   does not name the issuing body.
3. **No social proof is shown.** That is intentional until real, approved reviews
   are available. Authentic reviews would be the highest-value content addition.
4. **The photography is limited.** The current portrait and hearth images are a
   strong start, but five to ten recent project photos would make the service
   pages more specific and credible.
5. **Clean production URLs need hosting support.** Canonical metadata assumes
   routes such as `/chimney-cleaning`; a host should rewrite those routes to the
   corresponding HTML files or the canonicals should be changed.
6. **Hours and response expectations remain unstated.** They should only be added
   after Chad confirms them.

## Best next improvements

After owner approval, add verified Google-review excerpts with links to their
source, replace stock hearth imagery with Chad's recent work, add confirmed
hours and service towns, and connect the final domain to the deployed site.
