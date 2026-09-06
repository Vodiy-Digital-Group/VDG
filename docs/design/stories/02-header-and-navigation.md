# Story 02 — Editorial header and navigation

## User story

As a visitor, I want clear, calm navigation so I can understand the studio and reach the inquiry form without hunting through the page.

## Scope

- Redesign the desktop and mobile header around the VDG logo, anchored navigation, and one text CTA.
- Use links for `Capabilities`, `Approach`, `Studio`, and `Contact` only.
- Build a mobile full-height navigation index rather than a cramped dropdown.

## Acceptance criteria

- Header height is 72px on desktop and 64px on mobile.
- It is transparent/on-page at the top and gains an opaque surface plus a subtle bottom rule after scrolling.
- The only prominent action is `Discuss a project`, linked to `#contact`.
- Active, hover, keyboard focus, and mobile-open states are clear without relying solely on color.
- The mobile menu can be closed with Escape, the close control, or a navigation selection; focus is managed correctly.
- Navigation contains no `Work` link while no real project material is being presented.

## Out of scope

- New routes, account controls, user avatars, or a client portal.

## Dependencies

- Story 01 page shell.

