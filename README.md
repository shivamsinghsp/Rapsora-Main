# RapSora Technologies

> The official web platform for RapSora — delivering premium digital solutions across Strategy, Design, Engineering, and Growth.

## Overview

RapSora is a modern digital agency platform built with Next.js 15, React 19, TypeScript, and Tailwind CSS. The codebase features a comprehensive, multi-section architecture with dedicated service landing pages, interactive 3D and canvas hero showcases, live telemetry monitors, and conversion-engineered client funnels.

---

## Service Architecture

### 1. Develop
- **Web Development** (`/services/web-development`)
- **Mobile App Development** (`/services/mobile-app-development`)
- **Desktop App Development** (`/services/desktop-app-development`)
- **UI / UX Design Services** (`/services/ui-ux`)
- **AI Integration Services** (`/services/ai-integration`)
- **End-to-End Solutions** (`/services/end-to-end-development`)
- **E-commerce Application & Management** (`/services/ecommerce`)
- **AI Chatbot & Audio Bot Solutions** (`/services/ai-chatbot`)
- **ERP Systems** (`/services/erp`)
- **CRM Platforms** (`/services/crm`)

### 2. Design (`/design`)
- **Brand Identity** (`/design/branding` & `/services/branding`)
- **Web Design** (`/design/web-design` & `/services/web-design`)
- **UI/UX Design** (`/design/ui-ux` & `/services/ui-ux`)
- **Graphic Design** (`/design/graphic-design` & `/services/graphic-design`)
- **Motion Design** (`/design/motion-design` & `/services/motion-design`)

### 3. Marketing (`/marketing`)
- **SEO & Organic Growth** (`/marketing/seo-organic-growth` & `/services/seo`)
- **Content Strategy** (`/marketing/content-strategy` & `/services/content-strategy`)
- **Social Media Marketing** (`/marketing/social-media` & `/services/social-media`)
- **Email Marketing** (`/marketing/email-marketing` & `/services/email-marketing`)

### 4. Support (`/support`)
- **Website Management** (`/support/website-management` & `/services/website-management`)
- **Hosting & Security** (`/support/hosting-security` & `/services/hosting-security`)
- **Analytics & Reporting** (`/support/analytics-reporting` & `/services/analytics-reporting`)
- **Consultation** (`/support/consultation` & `/services/consultation`)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Motion & Graphics:** [Framer Motion](https://www.framer.com/motion/), Three.js / WebGL, Lucide Icons
- **Typography:** Gilroy & Satoshi
- **Database / Auth:** MongoDB & NextAuth.js (configured via `.env.local`)

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shivamsinghsp/Rapsora-Main.git
cd Rapsora-Main
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Copy the example template and supply your credentials:
```bash
cp .env.example .env.local
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## Build & Quality Verification

```bash
# Typecheck
npx tsc --noEmit
```

---

## License

Private & Proprietary — © RapSora Technologies. All rights reserved.
