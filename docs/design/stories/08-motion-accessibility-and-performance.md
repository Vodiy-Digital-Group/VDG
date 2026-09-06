# Story 08 — Motion, accessibility, and performance pass

## User story

As a visitor using any device or assistive preference, I want the interface to feel responsive and calm without sacrificing access to content.

## Scope

- Apply the v2 motion system across the implemented sections.
- Verify responsive layout, keyboard interaction, visible focus states, reduced-motion behavior, and page weight.
- Remove remaining decorative motion and effects from the old visual language where they conflict with v2.

## Acceptance criteria

- Motion is limited to one-time entrance, state change, and optional hero parallax; there are no perpetual decorative loops.
- `prefers-reduced-motion: reduce` disables transforms, reveals, and parallax while preserving all content and interaction.
- All interactive controls have visible focus indicators, semantic labels, and at least 44px touch targets where applicable.
- The layout is tested at 320px, 768px, 1280px, and 1440px without clipped content or hover-only controls.
- Images reserve layout space and are responsive; any future WebGL enhancement is code-split, has a still fallback, pauses offscreen, and is not loaded on mobile/reduced-motion paths.
- There are no scroll-jacking, cursor-chasing, autoplay video, particle field, or auto-rotating 3D effects.

## Out of scope

- New analytics, automated visual regression infrastructure, or adding a production WebGL scene.

## Dependencies

- Stories 01–07.

