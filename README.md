# AudioWeave Studio - AI Music Landing Page

AudioWeave Studio is a high-end, interactive landing page for an AI-powered music generation platform. It features a premium "Sonic Architect" design system, interactive waveforms, and a specialized "Album Generator" showcase.

## ✨ Features

- **Interactive Showcases**: Real-time audio playback with dynamic, interactive waveforms using `wavesurfer.js`.
- **Album Generator**: Dedicated section highlighting the platform's ability to transform scripts into full albums.
- **Premium Design System**: Adheres to the "Sonic Architect" visual philosophy—dark mode, glassmorphism, depth-based hierarchy (no hard lines), and ambient shadows.
- **Micro-animations**: Smooth transitions and layout animations powered by `framer-motion`.
- **Development Interceptor**: Integrated "Under Progress" modal to manage feature rollout while setting up the backend.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Audio Logic**: [wavesurfer.js](https://wavesurfer-js.org/)
- **Icons**: [Google Material Symbols](https://fonts.google.com/icons)

## 🚀 Local Setup

Follow these steps to get the project running on your local machine:

### Prerequisites

- [Node.js 18.x](https://nodejs.org/) or later
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd ai-music-landingpage
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Visit the site**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Configuration

### Disabling the "Development Under Progress" Modal
By default, interactive buttons (Generate, Purchase, Sign In) will open a "Coming Soon" modal. To disable this and integrate your actual backend:

1. Open `src/components/DevModalContext.tsx`.
2. Change exactly **Line 16** to:
   ```tsx
   const [isDevMode, setDevMode] = useState(false);
   ```

Refer to [AGENTS.md](./AGENTS.md) for more technical specifics on the development workflow.

## 📂 Project Structure

### Source Code (`/src`)

#### Components (`/src/components`)
- **`Navbar.tsx`**: Sticky header with glassmorphism and animated active link indicator.
- **`Hero.tsx`**: High-impact introduction featuring the main product tagline and AI prompt input.
- **`Features.tsx`**: A responsive grid showcasing platform capabilities with high-fidelity hover effects.
- **`AlbumGenerator.tsx`**: A specialized promotional section for the Story-to-Album feature.
- **`Showcases.tsx`**: Interactive component utilizing `wavesurfer.js` to play samples with real-time waveforms.
- **`Pricing.tsx`**: Subscription tier display with priority highlights for recommended plans.
- **`Contact.tsx`**: Sleek support form with refined input styling.
- **`FAQ.tsx`**: Frequently Asked Questions organized in a clean accordion layout.
*   **`CTA.tsx`**: Bottom-of-the-page conversion section to drive user sign-ups.
*   **`Scene3D.tsx`**: A high-performance Three.js particle field that provides a deep, slowly moving 3D background.
*   **`DevModalContext.tsx`**: A specialized React context that manages the "Development Under Progress" interceptor.

#### App Router (`/src/app`)
- **`layout.tsx`**: Configures global metadata, integrates Google Fonts (Inter, Space Grotesk, Manrope), and wraps the application in a global context provider.
- **`page.tsx`**: The main entry point that assembles all components into the single-page landing experience.
- **`globals.css`**: Defines the "Sonic Architect" design system tokens using Tailwind CSS v4 variables.

### Assets & Config
- **`/public/audio/`**: Contains the high-quality MP3 samples played in the Showcases section.
- **`AGENTS.md`**: Dev-specific instructions for managing the codebase.
- **`DESIGN.md`**: The visual source of truth for the platform's aesthetics.
- **`next.config.ts`**: Next.js project settings.
- **`tailwind.config.ts`**: Custom Tailwind configuration.

---

© 2026 AudioWeave Studio. Built with passion for the future of sound.
