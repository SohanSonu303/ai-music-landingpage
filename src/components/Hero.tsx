"use client";

import { useDevModal } from "./DevModalContext";

export default function Hero() {
  const { openModal } = useDevModal();

  return (
    <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 flex flex-col items-center text-center">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high text-tertiary border border-tertiary/20 mb-8 font-label text-sm uppercase tracking-tighter">
        <span
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          electric_bolt
        </span>
        The MUSIC Architect
      </div>
      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-on-surface mb-8 max-w-5xl whitespace-pre-line">
        From idea to full production in seconds Create Music{" "}
        <span className="text-primary text-glow italic whitespace-nowrap">
          Beyond Imagination
        </span>
      </h1>
      <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
        AI-powered platform that generates songs, music, albums, and sound effects
        in seconds. Step into the next gen of AI Music generation.
      </p>
      <div className="w-full max-w-3xl glass-panel p-2 rounded-full border border-outline-variant/15 flex items-center ambient-shadow mb-16">
        <span className="material-symbols-outlined ml-6 text-outline">
          music_note
        </span>
        <input
          className="flex-grow bg-transparent border-none focus:ring-0 outline-none px-4 text-on-surface placeholder:text-outline font-body"
          placeholder="Describe the vibe: Ethereal cyberpunk synthwave with heavy bass..."
          type="text"
        />
        <button
          onClick={openModal}
          className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold font-headline flex items-center gap-2 hover:brightness-110 transition-all font-body"
        >
          Generate Music
          <span className="material-symbols-outlined">
            keyboard_double_arrow_right
          </span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-8 w-full max-w-4xl opacity-80 md:grid-cols-3">
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="font-headline text-2xl font-bold text-on-surface">
            Quality
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-outline">
            Enhanced with AI
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="font-headline text-2xl font-bold text-on-surface">
            Split Audio
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-outline">
            Stem Support
          </span>
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <span className="font-headline text-2xl font-bold text-on-surface">
            Intelligent
          </span>
          <span className="font-label text-xs uppercase tracking-widest text-outline">
            AI technology crafts as per composition
          </span>
        </div>
      </div>
    </section>
  );
}
