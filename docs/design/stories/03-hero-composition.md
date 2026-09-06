# Story 03 — Hero composition and spatial artifact

## User story

As a prospective client, I want to understand VDG’s point of view quickly so I can decide whether to start a conversation.

## Scope

- Build an asymmetric hero: concise copy on the left and a single composed spatial artifact on the right.
- Use a truthful abstract studio artifact (layered frames, annotated construction sheet, or VDG geometry) until a real project artifact is available.
- Include a primary `Discuss a project` CTA and secondary `Explore capabilities` anchor.

## Acceptance criteria

- The headline is no more than two lines at desktop scale and is readable without the visual artifact.
- Supporting copy contains no invented client outcomes, uptime figures, project names, or technical claims.
- The artifact is a designed static composition first; it must work without JavaScript/WebGL.
- Optional pointer parallax is capped at 3° rotation / 12px translation, does not auto-rotate, and is disabled for reduced-motion, touch, and mobile contexts.
- Hero motion appears once, in reading order, with opacity/short translation only (250–450ms).
- The hero uses intentional empty space instead of ambient blobs, floating status cards, or particle effects.

## Out of scope

- A production Three.js scene, fabricated project imagery, or animated logo treatment.

## Dependencies

- Stories 01 and 02.

