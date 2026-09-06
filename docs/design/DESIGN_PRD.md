**# VDG Website v2.1 â€” Design, 3D & Motion Architecture**

**## 1. Direction**

**\*\*Working idea: Built evidence, not visual noise.\*\***

VDG v2 should feel like the website of a small, exacting engineering studio whose work is real enough to be inspected. The visual point of view is not â€œfuturistic software agency.â€ It is closer to an architectâ€™s project room: sparse, tactile, observant, and quietly confident.

The existing landing page establishes useful foundations: a dark-first palette, Space Grotesk/Hanken Grotesk/JetBrains Mono, strong grids, and electric blue as a controlled signal. V2 keeps those foundations but changes the composition:

\- Lead with selected work and the decisions behind it, not a broad service inventory.

\- Replace generic â€œUI dashboardâ€ illustrations with project artifacts: annotated screenshots, schematics, excerpts of flows, diagrams, and physical-material photography when available.

\- Make the page feel constructed through proportion, type, cropping, and detailâ€”not gradients, floating widgets, or endless cards.

\- Use 3D as a single spatial object with a job to do: orient, explain, or create depth. It must never become a decorative demo reel.

**## 2. What to carry forward / what to retire**

\| Keep | Retire |

\| --- | --- |

\| Near-black ground, restrained blue signal, hairline structure | Constant grid backgrounds, blue glows on every interaction, large generic blur blobs |

\| Editorial type hierarchy and monospace metadata | Metadata on every element; invented performance figures and techno-jargon |

\| Clear direct-project CTA | Repeated rounded cards and â€œSaaS dashboardâ€ mockups as default decoration |

\| The idea of craft, process, and technical standards | Floating status chips, busy hero overlays, and motion that exists only to look animated |

\| 12-column desktop / 4-column mobile discipline | Full-bleed effects that compromise reading or navigation |

**## 3. Information architecture**

The homepage is a guided argument. Each section should establish one fact and earn the next action.

