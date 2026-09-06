# Story 07 — Contact form visual redesign without delivery changes

## User story

As a prospective client, I want a focused inquiry form that tells me what happens next so that I can contact VDG with confidence.

## Scope

- Restyle the existing contact section and form to match v2’s quieter, editorial design.
- Preserve the current fields, validation behavior, service selection, success/error feedback, and EmailJS office-email delivery exactly as implemented.
- Make the acknowledgement inline rather than using a celebratory modal treatment, only if this does not alter the existing sending/result logic.

## Acceptance criteria

- No EmailJS service ID, template ID, public key, recipient behavior, payload field name, or submit handling is changed.
- Existing validation and error/success behavior remain functional after the visual work.
- Inputs have a 44px minimum height, high-contrast text, visible labels, and electric-blue keyboard focus rings.
- The section clearly states the expected response window using the currently approved copy only.
- The form is usable by keyboard and screen reader and remains legible on a 320px viewport.
- No fabricated budget guidance, client names, success metrics, or contact channels are introduced.

## Out of scope

- Contact backend changes, email template changes, CAPTCHA, CRM integration, or form-field changes.

## Dependencies

- Stories 01 and 02; existing `src/components/Contact.tsx` behavior.

