# ZAVIS Homepage - Image Generation Specifications

## Overview
Generate 3 healthcare SaaS interface mockups for the Workflows section. All images should have a clean, modern aesthetic matching enterprise healthcare software.

---

## Image 1: Front Office Automation
**Filename:** `front-office.jpg`
**Dimensions:** 1600 x 1000px (16:10 aspect ratio)
**Format:** JPG or WebP

### Visual Content:
- **Primary Element:** Healthcare call/scheduling interface dashboard
- **Screen Elements to Include:**
  - Incoming call notification panel (patient name, reason for call)
  - Calendar/scheduling grid showing available appointment slots
  - Patient conversation thread (SMS/chat interface)
  - Quick action buttons: "Schedule Appointment", "Send Forms", "Transfer to Nurse"

### Style Requirements:
- Clean, minimal UI with white/light gray backgrounds
- Teal accent color (#0B3D3C) for primary buttons
- Purple highlights (#6366F1) for notifications
- Professional medical iconography
- Realistic patient data (use placeholder names like "Sarah M.")
- Modern sans-serif typography

### Context:
This image represents the front desk experience - handling incoming calls, scheduling appointments, and managing patient communications in real-time.

---

## Image 2: Back Office Automation
**Filename:** `back-office.jpg`
**Dimensions:** 1600 x 1000px (16:10 aspect ratio)
**Format:** JPG or WebP

### Visual Content:
- **Primary Element:** Administrative dashboard showing automated workflows
- **Screen Elements to Include:**
  - Billing automation panel (invoice status, payment reminders)
  - No-show follow-up queue with automated message templates
  - Administrative task list with automation rules
  - Analytics/metrics panel showing efficiency gains

### Style Requirements:
- Professional, data-focused interface
- Use of tables, charts, progress indicators
- Beige/neutral backgrounds (#F5F1ED)
- Teal and purple accent colors
- Clear status indicators (completed, pending, automated)
- Clean iconography for different task types

### Context:
This image represents back-office efficiency - billing, follow-ups, administrative tasks running on autopilot with staff oversight.

---

## Image 3: Practice Growth
**Filename:** `grow-practice.jpg`
**Dimensions:** 1600 x 1000px (16:10 aspect ratio)
**Format:** JPG or WebP

### Visual Content:
- **Primary Element:** Marketing/growth campaign management interface
- **Screen Elements to Include:**
  - Patient inquiry dashboard (new leads, response times)
  - Recall campaign builder with patient segments
  - Conversion metrics panel (inquiry → appointment rate)
  - Automated message templates for different campaign types

### Style Requirements:
- Growth-focused, campaign management aesthetic
- Visual emphasis on metrics and conversion funnels
- Purple accent for campaign elements (#6366F1)
- Graphs showing upward trends
- Patient segment cards with demographics
- Professional, optimistic color palette

### Context:
This image represents practice growth capabilities - handling inquiries, running recall campaigns, and converting leads into appointments.

---

## Technical Requirements for All Images

### Color Palette:
- **Primary:** #0B3D3C (Dark Teal) - Headers, primary buttons
- **Secondary:** #6366F1 (Purple) - Highlights, notifications, accents
- **Background:** #F5F1ED (Beige), #FFFFFF (White)
- **Text:** #0A0B0D (Dark), #2D3748 (Body), #718096 (Muted)

### Typography:
- Use clean, modern sans-serif fonts
- DegularDisplay-inspired for headings if available
- System UI fonts acceptable for interface text

### Interface Elements:
- Rounded corners (4-8px border radius)
- Subtle shadows for depth
- Clean, minimal iconography
- Professional medical/healthcare context
- Realistic but placeholder data

### Optimization:
- Export as WebP for best quality/size ratio
- Fallback JPG at 85% quality
- Ensure text is readable at 800px width (responsive scaling)

---

## AI Image Generation Prompts

### For Freepik or Similar Tools:

**Front Office Automation:**
```
Modern healthcare SaaS dashboard interface showing call handling and scheduling. Clean white UI with teal and purple accents. Features: incoming call notification, appointment calendar grid, patient chat interface, action buttons. Professional, minimal design. 1600x1000px, UI/UX mockup style.
```

**Back Office Automation:**
```
Healthcare administrative dashboard showing billing automation and task management. Data-focused interface with tables, charts, automation status indicators. Beige and white backgrounds, teal and purple accents. Professional medical software aesthetic. 1600x1000px, enterprise SaaS UI mockup.
```

**Practice Growth:**
```
Healthcare marketing campaign dashboard showing patient inquiry management and recall campaigns. Conversion metrics, patient segments, automated messaging templates. Growth-focused interface with upward trend graphs. Purple and teal accents. 1600x1000px, modern SaaS UI design.
```

---

## Placement in Website

These images will appear in the **Workflows Showcase** section (Section 6) in split layouts:

1. **Front Office** - Left: Image | Right: Content
2. **Back Office** - Left: Content | Right: Image (reversed)
3. **Practice Growth** - Left: Image | Right: Content

The CSS maintains 16:10 aspect ratio with lazy loading. Images will scale responsively:
- Desktop: ~600px width
- Tablet: ~400px width
- Mobile: Full width, stacked below content

---

## Delivery Instructions

1. **Generate images** using Freepik or AI image generator
2. **Export at 1600x1000px** for retina display quality
3. **Optimize for web** (WebP preferred, JPG fallback)
4. **Place in `/images/` directory** with exact filenames:
   - `front-office.jpg` (or .webp)
   - `back-office.jpg` (or .webp)
   - `grow-practice.jpg` (or .webp)

5. **Test responsive scaling** - images should look sharp at all breakpoints

---

## Notes

- All images should feel like **realistic healthcare software interfaces**, not generic stock photos
- Emphasize the **operational/enterprise nature** of the platform
- Use **placeholder patient data** (never real patient information)
- Maintain **visual consistency** across all three images (similar UI patterns, color usage)
- Images should communicate **automation + control** - staff can see and intervene

**Created:** 2026-01-24
**For:** ZAVIS Healthcare Homepage Workflows Section
