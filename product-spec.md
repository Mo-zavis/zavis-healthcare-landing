# Zavis product spec reference (for content writing)

This file contains the deeper product architecture, patient flow logic, and technical details that content writers need when describing how Zavis works. Read this when writing feature pages, product-focused blog posts, technical documentation, case studies, or any content that goes beyond surface-level positioning.

This is distilled from the internal tech spec. Not everything here should appear in marketing content — use judgment about what level of detail serves the reader.

---

## Table of contents

1. Product modules overview
2. Patient state engine and journey types
3. Core patient flows (the operational playbook)
4. AI agent behavior and guardrails
5. Workflow orchestrator
6. Channel strategy and WhatsApp rules
7. Analytics and ROI metrics
8. Pricing structure
9. Security and compliance
10. Roadmap (designed-in extensibility)

---

## 1. Product modules overview

Zavis is built as a set of modules that work together. When describing the product, you can reference individual modules or the platform as a whole, depending on the audience.

| Module | What it does | When to reference in content |
|--------|-------------|-------------------------------|
| Patient State Engine (Journey OS) | Tracks where every patient is in their journey and drives automated next steps | Feature pages, "how it works" content, technical blogs |
| Workflow Orchestrator | Runs deterministic IF/THEN/WAIT/ELSE automation that invokes AI agents within guardrails | Feature pages, workflow-focused content |
| AI Agent Runtime | Constrained AI workers that handle messaging, intent classification, and handoff decisions | AI-focused content, "how the AI works" sections |
| Omnichannel Messaging Layer | WhatsApp + SMS + Email + Voice with unified templates and channel routing | Channel strategy content, "why WhatsApp" content |
| Payments & Billing Nudges | Invoice reminders, payment links, partial payments, collections escalation | Revenue/payment-focused content |
| Staff Inbox | Escalation queue with conversation timeline and suggested replies | Operations-focused content |
| Analytics + ROI Dashboard | No-show rates, recovery rates, payment conversion, utilization uplift | ROI-focused content, case studies |
| Admin & Policy Center | Clinic policies, consent, retention controls, template library | Compliance and admin content |

## 2. Patient state engine and journey types

The Patient State Engine is the core of Zavis. Every patient in the system has a live state machine tied to their current journey. The engine tracks state transitions and triggers automated actions based on time and patient behavior.

### Journey types

- **AppointmentJourney** — Single appointment: Booked → Confirmed → Arrived → Completed → FollowUp
- **ProcedureSeriesJourney** — Multi-visit treatment (e.g., orthodontics, fertility cycles)
- **HomecarePlanJourney** — Weekly homecare plans with recurring visit confirmations
- **BillingJourney** — Invoice collection lifecycle
- **ReactivationJourney** — Win-back for dormant patients

### Appointment state machine (the most common journey)

```
Booked → (patient confirms) → Confirmed → (staff marks arrived) → Arrived → (appointment completed) → Completed → (post-visit flow) → FollowUp → Done

Booked → (no response by T-24h) → AtRisk → (no response by T-2h) → Escalated
Confirmed → (time passed, no arrival) → Missed → (recovery flow) → Rescheduled or Lost
```

### Risk scoring

Zavis calculates a no-show likelihood score (0 to 1, banded as low/medium/high) per patient based on:
- Past no-show history
- Booking lead time (short windows = higher risk)
- Time-of-day patterns
- How quickly the patient responds to messages
- Payment status (deposit paid = lower risk)
- Staff-flagged notes

High-risk patients get earlier escalation and voice AI calls. This is a key differentiator — most competitors treat all patients the same.

**Content angle:** When writing about no-show reduction, reference the risk scoring system. It shows Zavis is intelligent about resource allocation, not just blasting reminders at everyone.

## 3. Core patient flows

These are the operational workflows Zavis runs out of the box. When writing content about "what Zavis does," these flows are the concrete answer.

### Appointment confirmation flow

Goal: maximize confirmations with minimal touchpoints.

