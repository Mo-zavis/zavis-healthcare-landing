# Zavis brand and voice reference

Read this file before writing any Zavis content. It contains everything you need to stay on-brand.

---

## What Zavis is

Zavis is an AI-native patient success platform. "Patient success" in Zavis terms means operational execution to move a patient to their next intended milestone — confirmed visit, completed visit, paid invoice, follow-up done, reactivation. It is not a CRM, not an EMR replacement, and not a generic marketing automation tool.

The platform handles patient acquisition, engagement, scheduling, automation, and care coordination — primarily through WhatsApp, with omnichannel fallback across SMS, email, and voice AI. It integrates with healthcare EMRs (M@DAS, Practo, Unite, Helix) and supports 100+ app integrations.

**Primary markets:** Clinics, dental chains, hospitals, homecare providers, aesthetics clinics, fertility/maternity clinics, pharmacies, diagnostic labs.

**Core outcomes Zavis is built to deliver:** Reduce no-shows, increase utilization, improve payment conversion, improve retention and reactivation.

### Key concepts (use these terms correctly in content)

- **Journey:** A set of time-bound steps tied to a patient and a care episode. Journey types include AppointmentJourney (single visit), ProcedureSeriesJourney (multi-visit), HomecarePlanJourney (weekly plan), BillingJourney (invoice collection), and ReactivationJourney (dormant win-back).
- **Patient State Engine (Journey OS):** A live state machine per patient per journey. It tracks where each patient is (Booked → Confirmed → Arrived → Completed → FollowUp) and drives automated actions based on state transitions and time triggers.
- **Touchpoint:** Any outbound communication (WhatsApp, SMS, email, voice) and any inbound interaction Zavis processes.
- **Workflow:** Deterministic rule-driven automation (IF/THEN/WAIT/ELSE) that can invoke AI agents for message generation and intent classification within guardrails.
- **Agent:** A constrained AI worker with a narrow job — remind, recover, collect payment, triage, follow up. Agents do not "freestyle." Each agent has defined allowed actions, allowed data fields, tone profile, handoff rules, and an output schema.
- **Risk scoring:** Zavis calculates no-show likelihood per patient based on past no-shows, booking lead time, time-of-day patterns, channel response latency, payment status, and staff notes. High-risk patients trigger earlier escalation and voice calls.

### Core product capabilities

These are the things Zavis actually does. Don't claim capabilities beyond this list without confirming with the team.

**Patient administration**
- Pre-registration, identity capture, consent collection, and demographic intake — all inside WhatsApp
- Document and ID photo capture via chat
- Duplicate checks across locations
- Staff see a clean summary with configurable fields

**AI receptionist agent**
- 24/7 AI agent that greets patients, answers questions, collects demographics and ID photos, and creates contacts
- Maintains the organization's brand tone (tone profile is configurable per clinic)
- Handles multilingual conversations in real time
- Human handoff triggered by complaint keywords, refund requests, legal threats, medical advice requests, or restricted PHI fields

**Booking and scheduling**
- Live slot availability by doctor, department, and modality
- Collects reason for visit, referral code, insurance ID
- Patients can reschedule or cancel without calling
- Instant confirmation in chat

**Billing and payments**
- Itemized estimates and secure payment links for advance, co-pay, or full bill
- Receipts live beside the conversation
- Reconciliation with backend systems
- Configurable escalation to collections workflow
- Payment friction metrics (drop-off tracking)

**Broadcast and campaigns**
- Click-to-WhatsApp ads that open compliant threads
- Campaign broadcasts at scale
- Recall and rebook journeys
- Visit-day reminders with directions and queue updates
- WhatsApp Business API compliant templates for business-initiated messages outside the 24-hour service window