\`\`\`text

Header

â”œâ”€ Index / Work / Approach / Studio / Contact

â””â”€ Start a project

01 Hero â€” point of view + one current/featured project

02 Selected work â€” three evidence-rich case studies

03 Capabilities â€” a concise map of where VDG is useful

04 Working model â€” how a project moves from uncertainty to release

05 Studio â€” people, standards, location, and principles

06 Contact â€” a short, practical project intake

Footer â€” contact, legal, selected links

\`\`\`

No testimonial carousel, logo-wall filler, blog index, KPI ticker, or duplicated CTA band belongs on the initial version. Add them only when real material exists and the user journey demands them.

**## 4. Page composition**

**### Header**

A compact, static header (72px desktop / 64px mobile) on the page ground. It gains only a subtle bottom rule and opaque backdrop after the first section is passed. The logo is left aligned; navigation is center/right aligned; one text-based CTA is right aligned.

The mobile menu should be a full-height editorial index, not a tiny accordion. It may show the current project image or a short studio statement in its lower third.

**### Hero: â€œThe Workshop Windowâ€**

Use an asymmetric 12-column layout: copy occupies columns 1â€“6, while a **\*\*single three-dimensional project object\*\*** occupies columns 8â€“12. The object is a cropped, physical-looking â€œassemblyâ€ built from an actual project artifactâ€”such as a translucent routing sheet above a metal plate, an exploded interface frame, or a stack of index cards. It is not a spinning VDG monogram.

\- Eyebrow: \`VDG / Independent product and engineering studio\`

\- H1: a short, specific point of view (two lines maximum)

\- Supporting text: one calm paragraph; no claims that cannot be substantiated

\- Primary CTA: \`Discuss a project\`

\- Secondary CTA: \`View selected work\`

\- Footer line in hero: current availability, location, or a meaningful studio detailâ€”not synthetic uptime metrics

The hero object should be framed like a museum object: generous negative space, one hard edge, restrained depth, and a small caption with project/context. The page must still look complete if WebGL is unavailable.

**### Selected work: â€œCase filesâ€**

This is the homepageâ€™s dominant content. Use three cases in a vertical sequence rather than a uniform grid.

Each case has:

1\. A numbered index and industry label.

2\. A 3â€“7 word outcome statement.

3\. A large project visual: real product capture, diagram, image, or considered composite.

4\. A short problem/decision/result description.

5\. Two or three verified facts only (for example: delivery scope, platform, team involvement, measured result where permission exists).

6\. A textual \`Read case study â†’\` action.

Alternate the project visualâ€™s position left/right. Let the case image break a container edge occasionally, but retain a rigid text baseline. Case visuals should have distinct art direction; do not place three browser-window mockups in a row.

**### Capabilities: â€œWhere we enter the problemâ€**

Present four capability areas as an open index, not as sales cards:

\- Digital products & platforms

\- Systems & operations software

\- Product design systems

\- Technical discovery & delivery strategy

Each item is a horizontal row with an index, name, one-sentence definition, and a reveal on hover/focus. The reveal may expose examples, a tiny schematic, or relevant technologies. On touch devices it is simply expanded/static. This section should be short enough to scan in one viewport on desktop.

**### Working model: â€œA project with VDGâ€**

Use a horizontal rail on desktop and a vertical sequence on mobile. Four stages: Frame, Make, Integrate, Release. Each stage answers a practical client question: what happens, who is involved, and what artifact the client receives.

Avoid decorative timelines. Use a thin rail with blue appearing only on the active/hovered stage. One small process artifact (annotated sketch, flow excerpt, deployment checklist) may change alongside it.

**### Studio: â€œSmall by designâ€**

Replace abstract standards matrices with a human, accountable studio section:

\- A direct statement of who leads the work and how decisions are made.

\- One portrait, workshop/studio photograph, or a carefully cropped project-table image when real photography is available.

\- A short set of non-negotiables: direct access, durable systems, clear ownership.

\- Location and collaboration model in plain text.

If no truthful imagery exists, use a typographic composition and a real artifact rather than AI-generated people or office imagery.

**### Contact: â€œStart with the constraintsâ€**

The contact area should be quiet and practical. Split it into an expectation-setting column and a compact form. Ask only what makes the first response better:

\- Name and work email

\- What needs to change?

\- Current situation / constraints

\- Expected timing and approximate investment range (optional)

State the response expectation plainly. The submit state should be an inline acknowledgement, not a modal celebration.

**## 5. Visual system**

**### Color and material**

Continue Kinetic Obsidian, but use tonal contrast as the main form of depth.

\- Ground: \`#0B0B0D\`

\- Base planes: \`#121216\`, \`#1A1A1E\`, \`#2A2A30\`

\- Structural rule: \`#23232A\`

\- Primary text: \`#F5F5F3\`

\- Secondary/muted text: \`#A1A1AA\` / \`#71717A\`

\- Signal blue: \`#4361FF\`

Blue is an event color: selected item, focused control, active process stage, key link, or an intentional detail in the hero object. It should occupy less than 5% of a typical viewport. Do not use multi-color gradients. Use a low-opacity blue wash only behind the hero object or a selected work detail when it improves depth.

**### Typography**

\- **\*\*Space Grotesk:\*\*** display, case titles, and strong navigation moments. Use large type sparingly; allow one headline to be large rather than making every section headline loud.

\- **\*\*Hanken Grotesk:\*\*** all reading copy and form controls.

\- **\*\*JetBrains Mono:\*\*** indexes, labels, project specifications, and captions. It describes; it does not decorate every sentence.

Body copy should be 16â€“18px with a readable measure of 55â€“70 characters. Case-study results should be stated in normal language, not in all caps.

**### Geometry**

Use 1px rules, mostly square 4px corners, and occasional 8px media frames. Introduce one repeatable VDG-specific motif: a **\*\*cropped diagonal registration mark\*\*** (a 3â€“4px corner cut) placed only at entry points, selected cases, and 3D-object framing. It becomes recognizable through restraint.

**## 6. Motion and 3D rules**

**### Motion principle**

Motion explains hierarchy, state, or spatial relationship. It must not ask for attention when the reader is not interacting.

\| Interaction | Behavior | Limit |

\| --- | --- | --- |

\| Initial page load | Header and hero copy appear once, in reading order | 250â€“450ms; opacity + 8â€“16px translate only |

\| Scrolling into a case | Image mask reveals or caption settles | One reveal per case; no perpetual loop |

\| Capability row | Detail expands and underline moves | 160â€“220ms, easing \`cubic-bezier(.16,1,.3,1)\` |

\| Primary button | 1px lift or blue edge brightens | 150ms; no elastic bounce |

\| 3D hero object | Very slow pointer/parallax response | Maximum 3Â° rotation and 12px translation |

\| Reduced motion | All transforms/parallax disabled | Content remains fully visible |

**### 3D object requirements**

Use **\*\*one WebGL/Three.js scene maximum on the home page\*\***. It should be progressive enhancement and carry a static poster image underneath.

\- Build from 3â€“5 simple planes/extruded shapes and project textures, never from generic chrome spheres, particle fields, or stock 3D assets.

\- Camera stays fixed; user input causes a light parallax shift only. No auto-rotation.

\- Target a 60fps desktop budget and gracefully clamp quality on lower-end devices.

\- Pause rendering offscreen and when the tab is hidden.

\- Exclude the scene entirely for \`prefers-reduced-motion\`, coarse-pointer devices, and screens below 768px; show the composed still instead.

\- Do not make essential text, navigation, or calls to action part of the canvas.

CSS should handle all other depth: layered planes, controlled gradients, and carefully cropped images. Most interfaces need no 3D at all.

**## 6A. Spatial signature: â€œThe Evidence Assemblyâ€**

The home page should have one recognizable spatial gesture rather than a collection of fashionable effects. The recommended hero object is **an exploded evidence assembly**: a shallow, portrait-oriented construction made from project material and studio artifacts. It should look designed for VDG, not downloaded for VDG.

**### Object anatomy**

Build the assembly from five restrained parts:

1. **Base plate** â€” a dark, slightly rough plane with one cropped corner and subtle fastener details.
2. **System map** â€” a translucent sheet carrying a real architecture or workflow fragment.
3. **Product frame** â€” a shallow extruded frame holding one real interface crop or project outcome.
4. **Decision strip** â€” a narrow physical label with project number, date, discipline, and one meaningful annotation.
5. **Signal element** â€” one blue edge, route, pin, or registration mark that identifies the active layer.

The layers should be imperfectly aligned by 2â€“6px, as they would be on a working table. Do not center every part or distribute spacing mathematically. That controlled asymmetry is an important part of the identity.

Use project textures wherever possible. If client work cannot be shown, create an honest VDG process artifact: a component dependency map, a delivery checklist, a redacted architecture excerpt, or a diagram of the studioâ€™s working model. Do not invent a fictional dashboard.

**### Material direction**

Use physically plausible, low-drama materials:

| Part           | Material                       | Visual behavior                                             |
| -------------- | ------------------------------ | ----------------------------------------------------------- |
| Base plate     | Near-black powder-coated metal | Broad, soft highlight; roughness 0.65â€“0.8                 |
| System map     | Smoked acrylic or vellum       | Partial transmission; readable only where light catches it  |
| Product frame  | Graphite polymer               | Slightly cleaner edge than the base; no chrome              |
| Decision strip | Warm off-white paper           | Introduces a human, tactile counterpoint to the dark system |
| Signal element | Electric blue enamel/light     | Occupies a very small area and never blooms heavily         |

Use one large rectangular key light, a dim cool fill, and a soft contact shadow. The light should suggest a project table or inspection bench, not a cinematic product commercial. Avoid glass-orb refraction, rainbow dispersion, glossy liquid metal, neon fog, and visible particle fields.

**### Composition and camera**

- Use an orthographic camera or a long perspective lens (approximately 55â€“75mm equivalent) to avoid game-like distortion.
- Present the object in a three-quarter view, cropped confidently by the right or bottom edge.
- Keep the modelâ€™s center of visual mass aligned with the second line of the hero heading, not the geometric center of its column.
- Allow the upper translucent sheet to break the nominal object frame by 6â€“10%.
- Keep the camera fixed. Motion belongs to the assembly layers and lighting, not to a roaming viewpoint.

**## 6B. Hero motion choreography**

The hero has four states. Each state should be testable independently and should never block reading or clicking.

| State   | Trigger                                            | Choreography                                                                           | Timing                                     |
| ------- | -------------------------------------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------ |
| Poster  | Default, reduced motion, mobile, WebGL unavailable | Authored still of the fully assembled object                                           | Immediate                                  |
| Settle  | First eligible desktop visit                       | Layers begin 10â€“24px apart and settle in sequence; contact shadow resolves last      | 650â€“900ms total; play once               |
| Inspect | Fine pointer movement inside hero                  | Whole object tilts up to 2Â°; internal layers shift at different depths by 3â€“10px    | Damped response; 180â€“260ms perceived lag |
| Release | Hero leaves viewport                               | Signal route completes once; upper sheet separates by 8â€“12px before rendering pauses | 300â€“450ms                                |

The entry should not use a perfectly even stagger. Suggested order: base plate, product frame, short pause, system map, decision strip, signal edge. Small timing differences make the assembly feel physically handled rather than generated by a universal animation preset.

Pointer movement should affect the object only while the pointer is inside its visual region. Return to rest slowly when the pointer leaves. Do not tie rotation to the entire browser window, and do not continuously animate when the user is reading.

Do not scrub the complete assembly animation directly against scroll position. Scroll may activate a discrete state change, but the object should retain physical timing and easing.

**## 6C. Supporting effects by section**

These effects stay outside WebGL. They should feel editorial and materially connected to the content.

| Location        | Effect                                              | Human-designed detail                                                               | Do not use                              |
| --------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------- |
| Header          | Bottom rule draws from the active section label     | Rule begins under the label rather than at viewport edge                            | Frosted glass pill navigation           |
| Hero copy       | Lines enter in reading order                        | Slightly different distance/timing per line; no word-by-word animation              | Text scramble or typewriter effect      |
| Primary CTA     | Blue registration edge shifts 3px on hover/focus    | Movement follows the cropped-corner motif                                           | Magnetic cursor chase or bouncing arrow |
| Case visual     | A masking panel uncovers the artifact               | Reveal direction responds to the visualâ€™s composition, not alternating by formula | Identical reveal on all three cases     |
| Case annotation | One leader line draws when its note becomes visible | Line terminates at a real decision in the artifact                                  | Decorative hotspots with no content     |
| Capabilities    | Row opens like a technical index                    | Adjacent rows move naturally; selected row retains its number                       | Floating glass cards                    |
| Working model   | Physical artifact changes at each stage             | Previous artifact remains faintly visible for one beat, like tracing paper          | Auto-playing carousel                   |
| Studio          | Photograph crop shifts by 1â€“2% on entry           | Preserve a slightly unexpected crop chosen by a human                               | AI-generated team/office imagery        |
| Contact         | Form rule turns blue only for the active field      | Confirmation replaces the form without confetti or modal UI                         | Animated gradient border                |

Add a very light, static paper/film grain to selected image planes only (roughly 1â€“2% opacity). It must not animate, cover body text, or become a full-page â€œnoise overlay.â€

**## 6D. Motion language**

Use a small vocabulary, but do not make every transition mechanically identical.

- **Settle:** `cubic-bezier(.16,1,.3,1)` for elements arriving into place.
- **Inspect:** spring/damped interpolation with no overshoot for pointer-driven 3D.
- **Reveal:** `cubic-bezier(.22,1,.36,1)` for masks and structural rules.
- **Exit:** `cubic-bezier(.4,0,1,1)` only where an element genuinely leaves.

Most transitions should fall between 160ms and 450ms. The hero assembly may take up to 900ms because it is a single opening composition. Avoid global stagger utilities that make every heading, card, and icon arrive with the same rhythm.

Motion should include pauses. A short still moment between two related movements reads as observation and intent; constant motion reads as a template.

**## 6E. Implementation architecture**

Recommended stack for a React implementation:

- `three` for rendering and materials.
- `@react-three/fiber` for the scene lifecycle.
- `@react-three/drei` for model loading, bounds/centering helpers, contact shadows, and environment utilities where needed.
- GSAP only for coordinated DOM timelines and section-level triggers. Use the browserâ€™s Web Animations API or CSS transitions for simple hover/focus states.
- Blender for composing, UV mapping, baking, and exporting the hero asset as GLB.

Suggested component boundary:

```text
Hero
â”œâ”€ HeroCopy
â”œâ”€ HeroArtifactFrame
â”‚  â”œâ”€ ArtifactPoster
â”‚  â””â”€ SceneGate
â”‚     â””â”€ HeroAssemblyCanvas
â”‚        â”œâ”€ EvidenceAssembly
â”‚        â”œâ”€ InspectionRig
â”‚        â”œâ”€ LightingRig
â”‚        â””â”€ RenderController
â””â”€ ArtifactCaption
```

`SceneGate` decides whether the 3D enhancement should load. It checks viewport width, fine-pointer capability, reduced-motion preference, WebGL support, visibility, and whether the hero is close to the viewport. The poster must remain underneath the canvas until the first successful frame, preventing a blank or flashing hero.

Use demand-based rendering. Invalidate a frame only while the settle sequence is active, pointer damping has not reached rest, the hero changes state, or the asset is resizing. Stop rendering when the hero is offscreen or `document.visibilityState !== 'visible'`.

**### Asset contract**

| Asset       | Target                                                                                         |
| ----------- | ---------------------------------------------------------------------------------------------- |
| Hero GLB    | 5â€“25k visible triangles; ideally 250â€“500KB compressed, hard ceiling 900KB                  |
| Textures    | One atlas where practical; 1024px typical, 2048px only for a readable project artifact         |
| Materials   | 3â€“5 total; share materials between meshes                                                    |
| Draw calls  | Prefer fewer than 20 for the complete hero                                                     |
| Poster      | AVIF and WebP, correctly cropped for desktop/tablet/mobile                                     |
| Pixel ratio | Clamp to 1â€“1.5; do not render at unrestricted device DPR                                     |
| Shadows     | One soft contact shadow or one carefully sized shadow map; never several dynamic shadow lights |

Export a clean GLB with named nodes: `base_plate`, `system_map`, `product_frame`, `decision_strip`, and `signal`. Stable node names allow the implementation to animate semantic parts without relying on fragile child indexes.

If Draco or Meshopt compression is used, test the decoder path in production and keep the poster visible until decoding succeeds. Prefer compressed textures only when the deployment and browser test matrix confirms the required decoder support.

**## 6F. External model policy**

The hero should not be a recognizable stock model. External assets may be used as raw material for small physical detailsâ€”fasteners, clips, cable guides, paper hardwareâ€”or as temporary prototypes.

Before an external model enters production:

1. Confirm that commercial use and modification are allowed.
2. Record the creator, source URL, license, and required attribution in the repository.
3. Remove unused meshes, cameras, lights, animations, and high-resolution textures.
4. Rework scale, material, silhouette, and composition so the result belongs to the VDG assembly.
5. Test the GLB without network access to ensure it does not depend on missing external textures.

Prefer CC0 assets when possible. A â€œfree downloadâ€ label alone is not sufficient permission.

**## 6G. Reduced-motion and fallback behavior**

Reduced motion is an authored version of the design, not the absence of design.

- Show the poster immediately with the same crop, caption, and registration mark as the 3D version.
- Do not load the 3D bundle when reduced motion is already requested at page load.
- Replace entrance transforms with either no transition or a short opacity change.
- Keep capability details open and process artifacts directly selectable.
- Never hide information that would otherwise be revealed by hover, motion, or canvas interaction.

If the preference changes during the session, stop active timelines, return DOM elements to their readable end state, dispose of the scene when practical, and keep the poster visible.

**## 6H. Anti-template review**

Before approval, review the page specifically for generated-design habits:

- Is the hero object made from VDG evidence rather than an abstract orb, knot, or logo sculpture?
- Do the three cases have different compositions because their evidence differs?
- Are any glows, grids, labels, badges, or monospace captions present without meaning?
- Does motion stop long enough for the visitor to inspect the work?
- Are the small irregularities deliberate and repeated just enough to become identity?
- Could a reviewer explain why each effect belongs to this exact section?

If an effect can be moved to another agency website without changing its meaning, remove or redesign it.

**## 7. Responsive behavior**

\| Breakpoint | Structure |

\| --- | --- |

\| Desktop â‰¥1280px | 12 columns, 1440px maximum canvas, 48px side margins; hero copy/object split |

\| Tablet 768â€“1279px | 8 columns, 32px side margins; cases retain image/text contrast but stack selectively |

\| Mobile <768px | 4 columns, 20px side margins; hero object becomes a static crop beneath copy; process becomes vertical |

Mobile should be an authored layout, not a shrunken desktop. Reduce metadata before reducing body text, preserve 44px minimum touch targets, and keep all interactive reveals available without hover.

**## 8. Accessibility and performance baseline**

\- Conform to WCAG 2.2 AA contrast and keyboard interaction expectations.

\- Retain visible focus rings using the electric blue token; never remove focus outlines without replacement.

\- Respect \`prefers-reduced-motion\`; avoid scroll-jacking and horizontally trapped scrolling.

\- Reserve media dimensions to prevent layout shift.

\- Load case images responsively in AVIF/WebP with an intentional low-detail placeholder.

\- Ship the 3D scene only after primary content is usable; code-split it and keep its initial asset budget under 500KB compressed.

\- Write alt text as project context, not as a list of visual properties.

**## 9. Build sequence**

1\. Confirm the actual work, proof points, service boundaries, and available imagery before writing final copy.

2\. Design the grid, type scale, color tokens, header, and no-JavaScript static hero composition.

3\. Build the selected-work sequence using real assets and case-study data.

4\. Add capability index, working-model rail, studio, and contact flow.

5\. Add hover/focus and entrance motion; verify the reduced-motion version first.

6\. Add the optional hero 3D enhancement only when its static fallback already succeeds visually.

7\. Test keyboard navigation, mobile layouts, page weight, and all form states before polish.

**## 10. Acceptance criteria**

The v2 design is ready to implement when it can answer yes to all of these:

\- Does the first screen identify VDG and give a human reason to continue without relying on visual spectacle?

\- Can a visitor understand the kinds of problems VDG solves by reviewing real work, not a tile grid?

\- Is blue used as a signal rather than a default fill color?

\- Does every animation have a purpose and a reduced-motion alternative?

\- Would the design still feel specific and confident if all 3D were disabled?

\- Are all claims, metrics, and project details demonstrably true or clearly marked as illustrative?

If the final answer to the fifth question is no, remove the 3D effect. The underlying page architecture must carry the identity.

**## 11. Codex implementation brief**

Use this brief after the static homepage structure and real project assets are present in the repository:

```text
Implement the VDG v2.1 hero spatial signature and supporting motion system from
this architecture document.