1. **T-72h:** WhatsApp template reminder sent
2. **Wait 6h:** Check if patient responded
3. **If yes:** Mark confirmed, send prep info
4. **If no (T-24h):** AI agent follow-up (conversational, not template)
5. **Wait 6h:** Check again
6. **If still no and high risk:** Voice AI call
7. **If still no (T-2h):** Final SMS ping (channel fallback)
8. **If unresolved:** Escalate to staff inbox

**Content angle:** The multi-step, multi-channel approach with risk-based escalation is what separates Zavis from simple reminder tools. Each step only fires if the previous one didn't get a response.

### Cancellation recovery flow

Goal: turn cancellations into reschedules.

1. Detect cancellation reason (structured or inferred from message)
2. Offer 2–3 alternative slots immediately
3. If no response: escalate to staff queue

### Missed appointment recovery flow

1. Acknowledge missed visit (neutral tone — no guilt-tripping)
2. Offer rebooking link
3. If repeated misses: request deposit per clinic policy

### Payment collection flow

1. **T+0:** Send payment link (invoice created or post-visit)
2. **T+24h:** Reminder
3. **T+72h:** Final notice + staff escalation

### Dormant reactivation flow

1. Definition of dormant: no visit in N days (configurable per clinic type)
2. Check-in message + value offer (non-discount by default)
3. If response: route into appointment booking path

**Content angle:** Reactivation is a revenue recovery tool. Clinics often lose patients not because of dissatisfaction, but because nobody followed up. Zavis automates this.

## 4. AI agent behavior and guardrails

This matters for content because healthcare buyers are skeptical about AI making mistakes with patients. Being specific about guardrails builds trust.

### How agents work

Each AI agent is constrained with:
- **Role:** What job it does (remind, recover, collect payment, triage, follow up)
- **Allowed actions:** What it can do (send message, fetch appointment data, fetch balance, create staff task)
- **Allowed data fields:** Minimum necessary access — agents don't see clinical notes unless explicitly allowed
- **Tone profile:** Configurable per clinic to match the organization's brand
- **Handoff rules:** When to escalate to a human
- **Output schema:** Structured output (intent classification, confidence score, next action, safety flags)

### What agents cannot do

- Give medical advice (routes to staff)
- Reveal PHI beyond policy
- Negotiate refunds unless policy allows
- Invent actions outside their allowed set
- "Freestyle" — agents work within defined guardrails

### Human-in-the-loop triggers

Agents escalate to human staff when they detect:
- Complaint keywords + high negative sentiment
- Refund requests
- Legal threats
- High-value invoice exceptions
- Medical advice requests
- Abusive content
- Any message involving restricted PHI fields

**Content angle:** "AI agents that don't freestyle" is a strong message for healthcare buyers. They want automation that's predictable and safe, not a chatbot that might say the wrong thing to a patient.

## 5. Workflow orchestrator

Workflows in Zavis are deterministic automation — not probabilistic AI. The workflow orchestrator runs step-by-step logic (send message, wait, check condition, branch, escalate) and can invoke AI agents at specific steps for message generation and intent classification.

### Step types available

- `send_message` / `send_template_message`
- `place_call` (voice AI)
- `wait` (time-based, e.g., until T-24h)
- `if` (conditional branching)
- `update_external_system` (write back to PMS)
- `create_staff_task` (escalation)
- `invoke_agent` (use AI for a specific step)
- `end`

### Key design principles

- **Deterministic branching:** Workflows follow explicit rules, not AI guesswork
- **Idempotent execution:** Safe to retry without duplicate messages
- **Versioned workflows:** Updates don't break in-flight patient journeys
- **Every step logged:** Full audit trail for compliance

**Content angle:** When writing about automation, emphasize that workflows are rule-based with AI invoked at specific points — not the other way around. This gives healthcare orgs confidence that patient communication is predictable.

## 6. Channel strategy and WhatsApp rules

### Channel priority

WhatsApp is the primary channel. SMS, email, and voice are fallbacks and complements, not equals.

### WhatsApp Business API constraints (important for accurate content)

