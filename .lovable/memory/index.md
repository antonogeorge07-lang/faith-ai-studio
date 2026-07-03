# Project Memory

## Core
- Stack: Lovable Cloud (Supabase). Database, Auth, Storage, Edge Functions.
- Theme: Futuristic minimalism. Black (#0A0A0A) base, Green accent (#00FFAB), White bg. Poppins/Inter fonts. 2xl rounded UI.
- Constraint: Never use the em dash character (—) anywhere in the codebase.
- Constraint: HTML root must include `translate="no"` to prevent browser auto-translation.
- Security: Permanent admin (antono.george07@gmail.com) auto-gets both `admin` and `owner` roles. Roles: owner, admin, designer.
- Preference: Every website shipped must be easy to hand over to the client (client-owned accounts, standard stack, handover docs).

## Memories
- [Color Palette](mem://design/color-palette) — Primary, accent, and background hex codes
- [Typography](mem://design/typography) — Font families, heading/body weights
- [Style Effects](mem://design/style-effects) — Border radii, glassmorphism, and animation details
- [Homepage Structure](mem://design/homepage-structure) — Section ordering and specific headings
- [Brand Essence](mem://design/brand-essence) — Mission statement and core styling ethos
- [Backend Stack](mem://architecture/backend-stack) — Database and backend service details
- [Contact Form Flow](mem://features/contact-form) — Now writes to `requests` table with title/category/priority. Rate-limited 3/hr/email. Sends `request-received` email with portal link to customer.
- [Owner Console](mem://features/owner-console) — /admin dashboard: Overview, Inbox (filters+bulk+drawer+scoring+notes), Kanban (drag-drop, realtime)
- [Customer Comms & Quotes](mem://features/customer-comms) — Phase 2: Messages tab, Quotes tab, status emails, public /r/:token portal
- [MVP Showcase Links](mem://features/mvp-showcase-links) — External URL mapping and WIP status for project cards
- [Admin Authentication](mem://authentication/admin-access) — Hardcoded roles and signup configuration
- [No Em-Dashes](mem://constraints/em-dash-removal) — Strict prohibition on em-dash characters
- [Prevent Auto-translation](mem://constraints/browser-auto-translation) — HTML attribute requirement
- [Language Switcher](mem://features/language-switcher) — List of 10 supported UI languages
- [OG Image](mem://branding/og-image) — Social sharing image asset location and meta tags
- [Content Systems](mem://features/content-systems) — Insights blog + Page-blocks CMS + persona pages, with routes and admin tabs
- [Easy Handover](mem://preferences/easy-handover) — Every site must be easy to hand over to the client