**Core patient flows (built-in operational workflows)**
- Appointment confirmation: T-72h template reminder → T-24h agent follow-up → voice call for high-risk → T-2h final ping → staff escalation if unresolved
- Cancellation recovery: detect reason, offer alternative slots, escalate to staff if no response
- Missed appointment recovery: acknowledge, offer rebooking, deposit request for repeat misses
- Payment collection: invoice → T+0 payment link → T+24h reminder → T+72h final notice + staff escalation
- Dormant reactivation: configurable dormancy threshold, check-in message, value offer, appointment booking path

**Diagnostics and results**
- Order intake, prep rule delivery, report distribution
- All within the chat thread

**Analytics and ROI dashboard**
- No-show rate (baseline vs. post-Zavis)
- Recovery rate (canceled → rescheduled; missed → rebooked)
- Payment conversion rate
- First response and resolution times
- AI agent close rate and handoff metrics
- Touchpoint cost and cost per recovered appointment
- Utilization uplift estimate
- CSAT, SLA tracking, campaign ROI, rebook conversions
- Filter by location, doctor, or channel
- Export or schedule reports

**Integrations**
- 100+ app integrations (Gmail, Salesforce, HubSpot, Shopify, Stripe, Zendesk, Slack, Teams, and many more)
- Healthcare EMR integrations: M@DAS, Practo, Unite, Helix
- PMS connectors: appointments, providers, calendars
- Payment gateway integrations for invoice status
- Integration methods: webhooks preferred, polling fallback, CSV import for bootstrap
- Click-to-WhatsApp ad integration with Meta

**Omnichannel messaging layer**
- WhatsApp (primary channel)
- SMS fallback
- Email (long form)
- Voice AI (inbound and outbound)
- Unified template and localization system
- Channel routing policy per patient (primary channel, fallback, quiet hours, language, max attempts per day)

**AI voice agents**
- Cloud call center with AI-powered calling agents
- Understand context, speak naturally, act instantly
- Resolve queries, create tickets, schedule callbacks, transfer to humans
- Multilingual voice support

**Staff inbox**
- Escalation queue (At Risk, Requires Human, Complaint, Refund)
- Conversation timeline (audit-friendly)
- Suggested replies with mandatory review toggles

**Admin and policy center**
- Clinic policies (hours, escalation rules, tone, languages)
- Consent model and patient preferences
- Data retention controls
- Template library and approvals

**Deployment options**
- Multi-tenant SaaS (default)
- Dedicated tenant for enterprise (separate DB, queues, optional separate VPC)
- On-prem for regulated environments (limited channel support)

**Security and compliance**
- TLS in transit, at-rest encryption, per-tenant keys for enterprise
- Field-level access controls
- Immutable audit logs with configurable retention
- Consent management and opt-out enforcement per channel
- Minimum necessary data access principle for AI agents

### Pricing philosophy

Zavis charges for operational value execution — patient touchpoints, voice minutes, active journeys — not per-seat or per-feature. Plans tier from Starter (limited workflows, no voice) to Growth (voice AI, multi-location, full workflow library) to Enterprise (dedicated tenant, SLA, custom workflows, audit exports). Overages never stop in-flight clinical journeys; non-critical campaigns pause instead.

### Who Zavis serves

**Primary segments:**

1. **Hospitals and multi-specialty clinics** — Department routing, queue updates, discharge follow-up, recalls, high-volume patient coordination across multiple locations
2. **Dental chains** — Appointment confirmations, recall reminders, multi-location coordination
3. **Fertility and maternity clinics** — Cycle-based reminders, antenatal class scheduling, scan scheduling, sensitive patient communication
4. **Aesthetics clinics** — Procedure series management, follow-up journeys, rebooking
5. **Homecare providers** — Weekly plan journeys, caregiver coordination, visit confirmation
6. **Pharmacies** — Prescription-on-file management, refill reminders, delivery tracking
7. **Diagnostic labs** — Test order intake, prep instructions, report delivery

**Geography:** Strong presence in the Middle East (UAE) and South Asia (India). The platform supports multilingual communication, which matters for regions with diverse patient populations.

### What Zavis is NOT (non-goals from the product team)

