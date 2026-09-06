# Story 01 — Kinetic Obsidian v2 foundation and page shell

## User story

As a visitor, I want the site to immediately feel like a deliberate, modern engineering studio so that I can trust the experience before I read the details.

## Scope

- Apply the Kinetic Obsidian v2 tokens from `docs/DESIGN.md` and `WEBSITE_V2_ARCHITECTURE.md`.
- Establish the responsive 12 / 8 / 4 column layout, page ground, section rules, typography scale, and spacing rhythm.
- Replace the existing rounded-card-heavy page treatment with crisp structural planes and editorial spacing.
- Compose the homepage in this order: header, hero, capabilities, approach, studio, contact, footer.

## Acceptance criteria

- The page ground is `#0B0B0D`; tonal surfaces and 1px `#23232A` rules provide hierarchy.
- Space Grotesk is used for display/headlines, Hanken Grotesk for body copy, and JetBrains Mono only for labels/indexes.
- Desktop content is constrained to 1440px with 48px outer margins; mobile uses 20px margins.
- The electric blue `#4361FF` is limited to interactive/selected states and intentional details.
- No gradients, glow fields, or generic dashboard tiles are used as the default visual language.

## Out of scope

- New content claims, case studies, testimonials, project/client logos, or a work showcase.
- Functional changes to routing, contact delivery, or analytics.

## Dependencies

- Existing theme provider and Tailwind token configuration.

