# Portfolio 0.1 — Project Guide

## Overview

Personal portfolio site built with **React 16** + **React Router v5** + **React-Bootstrap 4**. Showcases ~14 projects with grid/detail views, media tabs (screenshots, video, demos), an about page with experience timeline, and a Netlify-powered contact form. Responsive layout with separate desktop/mobile navigation at 576px breakpoint.

**Build tooling:** Create React App + CRACO (for MDX webpack loader support). Scripts use `--openssl-legacy-provider` for Node compatibility.

## Commands

```bash
npm start    # Dev server (CRACO + legacy OpenSSL)
npm run build  # Production build
npm test     # Tests (craco test)
```

## Architecture

```
src/
├── index.js                         # Entry point, SiteProvider wrapper
├── App.js                           # Root — switches desktop/mobile nav at 576px
├── api/
│   ├── site-context.js              # React Context for shared state
│   ├── useSite.js                   # Hook to consume site context
│   └── useWindowDimensions.js       # Hook for viewport width/height
├── pages/
│   ├── Home.js                      # Landing page ("Finally here." + fade-in)
│   ├── About.js                     # Bio, experience, animated interest cloud
│   ├── Contact.js                   # Wrapper around ContactForm
│   └── Blog.js                      # DEAD — only renders test title
├── components/
│   ├── Content.js                   # Route switch + page title bar
│   ├── Navbar.js                    # Desktop nav (sticky after 100px scroll)
│   ├── NavBrand.js                  # Mobile brand text
│   ├── NavBarSmallMediaV2.js        # Mobile hamburger menu (active)
│   ├── NavMenuSideBar.js            # Slide-in menu content + project list
│   ├── HamburgerButtonSVG.js        # Animated hamburger/X icon (active)
│   ├── Title.js                     # Site logo ("Salli" / "Eetu")
│   ├── ContactForm.js               # Form with validation, POSTs to Netlify
│   ├── OrderByDropDown.js           # react-select dropdown (Newest/Oldest/A-Z)
│   ├── ReadMore.js                  # Collapsible section with animation
│   ├── ExperienceList.js            # Wrapper for experience items
│   ├── ExperienceItem.js            # Job entry with duration calculation
│   ├── AgeFromDate.js               # Age calculator from birthdate
│   ├── NavbarSmallMedia.js          # DEAD — legacy mobile nav (not imported)
│   └── HamburgerButton.js           # DEAD — static hamburger (not imported)
├── Projects/
│   ├── ProjectDisplay.js            # Routes /projects vs /projects/:id
│   ├── GridView.js                  # Card grid with sorting
│   ├── SingleView.js                # Detail page with tabs + sidebar
│   ├── GridButton.js                # Grid/detail view toggle
│   ├── ProjectDescription.js        # Description tab (HTML parsed from JSON)
│   ├── ProjectScreenshots.js        # react-image-gallery tab
│   ├── ProjectVideo.js              # react-player tab (local video)
│   ├── ProjectVideoEmbedded.js      # YouTube iframe tab
│   ├── ProjectDemo.js               # Interactive demo iframe tab
│   └── ProjectTagsSingleView.js     # Tech tag badges
└── assets/
    ├── data/
    │   ├── projects.json            # All project data (14 entries)
    │   ├── sitedata.json            # UNUSED — page metadata
    │   ├── style/app.css            # Global styles (~950 lines)
    │   └── blogs/example_blog.json  # UNUSED — test blog data
    └── images/
        ├── siteimages/              # Profile pics, logos
        └── [project-name]/          # Per-project screenshots
```

## Routing

| Path | Component | Description |
|------|-----------|-------------|
| `/home` | Home | Landing page (default redirect) |
| `/about` | About | Bio + experience + interests |
| `/projects` | GridView | Sortable project card grid |
| `/projects/:id` | SingleView | Project detail with media tabs |
| `/contact` | Contact | Contact form |
| `/blog` | — | Route commented out in Content.js |

## State Management

**React Context only** via `SiteContext`:
- `projectState[0]` — current project ID (URL-safe title string)
- `projectState[1]` — sort state object (`{value, label}`)
- Consumed via `useSite()` hook

## Data Flow

- **Project data**: `projects.json` → imported directly in components
- **Project titles → URLs**: spaces → underscores, dots → dashes (e.g., "Peek 0.9" → "Peek_0-9")
- **Project content**: `bodyEN` field contains raw HTML, parsed via `html-react-parser`
- **Contact form**: POSTs URL-encoded data to `/` for Netlify Forms

## Responsive Breakpoints

| Width | Behavior |
|-------|----------|
| ≤576px | Mobile: hamburger nav, single-column grid |
| >576px | Desktop: sticky horizontal nav |
| >768px | Project detail shows sidebar project list |
| >1200px | Wider layout adjustments |

## Styling

- **Bootstrap 4** for grid and base components
- **Global CSS** in `assets/data/style/app.css` — custom classes + keyframe animations
- **Inline styles** used in components for responsive logic
- CSS animations: `fadeInFirst`, `fadeInSlow`, `fadeIn` keyframes

## Key Libraries

| Library | Purpose |
|---------|---------|
| react-bootstrap | UI components (Card, Nav, Form) |
| react-router-dom v5 | Client-side routing |
| react-image-gallery | Screenshot lightbox in project detail |
| react-select | Custom dropdown for project sorting |
| react-player | Local video playback |
| react-icons | Grid/detail toggle icons |
| react-tooltip | Interactive tooltips on About page |
| html-react-parser | Render HTML from project JSON data |
| @craco/craco | CRA config override (MDX loader) |

## Dead Code & Unused Features

These exist in the codebase but are **not active**:

| Item | Status |
|------|--------|
| `Blog.js` + `/blog` route | Page exists but route is commented out; only renders test title |
| `example_blog.json` | Placeholder blog data (`{title: "Testi"}`) |
| `sitedata.json` | Metadata file — never imported by any active component |
| `NavbarSmallMedia.js` | Legacy mobile nav, replaced by `NavBarSmallMediaV2` |
| `HamburgerButton.js` | Static hamburger, replaced by `HamburgerButtonSVG` |
| `styled-components` | In package.json but no styled-component definitions in code |
| `react-dropdown` | In package.json but OrderByDropDown uses react-select |
| `react-animations` | In package.json but CSS keyframes used instead |
| `react-transition-group` | Imported but barely used |
| `@mdx-js/*` | Configured in CRACO but no .mdx files exist |
| Language system (`lang = "EN"`) | Hardcoded throughout — no i18n implemented |
| `rajapinta/` images | Image folder exists but no matching project in data |
| `testlogo*.png` (5 files) | Unused logo variants in siteimages/ |

## Notes

- React 16 (not 18) — uses older lifecycle patterns, no concurrent features
- React Router v5 (not v6) — uses `<Switch>`, `<Route component={}>` syntax
- Project IDs in URLs are derived from title transformation, not numeric IDs
- Contact form relies on Netlify Forms (hidden `form-name` field)
- Public demo iframes served from `public/assets/projects/`