- Not a telemedicine platform (it doesn't do video consultations)
- Not an EHR/EMR/HIS/PMS replacement — Zavis reads what it needs from these systems and writes back only where allowed (e.g., appointment confirmation status)
- Not a general marketing automation platform
- Not a generic CRM (it's healthcare-specific)
- Not just a chatbot (it covers the full patient lifecycle from acquisition through care coordination)

---

## Brand voice

### The core principle

Zavis sounds like a smart, experienced colleague in healthcare operations — someone who's seen what works and what doesn't, explains things plainly, and backs up claims with specifics. Not a sales brochure. Not a tech bro. Not a consultant who uses jargon to sound impressive.

### Voice attributes

**Direct.** Say what you mean in the fewest words that are still clear. Healthcare operators are busy. Don't make them work to extract your point.

- Yes: "Patients book through WhatsApp. They see live slots, pick a time, and get confirmation — no phone call needed."
- No: "Our innovative scheduling solution empowers patients to seamlessly book appointments through their preferred messaging channel."

**Specific.** Replace abstract claims with concrete details. Specificity builds credibility.

- Yes: "The AI agent collects demographics, ID photos, and insurance details before the patient arrives."
- No: "Our AI streamlines the intake process for a better patient experience."

**Grounded.** Every claim should connect to something real — a feature, a workflow, a measurable outcome. If you can't point to what makes it true, cut it.

- Yes: "Reminders go out 24 hours and 2 hours before the appointment. No-show rates drop because patients can reschedule in the same thread."
- No: "Our intelligent reminder system dramatically reduces no-shows through cutting-edge automation."

**Warm but not soft.** Zavis content should feel approachable without being casual or cutesy. Healthcare is serious; patients trust providers who sound competent, not providers who sound like a lifestyle brand.

- Yes: "Setting up takes days, not months. We handle the WhatsApp Business API setup and EMR integration."
- No: "Getting started is super easy! 🎉 We'll have you up and running in no time!"

**Confident but not arrogant.** State what the product does without hedging ("might help," "could potentially"). But don't overclaim ("the only platform that..." "nothing else comes close").

- Yes: "Zavis handles appointment booking, reminders, and follow-ups — so your front desk can focus on patients who are actually in the room."
- No: "Zavis is the world's most advanced AI healthcare communication platform that revolutionizes every aspect of patient engagement."

### Tone by context

| Context | Tone adjustment |
|---------|----------------|
| Homepage / hero | Confident, clear, outcome-focused. Lead with what changes for the reader. |
| Feature page | Practical, detailed. Show how it works, not just what it is. |
| Blog post | Thoughtful, informed. Share a perspective, not just information. |
| Case study | Let the results speak. Minimal editorializing. |
| FAQ | Helpful, concise. Answer first, explain second. |
| Email outreach | Respectful of their time. One point, one ask. |
| WhatsApp templates | Native to chat. Short, clear, action-oriented. |
| Social media | Human, specific. Lead with insight or data, not product pitch. |
| Ad copy | Sharp, benefit-first. Earn the click with relevance, not hype. |

---

## Language rules

### Words and phrases to use

These sound like Zavis:

- "patient success" (the brand's core positioning — operational execution to move a patient to their next milestone)
- "journey" (the unit of work in Zavis — a patient + care episode with time-bound steps)
- "WhatsApp-first" or "WhatsApp-native"
- "care coordination"
- "front desk" (relatable term for healthcare staff)
- "in the chat thread" / "in the conversation"
- "live slots" (for scheduling)
- "prep rules" (for diagnostics)
- "recall" and "rebook" (for patient retention)
- "compliant thread" (for WhatsApp Business API context)
- "on-brand" (when discussing AI agent behavior)
- "queue clarity" (for visit-day experience)
- "risk scoring" / "no-show risk" (for the intelligence layer)
- "touchpoint" (any outbound or inbound communication — this is also a billing unit)
- "channel fallback" (when primary channel doesn't get a response)
- "staff escalation" (human handoff, not "transfer")
- "recovery flow" (turning cancellations or no-shows into rebooked appointments)
- "dormant reactivation" (win-back for patients who haven't visited in a while)
- "guardrails" (when describing AI agent constraints — they don't freestyle)
- "state machine" / "patient state" (when writing technical content about how journeys work)

### Words and phrases to avoid

These sound generic, inflated, or like every other SaaS company:

| Avoid | Use instead |
|-------|-------------|
| streamline | specify what gets faster or simpler |
| empower | say what the person can now do |
| leverage | "use" |
| seamless | describe the actual experience |
| cutting-edge / state-of-the-art | just describe what it does |
| revolutionary / groundbreaking | let the reader decide |
| holistic | name the specific parts |
| robust | describe what makes it solid |
| scalable | say what scales and to what size |
| end-to-end | name the start and end points |
| ecosystem | "integrations" or name the specific tools |
| synergy | don't |
| solution | "platform" or just "Zavis" |
| utilize | "use" |
| facilitate | say what happens |
| optimize | say what improves and by how much |
| paradigm / paradigm shift | describe the change |
| best-in-class | prove it with a specific |
| next-generation | describe what's actually new |
| digital transformation | say what changed |

### Sentence-level patterns

**Do this:**
- Start sentences with the subject or action, not with filler
- Use active voice by default
- Vary sentence length; mix short punchy sentences with longer explanatory ones
- Use "you" and "your" when addressing the reader
- Use "Zavis" by name rather than "the platform" or "our solution"

**Don't do this:**
- Start multiple consecutive sentences with the same word
- Use three-part lists as a rhetorical device ("Faster. Smarter. Better.")
- Bold the first few words of every bullet point
- Use semicolons in marketing copy (use a period and start a new sentence)
- Stack adjectives before nouns ("innovative AI-powered intelligent scheduling system")

---

## Audience-specific angles

### Hospital administrators and operations heads

They care about: staff efficiency, reducing no-shows, managing multi-department coordination, getting ROI from tech investments, compliance, and not disrupting existing workflows.

Angle: Show how Zavis reduces front-desk workload, handles department routing, and integrates with their existing EMR. Lead with operational outcomes, not tech specs.

### Clinic owners and medical directors

They care about: patient volume, retention, reputation, keeping costs down, and not adding complexity.

Angle: Show how Zavis fills appointment slots, automates recall and rebook, and handles patient communication without hiring more staff.

### IT and technical evaluators

They care about: integration with existing systems, security, compliance (HIPAA, data residency), API access, and deployment timeline.

Angle: Lead with integration depth (EMR connections, 100+ apps), WhatsApp Business API compliance, and setup speed.

### Marketing teams at healthcare organizations

They care about: patient acquisition cost, campaign performance, lead conversion, and attribution.

Angle: Show Click-to-WhatsApp ad integration, campaign analytics, conversation heatmaps, and ROI tracking.

---

## Formatting conventions

### Headings
- Sentence case ("How booking works" not "How Booking Works")
- Descriptive, not clever ("Automate patient intake" not "The future of first impressions")

### CTAs
- Action-oriented and specific
- Good: "Book a demo," "See how booking works," "Talk to us on WhatsApp"
- Bad: "Learn more," "Get started," "Discover the possibilities"

### Numbers and data
- Use specific numbers when available ("24-hour and 2-hour reminders" not "timely reminders")
- Don't fabricate statistics. If you don't have a real number, describe the outcome qualitatively.

### Product name
- Always "Zavis" — capitalized, no "the" before it in most contexts
- On first mention in a piece, you can add context: "Zavis, an AI-powered patient success platform"
- Don't alternate between "Zavis," "the platform," "our solution," "the system" — just use "Zavis"

### Competitors
- Never name competitors directly in marketing content
- Position Zavis based on its own strengths, not competitors' weaknesses
- If comparison is needed (e.g., blog post), compare categories ("generic chatbot platforms" vs. "healthcare-built platforms") not brands
