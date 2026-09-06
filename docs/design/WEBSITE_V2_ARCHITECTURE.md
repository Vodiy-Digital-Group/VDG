# VDG Website v2 — Design Architecture

## 1. Direction

**Working idea: Built evidence, not visual noise.**

VDG v2 should feel like the website of a small, exacting engineering studio whose work is real enough to be inspected. The visual point of view is not “futuristic software agency.” It is closer to an architect’s project room: sparse, tactile, observant, and quietly confident.

The existing landing page establishes useful foundations: a dark-first palette, Space Grotesk/Hanken Grotesk/JetBrains Mono, strong grids, and electric blue as a controlled signal. V2 keeps those foundations but changes the composition:

- Lead with selected work and the decisions behind it, not a broad service inventory.
- Replace generic “UI dashboard” illustrations with project artifacts: annotated screenshots, schematics, excerpts of flows, diagrams, and physical-material photography when available.
- Make the page feel constructed through proportion, type, cropping, and detail—not gradients, floating widgets, or endless cards.
- Use 3D as a single spatial object with a job to do: orient, explain, or create depth. It must never become a decorative demo reel.

## 2. What to carry forward / what to retire

| Keep | Retire |
| --- | --- |
| Near-black ground, restrained blue signal, hairline structure | Constant grid backgrounds, blue glows on every interaction, large generic blur blobs |
| Editorial type hierarchy and monospace metadata | Metadata on every element; invented performance figures and techno-jargon |
| Clear direct-project CTA | Repeated rounded cards and “SaaS dashboard” mockups as default decoration |
| The idea of craft, process, and technical standards | Floating status chips, busy hero overlays, and motion that exists only to look animated |
| 12-column desktop / 4-column mobile discipline | Full-bleed effects that compromise reading or navigation |

## 3. Information architecture

The homepage is a guided argument. Each section should establish one fact and earn the next action.

```text
Header
  ├─ Index / Work / Approach / Studio / Contact
  └─ Start a project

01  Hero — point of view + one current/featured project
02  Selected work — three evidence-rich case studies
03  Capabilities — a concise map of where VDG is useful
04  Working model — how a project moves from uncertainty to release
05  Studio — people, standards, location, and principles
06  Contact — a short, practical project intake
Footer — contact, legal, selected links
```

No testimonial carousel, logo-wall filler, blog index, KPI ticker, or duplicated CTA band belongs on the initial version. Add them only when real material exists and the user journey demands them.

## 4. Page composition

### Header

A compact, static header (72px desktop / 64px mobile) on the page ground. It gains only a subtle bottom rule and opaque backdrop after the first section is passed. The logo is left aligned; navigation is center/right aligned; one text-based CTA is right aligned.

The mobile menu should be a full-height editorial index, not a tiny accordion. It may show the current project image or a short studio statement in its lower third.

### Hero: “The Workshop Window”

Use an asymmetric 12-column layout: copy occupies columns 1–6, while a **single three-dimensional project object** occupies columns 8–12. The object is a cropped, physical-looking “assembly” built from an actual project artifact—such as a translucent routing sheet above a metal plate, an exploded interface frame, or a stack of index cards. It is not a spinning VDG monogram.

- Eyebrow: `VDG / Independent product and engineering studio`
- H1: a short, specific point of view (two lines maximum)
- Supporting text: one calm paragraph; no claims that cannot be substantiated
- Primary CTA: `Discuss a project`
- Secondary CTA: `View selected work`
- Footer line in hero: current availability, location, or a meaningful studio detail—not synthetic uptime metrics

The hero object should be framed like a museum object: generous negative space, one hard edge, restrained depth, and a small caption with project/context. The page must still look complete if WebGL is unavailable.

### Selected work: “Case files”

This is the homepage’s dominant content. Use three cases in a vertical sequence rather than a uniform grid.

Each case has:

1. A numbered index and industry label.
2. A 3–7 word outcome statement.
3. A large project visual: real product capture, diagram, image, or considered composite.
4. A short problem/decision/result description.
5. Two or three verified facts only (for example: delivery scope, platform, team involvement, measured result where permission exists).
6. A textual `Read case study →` action.

Alternate the project visual’s position left/right. Let the case image break a container edge occasionally, but retain a rigid text baseline. Case visuals should have distinct art direction; do not place three browser-window mockups in a row.

### Capabilities: “Where we enter the problem”

Present four capability areas as an open index, not as sales cards:

- Digital products & platforms
- Systems & operations software
- Product design systems
- Technical discovery & delivery strategy

Each item is a horizontal row with an index, name, one-sentence definition, and a reveal on hover/focus. The reveal may expose examples, a tiny schematic, or relevant technologies. On touch devices it is simply expanded/static. This section should be short enough to scan in one viewport on desktop.

### Working model: “A project with VDG”

Use a horizontal rail on desktop and a vertical sequence on mobile. Four stages: Frame, Make, Integrate, Release. Each stage answers a practical client question: what happens, who is involved, and what artifact the client receives.

Avoid decorative timelines. Use a thin rail with blue appearing only on the active/hovered stage. One small process artifact (annotated sketch, flow excerpt, deployment checklist) may change alongside it.

### Studio: “Small by design”

Replace abstract standards matrices with a human, accountable studio section:

- A direct statement of who leads the work and how decisions are made.
- One portrait, workshop/studio photograph, or a carefully cropped project-table image when real photography is available.
- A short set of non-negotiables: direct access, durable systems, clear ownership.
- Location and collaboration model in plain text.

If no truthful imagery exists, use a typographic composition and a real artifact rather than AI-generated people or office imagery.

### Contact: “Start with the constraints”

