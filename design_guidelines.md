# Design Guidelines: Demo Tracker for Solution Consultants

## Design Approach

**Reference-Based: Modern SaaS Productivity Tools**
Drawing inspiration from Linear, Notion, Salesforce Lightning, and modern data-centric applications that prioritize efficiency, clarity, and data visualization.

**Core Principles:**
- Speed and efficiency in data entry
- Clear data hierarchy and scannable information
- Professional, trustworthy aesthetic for enterprise users
- Seamless integration feedback with Salesforce

---

## Color Palette

### Light Mode
- **Primary Brand:** 217 91% 60% (Professional blue - trust and reliability)
- **Background:** 220 14% 96% (Soft neutral background)
- **Surface:** 0 0% 100% (Pure white for cards/panels)
- **Text Primary:** 220 9% 15%
- **Text Secondary:** 220 9% 46%
- **Border:** 220 13% 91%
- **Success (Closed/Won):** 142 76% 36%
- **Warning (In Progress):** 38 92% 50%
- **Info (Scheduled):** 217 91% 60%

### Dark Mode
- **Primary Brand:** 217 91% 65%
- **Background:** 222 47% 11% (Deep navy-dark)
- **Surface:** 217 33% 17% (Elevated cards)
- **Text Primary:** 210 40% 98%
- **Text Secondary:** 215 20% 65%
- **Border:** 217 33% 24%

---

## Typography

**Font Stack:**
- **Primary:** 'Inter' (Google Fonts) - Clean, modern, excellent readability for data
- **Monospace:** 'JetBrains Mono' - For case links, IDs, technical data

**Hierarchy:**
- **Dashboard Headers:** text-2xl font-semibold (32px)
- **Card Titles:** text-lg font-medium (18px)
- **Data Labels:** text-sm font-medium uppercase tracking-wide (12px)
- **Body/Values:** text-base (16px)
- **Metadata:** text-sm text-secondary (14px)
- **Tables:** text-sm for optimal density

---

## Layout System

**Spacing Primitives:** Consistent use of Tailwind units: 2, 4, 6, 8, 12, 16, 20
- Component padding: p-6 to p-8
- Section spacing: mb-8 to mb-12
- Card gaps: gap-6
- Form fields: space-y-4

**Grid Structure:**
- Dashboard: 12-column grid system
- Sidebar: Fixed 280px width on desktop, overlay on mobile
- Main content: max-w-7xl with px-6 lg:px-8
- Charts section: 2-column grid (lg:grid-cols-2) with gap-6

---

## Component Library

### Navigation
- **Top Bar:** Fixed header with logo, global search, notifications, user profile
- **Sidebar:** Collapsible navigation with Dashboard, Demo Log, Insights, Accounts sections
- **Active states:** Accent border-left (4px) with subtle background tint

### Demo Logging Form
- **Layout:** Centered modal/sheet (max-w-2xl) with backdrop blur
- **Fields:** Full-width inputs with clear labels above
- **Salesforce Integration:** Real-time badge showing sync status ("Synced", "Syncing...", "Error")
- **CTA:** Primary button (large, full-width on mobile)

### Data Tables
- **Header:** Sticky with sort indicators, filter chips
- **Rows:** Hover state with subtle elevation, clickable for detail view
- **Status badges:** Rounded-full px-3 py-1 with status-specific colors
- **Density:** Compact (text-sm) with adequate breathing room (py-3)

### Dashboard Cards
- **Container:** Rounded-lg border bg-surface shadow-sm
- **Header:** Flex justify-between with title and action button/icon
- **Content:** p-6 with clear metric displays
- **Charts:** Integrated using Chart.js/Recharts with brand color palette

### Charts & Visualizations
- **Bar Charts:** For demo distribution by stage/segment
- **Line Charts:** For trends over time
- **Donut Charts:** For deal stage breakdowns
- **Color coding:** Consistent with status/stage colors
- **Tooltips:** On hover with detailed breakdowns

### Account Prioritization View
- **Card Layout:** Ranked list with priority score visualization
- **Metrics Display:** Inline stats (demos count, last demo date, deal stage)
- **Action Buttons:** Quick "View in Salesforce" link (external icon)

### Filters & Search
- **Filter Bar:** Horizontal pill-style multi-select filters
- **Search:** Global search with dropdown suggestions
- **Date Range:** Calendar picker with presets (Today, This Week, This Month)

---

## Animations

**Minimal & Purposeful:**
- Sidebar: slide-in/out (200ms ease)
- Modal overlays: fade + scale (150ms)
- Loading states: subtle skeleton screens or spinner
- Chart reveals: staggered animation on initial load (300ms)
- NO excessive hover effects or distracting movements

---

## Images

**No Hero Image Required** - This is a utility application
- Salesforce logo integration in sync status indicators
- User avatars in activity feeds (if applicable)
- Empty state illustrations for "No demos logged" (simple line art)
- Chart.js/Recharts for all data visualizations

---

## Key UX Patterns

1. **Quick Actions:** Floating "+" button for new demo entry (fixed bottom-right on mobile)
2. **Breadcrumbs:** Show navigation path in detail views
3. **Bulk Actions:** Checkbox selection in tables with action bar
4. **Responsive Strategy:** Sidebar → hamburger menu on mobile, cards stack vertically
5. **Loading States:** Show skeleton UI during Salesforce API calls
6. **Error Handling:** Toast notifications (top-right) with retry actions
7. **Success Feedback:** Subtle checkmark animation on successful Salesforce sync