First inspect the existing framework, component structure, styling approach,
asset folders, and accessibility conventions. Preserve the current stack and
avoid unrelated redesigns.

Hero 3D requirements:
- Create one progressive-enhancement Three.js scene using React Three Fiber.
- Render the supplied hero-assembly.glb with semantic nodes: base_plate,
  system_map, product_frame, decision_strip, and signal.
- Use a fixed orthographic or long-lens camera, one rectangular key light, a dim
  fill, and one soft contact shadow.
- Implement Poster, Settle, Inspect, and Release states exactly as described in
  sections 6Aâ€“6B.
- Use demand-based rendering and pause when the hero is offscreen or the tab is
  hidden.
- Clamp DPR to 1â€“1.5 and keep the static poster beneath the canvas until the
  first successful frame.
- Do not load WebGL for reduced motion, coarse pointers, or widths below 768px.
- Do not put text, links, or essential content in the canvas.

DOM motion requirements:
- Implement only the effects assigned in section 6C.
- Use CSS or the Web Animations API for simple interaction states and GSAP only
  for coordinated sequences.
- Avoid a universal reveal component. Each case reveal direction must respond
  to its actual image composition.
- Make all end states readable when JavaScript, animation, or WebGL is disabled.

Quality requirements:
- Add tests for SceneGate decisions and reduced-motion behavior.
- Confirm keyboard navigation and focus visibility.
- Confirm no animation continues after unmount or visibility loss.
- Report the final GLB size, poster sizes, triangle count, draw calls, and mobile
  behavior.
- Run the existing lint, typecheck, test, and production build commands and fix
  errors caused by this work.

Before editing, summarize the files you expect to change. After implementation,
summarize the result with file references and list any missing real-world assets
that are still represented by placeholders.
```

**## 12. Technical references**

- Three.js `GLTFLoader`: https://threejs.org/docs/pages/GLTFLoader.html
- Three.js `AnimationMixer`: https://threejs.org/docs/pages/AnimationMixer.html
- React Three Fiber documentation: https://r3f.docs.pmnd.rs/
- Drei helpers: https://drei.docs.pmnd.rs/
- Khronos glTF Sample Assets and license examples: https://github.khronos.org/glTF-Assets/
- Poly Haven CC0 asset license: https://polyhaven.com/license
