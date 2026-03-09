# MOVRR Analytics Event Taxonomy

This document defines the current landing-page analytics events tracked through `@vercel/analytics`.

It is intended for product, growth, and marketing handoff so event names and properties can be used consistently in reporting, dashboards, and experiment analysis.

## Scope

Current coverage includes:
- hero CTA interactions
- hero trust-signal visibility
- mid-page CTA interactions
- city-launch CTA and city-prefill behavior
- waitlist form engagement
- waitlist form submission outcomes

## Event Naming Rules

- Use title case event names.
- Keep names action-oriented and human-readable.
- Reuse existing event names instead of creating near-duplicates.
- Prefer properties for segmentation over creating many similar event names.

## Event Inventory

### Hero

#### `Join Waitlist Clicked`
- Fires when the primary hero CTA is clicked.
- Source: `components/hero-section.tsx`
- Properties: none

#### `See How It Works Clicked`
- Fires when the secondary hero CTA is clicked.
- Source: `components/hero-section.tsx`
- Properties: none

#### `Hero Trust Signals Viewed`
- Fires once when the hero trust-signal row becomes visible.
- Source: `components/hero-section.tsx`
- Properties:
  - `signalCount` number of trust items shown

### Benefits Section

#### `Benefits Join Waitlist Clicked`
- Fires when the mid-page CTA in the benefits section is clicked.
- Source: `components/benefits-section.tsx`
- Properties: none

### City Launch

#### `Waitlist City Prefilled`
- Fires when a city card is clicked and a city is pushed into the waitlist form flow.
- Source: `components/launch-showcase-section.tsx`
- Properties:
  - `city` selected city name
  - `source` always `city-launch-card`

#### `Join Waitlist Clicked - {City}`
- Fires when a city-card CTA is clicked.
- Source: `components/launch-showcase-section.tsx`
- Current variants:
  - `Join Waitlist Clicked - Rotterdam`
  - `Join Waitlist Clicked - Amsterdam`
  - `Join Waitlist Clicked - Utrecht`
  - `Join Waitlist Clicked - The Hague`
- Properties:
  - `source` always `city-launch-card`
  - `city` selected city name

### Waitlist Form

#### `Waitlist City Field Updated`
- Fires when the city field is populated from a city-card selection.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `city` selected city name
  - `source` always `city-launch-card`

#### `Waitlist Trust Notes Viewed`
- Fires once when the trust-note row below the form button becomes visible.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `noteCount` number of trust notes shown
  - `locale` active locale

#### `Waitlist Form Started`
- Fires once per form session when the user first interacts with any field.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `field` first interacted field
  - `locale` active locale

#### `Waitlist Bike Ownership Selected`
- Fires when the optional bike ownership field is selected.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `value` selected option: `yes`, `no`, or `planning`
  - `locale` active locale

#### `Waitlist Bike Details Revealed`
- Fires when the optional bike ownership field is expanded into view.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `locale` active locale

#### `Waitlist Form Submitted`
- Fires on successful waitlist submission.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `locale` active locale
  - `bikeOwnershipProvided` boolean

#### `Waitlist Form Submission Failed`
- Fires when a submission attempt fails.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `locale` active locale
  - `reason`
    - `server_validation`
    - `network_or_unknown`

#### `Waitlist Form Reset Clicked`
- Fires when the user clicks the post-success reset button to return to the form.
- Source: `components/forms/waitlist-form.tsx`
- Properties:
  - `locale` active locale

## Funnel View

Recommended primary funnel:

1. `Join Waitlist Clicked`
2. `Benefits Join Waitlist Clicked`
3. `Join Waitlist Clicked - {City}`
4. `Waitlist Form Started`
5. `Waitlist Form Submitted`

Recommended support signals:

- `Hero Trust Signals Viewed`
- `Waitlist Trust Notes Viewed`
- `Waitlist City Prefilled`
- `Waitlist Bike Ownership Selected`
- `Waitlist Form Submission Failed`

## Suggested Dashboard Cuts

Use these dimensions when analyzing performance:
- locale
- city
- CTA source
- bike ownership provided vs not provided
- success vs failure

## Current Gaps

Not yet tracked:
- form field-level validation errors
- scroll depth
- FAQ expansion behavior
- product concept accordion interaction
- page performance metrics beyond platform defaults

## Change Management

When adding a new event:

1. Reuse an existing event if the user action is materially the same.
2. If a new event is needed, add it here in the same PR.
3. Prefer adding properties instead of creating multiple near-duplicate event names.
4. Keep event names stable once dashboards depend on them.
