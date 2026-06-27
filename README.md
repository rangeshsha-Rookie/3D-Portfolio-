# 🌐 3D Portfolio — Rangesh Gupta

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-brightgreen)

An **interactive 3D personal portfolio** built with React 19, Three.js, and @react-three/fiber. Features immersive WebGL 3D scenes, smooth parallax animations via Motion, an AI-powered chat assistant using the Gemini API, a vertical timeline for experience, and a fully responsive layout powered by Tailwind CSS v4.

---

## ✨ Features

- 🌐 **Interactive 3D Scenes** — WebGL-powered 3D models and environments using Three.js + @react-three/fiber
- 🎞️ **Parallax Tilt Cards** — Project cards with depth tilt effect via `react-parallax-tilt`
- 🤖 **AI Chat Assistant** — Gemini API (@google/genai) integrated for an interactive portfolio chat experience
- ⏳ **Vertical Timeline** — Work experience and education rendered with `react-vertical-timeline-component`
- 🎨 **Smooth Animations** — Framer-Motion-compatible animations via `motion` library
- 🖥️ **Drei Helpers** — @react-three/drei utilities for orbit controls, loaders, and environment maps
- 📧 **Contact Form** — Email functionality via Express backend (`/backend` powered by `express`)
- 🌙 **Dark Theme** — Fully dark-mode-first design with Tailwind CSS v4
- ⚡ **Lightning-Fast Dev** — Vite 6 with HMR for instant feedback during development

---

## 🗂️ Project Structure

```
3D-Portfolio-/
├── index.html              # HTML entry point
├── vite.config.ts          # Vite + React + Tailwind plugin config
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies & scripts
├── metadata.json           # Portfolio metadata (name, title, links)
├── .env.example            # Environment variable template
├── src/
│   ├── components/         # Reusable React components
│   ├── sections/           # Page sections (Hero, About, Projects, etc.)
│   ├── canvas/             # Three.js / R3F 3D canvas components
│   ├── assets/             # 3D models, textures, images
│   ├── constants/          # Static data (experience, projects, skills)
│   └── main.tsx            # React app entry point
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm v9+

### 1. Clone the Repository

```bash
git clone https://github.com/rangeshsha-Rookie/3D-Portfolio-.git
cd 3D-Portfolio-
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

Key variables:
```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Start Development Server

```bash
npm run dev
```

> Opens at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm run preview
```

---

## 🧠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 + TypeScript |
| 3D Engine | Three.js v0.183 + @react-three/fiber v9 |
| 3D Helpers | @react-three/drei v10 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animation | Motion v12 (Framer Motion) |
| AI | Google Gemini API (@google/genai) |
| Icons | Lucide React |
| Tilt Effect | react-parallax-tilt |
| Timeline | react-vertical-timeline-component |
| Backend | Express.js (contact form) |
| Math Utils | maath (3D math helpers) |

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type checking (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` folder |

---

## 🌟 Sections

- **Hero** — 3D animated hero with floating elements
- **About** — Tilt card with personal intro and tech stack
- **Experience** — Vertical timeline of education & roles
- **Projects** — 3D tilt project cards with live/repo links
- **Skills** — Tech stack display with 3D ball canvas
- **Contact** — 3D earth canvas + functional contact form
- **AI Chat** — Gemini-powered chat assistant about me

---

## ⚙️ Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key for AI chat | Yes |

See `.env.example` for the full list.

---

## 📚 What I Learned

- Building immersive 3D web experiences with Three.js and @react-three/fiber
- Integrating Google Gemini API for real-time AI chat in a portfolio context
- Advanced React patterns with TypeScript in a Vite monorepo setup
- Tailwind CSS v4 configuration with `@tailwindcss/vite` plugin
- Optimizing 3D scenes for performance (lazy loading, Suspense, Drei loaders)

---

## 👨‍💻 Author

**Rangesh Gupta** — AI Builder | Data Analyst | Google Student Ambassador 2026

- GitHub: [@rangeshsha-Rookie](https://github.com/rangeshsha-Rookie)
- LinkedIn: [in/rangesh-gupta](https://linkedin.com/in/rangesh-gupta)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
