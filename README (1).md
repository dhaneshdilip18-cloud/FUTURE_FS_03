# 🌿 Fresh Harvest Market

**Premium Fruits & Vegetables — Delivered Daily**

A fully responsive, production-ready e-commerce landing page for a fresh produce business. Built with React, TypeScript, Vite, and Tailwind CSS.

🔗 **Live Demo:** [https://future-fs-03-rouge.vercel.app/](https://future-fs-03-rouge.vercel.app/)

---

## 📸 Overview

Fresh Harvest Market is a beautifully designed single-page application that showcases a local fresh produce store. It features product listings, category browsing, customer testimonials, daily stock updates, and a contact/ordering section — all in a smooth, animated interface.

---

## ✨ Features

- **Sticky Navbar** — Scroll-aware header that transitions from transparent to frosted glass
- **Hero Section** — Full-screen banner with animated floating product images and CTA buttons
- **Product Categories** — Browse Fruits, Vegetables, and Organic products
- **Featured Products Grid** — 8 products with organic badges, pricing in INR (₹), and "Add to Cart" interactions
- **About Section** — Brand story, values, and daily stock availability table
- **Testimonials** — Customer reviews with star ratings
- **Contact & Order Form** — Address, phone, email, hours, WhatsApp ordering link, and a contact form
- **Responsive Design** — Mobile-first layout with a hamburger menu
- **Smooth Animations** — Fade-in, slide-up, and floating CSS animations throughout

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Lucide React](https://lucide.dev/) | Icons |
| [@supabase/supabase-js](https://supabase.com/) | Backend (ready to integrate) |
| [PostCSS + Autoprefixer](https://postcss.org/) | CSS processing |

---

## 📁 Project Structure

```
FUTURE_FS_03-main/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── eslint.config.js
└── src/
    ├── main.tsx              # App entry point
    ├── App.tsx               # Root component (composes all sections)
    ├── index.css             # Global styles & custom animations
    ├── vite-env.d.ts
    ├── data/
    │   └── products.ts       # Product, category & testimonial data + interfaces
    └── components/
        ├── Header.tsx        # Sticky nav with mobile menu
        ├── Hero.tsx          # Full-screen hero with floating images
        ├── Categories.tsx    # Product category cards
        ├── FeaturedProducts.tsx  # Product grid
        ├── About.tsx         # Brand story + daily stock table
        ├── Testimonials.tsx  # Customer reviews carousel
        ├── Contact.tsx       # Contact info + order form + WhatsApp link
        └── Footer.tsx        # Site footer with links
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm or yarn

### Installation

```bash
# 1. Clone or unzip the project
cd FUTURE_FS_03-main

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with HMR |
| `npm run build` | Build for production (`dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |

---

## 📦 Product Data

All content is managed in `src/data/products.ts`. You can customize:

- **Categories** — id, name, icon (Lucide), image URL, description, item count
- **Featured Products** — name, category, price (in ₹), unit, image, organic/new badges
- **Testimonials** — name, role, avatar, review text, star rating
- **Daily Stock** — item name, status (`In Stock` / `Limited`), quantity

---

## 🎨 Customization

### Colors & Theme
Tailwind is configured in `tailwind.config.js`. The primary palette uses greens (`green-500`, `green-600`) with orange accents (`orange-400`, `orange-500`).

### Fonts
Custom display fonts are applied via `index.css`. Update the `font-display` utility class to swap typefaces.

### Contact Details
Update phone numbers, email addresses, WhatsApp number, and store address in `src/components/Contact.tsx` and `src/components/Header.tsx`.

---

## ☁️ Deployment

This project is deployed on **Vercel**. To deploy your own instance:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly in the [Vercel Dashboard](https://vercel.com/dashboard) for automatic deployments on every push.

---

## 🔌 Supabase Integration

The project includes `@supabase/supabase-js` as a dependency, ready for backend features such as:

- Storing contact form submissions
- Real-time inventory / stock updates
- User authentication for orders

To connect, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📄 License

This project is private. All rights reserved.

---

> Built with ❤️ using [Bolt.new](https://bolt.new)