- Free-form messages can only be sent within the 24-hour customer service window (triggered by the patient's last inbound message)
- Business-initiated messages outside this window must use Meta-approved templates
- Click-to-WhatsApp ads open a compliant thread that starts the 24-hour window

### Channel routing policy (per patient)

Zavis decides per patient:
- Primary channel
- Fallback channel (e.g., SMS if WhatsApp undelivered)
- Quiet hours (don't message at 3am)
- Language preference
- Max attempts per day
- Escalation thresholds

**Content angle:** Don't just say "omnichannel." Describe the actual fallback logic: if WhatsApp doesn't work, Zavis switches to SMS. If SMS doesn't work, voice call. Each step only fires when the previous one fails.

## 7. Analytics and ROI metrics

Zavis tracks operational ROI, not vanity metrics. When writing about analytics, use these specific metrics:

| Metric | What it measures |
|--------|-----------------|
| No-show rate | Baseline vs. post-Zavis comparison |
| Recovery rate | Canceled → rescheduled; missed → rebooked |
| Payment conversion rate | Invoice sent → paid |
| Response time | First response and resolution |
| Touchpoint cost | Cost per outbound message/call |
| Cost per recovered appointment | Total cost ÷ appointments saved |
| Utilization uplift | How much more of the schedule is filled |
| AI agent close rate | % of conversations resolved without human |
| Handoff rate | % escalated to staff |
| CSAT | Patient satisfaction score |
| Campaign ROI | Revenue attributed to broadcast campaigns |

**Content angle:** Lead with the metrics that matter to the audience. Hospital ops cares about no-show rate and utilization. Finance cares about payment conversion and cost per recovered appointment. Marketing cares about campaign ROI.

## 8. Pricing structure

### Philosophy

Zavis charges for operational value execution: touchpoints, voice minutes, active journeys. It avoids per-seat pricing and per-feature add-on sprawl.

### Billable units

- **Touchpoints:** Each outbound WhatsApp/SMS/email message
- **WhatsApp templates:** Business-initiated messages outside 24h window
- **Voice minutes:** Rounded up per call minute
- **Active journeys:** Distinct journeys with any activity in the billing period
- **Agent actions:** Agent invocations (can be bundled)

### Plan tiers

- **Starter:** Basic touchpoint and journey caps; WhatsApp + SMS + email; limited workflow library; no voice AI
- **Growth:** Higher caps; voice AI enabled with included minutes + overage; full workflow library; multi-location support
- **Enterprise:** Dedicated tenant option; SLA; custom workflows + approvals; audit exports + advanced retention

### Overage behavior

- Soft cap warnings at 80% and 95%
- Hard cap never stops in-flight clinical journeys — overages are billed automatically
- Non-critical campaigns (reactivation) can be paused instead

### Free trial / pilot

- Time-boxed (14–30 days)
- Pilot success metrics defined at start: baseline no-show rate vs. post, recovered visits count, payment conversion uplift
- Post-pilot plan recommendation based on observed usage

**Content angle:** The pricing philosophy is a selling point: you pay for outcomes executed, not seats filled. And overages never interrupt patient care.

## 9. Security and compliance

- TLS in transit, at-rest encryption
- Per-tenant encryption keys for enterprise
- Field-level access controls
- Immutable audit logs (system and application level) with configurable retention
- Minimum necessary data access — AI agents see only the fields their role requires
- Consent model with per-channel opt-out enforcement
- Data retention controls configurable per tenant
- HIPAA-relevant: Security Rule technical safeguards, audit trail expectations, minimum necessary principle
- Deployment options: multi-tenant SaaS, dedicated tenant (enterprise), on-prem (rare/regulated)

**Content angle:** For IT and compliance audiences, lead with minimum necessary access, immutable audit logs, and per-tenant encryption. For general audiences, keep it to "enterprise-grade security" backed by one or two specifics.

## 10. Roadmap (designed-in extensibility)

These are planned extensions. Don't present them as current features, but they can be referenced in forward-looking content if clearly marked:

- Pre-auth and insurance verification workflows
- Lab coordination
- Remote monitoring nudges
- Multi-language assistants (expanded)
- Specialty-specific template packs
