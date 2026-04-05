"use client";

import { useDevModal } from "./DevModalContext";
import Scene3D from "./Scene3D";

export default function Hero() {
  const { openModal } = useDevModal();

  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center pt-24">
      <Scene3D />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-32 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-tertiary border border-tertiary/20 mb-6 font-label text-xs md:text-sm uppercase tracking-tighter">
          <span
            className="material-symbols-outlined text-sm md:text-base"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            electric_bolt
          </span>
          The MUSIC Architect
        </div>
        <h1 className="font-headline text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface mb-6 max-w-5xl">
          From idea to full production in seconds Create Music{" "}
          <span className="text-primary text-glow italic">
            Beyond Imagination
          </span>
        </h1>
        <p className="font-body text-base md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          AI-powered platform that generates songs, music, albums, and sound effects
          in seconds. Step into the next gen of AI Music generation.
        </p>

        <div className="w-full max-w-3xl glass-panel p-2 md:p-2 rounded-2xl md:rounded-full border border-outline-variant/15 flex flex-col sm:flex-row items-center ambient-shadow mb-16 gap-2 sm:gap-0">
          <div className="flex items-center flex-grow w-full px-4 py-2 sm:py-0">
            <span className="material-symbols-outlined text-outline">
              music_note
            </span>
            <input
              className="flex-grow bg-transparent border-none focus:ring-0 outline-none px-4 text-on-surface placeholder:text-outline font-body text-sm md:text-base"
              placeholder="Describe the vibe: Cyberpunk synthwave..."
              type="text"
            />
          </div>
          <button
            onClick={openModal}
            className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3 rounded-xl sm:rounded-full font-bold font-headline flex items-center justify-center gap-2 hover:brightness-110 transition-all font-body text-sm md:text-base"
          >
            Generate
            <span className="material-symbols-outlined">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl opacity-80">
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              High Fidelity
            </span>
            <span className="font-label text-[10px] md:text-xs uppercase tracking-widest text-outline">
              Studio Quality AI
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              Full Stems
            </span>
            <span className="font-label text-[10px] md:text-xs uppercase tracking-widest text-outline">
              Professional Control
            </span>
          </div>
          <div className="flex flex-col items-center gap-1 text-center">
            <span className="font-headline text-xl md:text-2xl font-bold text-on-surface">
              Intelligent
            </span>
            <span className="font-label text-[10px] md:text-xs uppercase tracking-widest text-outline">
              Narrative Driven
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