The contact area should be quiet and practical. Split it into an expectation-setting column and a compact form. Ask only what makes the first response better:

- Name and work email
- What needs to change?
- Current situation / constraints
- Expected timing and approximate investment range (optional)

State the response expectation plainly. The submit state should be an inline acknowledgement, not a modal celebration.

## 5. Visual system

### Color and material

Continue Kinetic Obsidian, but use tonal contrast as the main form of depth.

- Ground: `#0B0B0D`
- Base planes: `#121216`, `#1A1A1E`, `#2A2A30`
- Structural rule: `#23232A`
- Primary text: `#F5F5F3`
- Secondary/muted text: `#A1A1AA` / `#71717A`
- Signal blue: `#4361FF`

Blue is an event color: selected item, focused control, active process stage, key link, or an intentional detail in the hero object. It should occupy less than 5% of a typical viewport. Do not use multi-color gradients. Use a low-opacity blue wash only behind the hero object or a selected work detail when it improves depth.

### Typography

- **Space Grotesk:** display, case titles, and strong navigation moments. Use large type sparingly; allow one headline to be large rather than making every section headline loud.
- **Hanken Grotesk:** all reading copy and form controls.
- **JetBrains Mono:** indexes, labels, project specifications, and captions. It describes; it does not decorate every sentence.

Body copy should be 16–18px with a readable measure of 55–70 characters. Case-study results should be stated in normal language, not in all caps.

### Geometry

Use 1px rules, mostly square 4px corners, and occasional 8px media frames. Introduce one repeatable VDG-specific motif: a **cropped diagonal registration mark** (a 3–4px corner cut) placed only at entry points, selected cases, and 3D-object framing. It becomes recognizable through restraint.

## 6. Motion and 3D rules

### Motion principle

Motion explains hierarchy, state, or spatial relationship. It must not ask for attention when the reader is not interacting.

| Interaction | Behavior | Limit |
| --- | --- | --- |
| Initial page load | Header and hero copy appear once, in reading order | 250–450ms; opacity + 8–16px translate only |
| Scrolling into a case | Image mask reveals or caption settles | One reveal per case; no perpetual loop |
| Capability row | Detail expands and underline moves | 160–220ms, easing `cubic-bezier(.16,1,.3,1)` |
| Primary button | 1px lift or blue edge brightens | 150ms; no elastic bounce |
| 3D hero object | Very slow pointer/parallax response | Maximum 3° rotation and 12px translation |
| Reduced motion | All transforms/parallax disabled | Content remains fully visible |

### 3D object requirements

Use **one WebGL/Three.js scene maximum on the home page**. It should be progressive enhancement and carry a static poster image underneath.

- Build from 3–5 simple planes/extruded shapes and project textures, never from generic chrome spheres, particle fields, or stock 3D assets.
- Camera stays fixed; user input causes a light parallax shift only. No auto-rotation.
- Target a 60fps desktop budget and gracefully clamp quality on lower-end devices.
- Pause rendering offscreen and when the tab is hidden.
- Exclude the scene entirely for `prefers-reduced-motion`, coarse-pointer devices, and screens below 768px; show the composed still instead.
- Do not make essential text, navigation, or calls to action part of the canvas.

CSS should handle all other depth: layered planes, controlled gradients, and carefully cropped images. Most interfaces need no 3D at all.

## 7. Responsive behavior

| Breakpoint | Structure |
| --- | --- |
| Desktop ≥1280px | 12 columns, 1440px maximum canvas, 48px side margins; hero copy/object split |
| Tablet 768–1279px | 8 columns, 32px side margins; cases retain image/text contrast but stack selectively |
| Mobile <768px | 4 columns, 20px side margins; hero object becomes a static crop beneath copy; process becomes vertical |

Mobile should be an authored layout, not a shrunken desktop. Reduce metadata before reducing body text, preserve 44px minimum touch targets, and keep all interactive reveals available without hover.

## 8. Accessibility and performance baseline

- Conform to WCAG 2.2 AA contrast and keyboard interaction expectations.
- Retain visible focus rings using the electric blue token; never remove focus outlines without replacement.
- Respect `prefers-reduced-motion`; avoid scroll-jacking and horizontally trapped scrolling.
- Reserve media dimensions to prevent layout shift.
- Load case images responsively in AVIF/WebP with an intentional low-detail placeholder.
- Ship the 3D scene only after primary content is usable; code-split it and keep its initial asset budget under 500KB compressed.
- Write alt text as project context, not as a list of visual properties.

## 9. Build sequence

1. Confirm the actual work, proof points, service boundaries, and available imagery before writing final copy.
2. Design the grid, type scale, color tokens, header, and no-JavaScript static hero composition.
3. Build the selected-work sequence using real assets and case-study data.
4. Add capability index, working-model rail, studio, and contact flow.
5. Add hover/focus and entrance motion; verify the reduced-motion version first.
6. Add the optional hero 3D enhancement only when its static fallback already succeeds visually.
7. Test keyboard navigation, mobile layouts, page weight, and all form states before polish.

## 10. Acceptance criteria

The v2 design is ready to implement when it can answer yes to all of these:

- Does the first screen identify VDG and give a human reason to continue without relying on visual spectacle?
- Can a visitor understand the kinds of problems VDG solves by reviewing real work, not a tile grid?
- Is blue used as a signal rather than a default fill color?
- Does every animation have a purpose and a reduced-motion alternative?
- Would the design still feel specific and confident if all 3D were disabled?
- Are all claims, metrics, and project details demonstrably true or clearly marked as illustrative?

If the final answer to the fifth question is no, remove the 3D effect. The underlying page architecture must carry the identity.
