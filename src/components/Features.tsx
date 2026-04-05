export default function Features() {
  return (
    <section id="features" className="max-w-7xl mx-auto px-8 py-24">
      <div className="mb-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">
          Master Your <span className="text-tertiary">Frequency</span>
        </h2>
        <p className="text-on-surface-variant max-w-lg">
          Advanced tools designed for the precision required in professional audio engineering.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Feature 1: AI Music Gen */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-high rounded-xl p-8 hover:bg-surface-variant transition-all hover:scale-[1.02] cursor-default">
          <div className="flex flex-col h-full justify-between relative z-10">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                <span className="material-symbols-outlined">neurology</span>
              </div>
              <h3 className="font-headline text-2xl font-bold tracking-tight mb-3">
                AI Music Generation
              </h3>
              <p className="text-on-surface-variant max-w-md">
                Advanced artificial intelligence that understands genre, emotion, and rhythm at a microscopic level.
              </p>
            </div>
            <div className="mt-8 flex gap-2">
              <span className="px-3 py-1 bg-surface-container rounded text-xs font-label text-outline">
                EMOTION AND MOOD ENGINE
              </span>
              <span className="px-3 py-1 bg-surface-container rounded text-xs font-label text-outline">
                MULTI-LAYER
              </span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none grayscale group-hover:grayscale-0 transition-all duration-700">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQlDU4EuwqtqBVu9xsx80TnqC2LwcXnLXPZ_xITLw3btBUqzbPcXDNzNbn52ea-osxrAVeidqUy5xt_DIZHCdzBQ0-T1W8DgfB9Huw4HV20PxB5jyPI5p1RURmF9rOYYFcdIt9MmBjZXxLrpyBKopPvq0lafhyk7R_SLy50EQYdwsIlkC-fxxyQ-dB_J6vZVlf1fUyuNHZf5I1OaFJRgNAdi1e-I1005sM3kJfsdh6KrwKXAGnF5gVL7u577n6N2uQNjqARrZSVlE"
              alt="AI Music Generation"
            />
          </div>
        </div>

        {/* Feature 2: Smart Editing */}
        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/15 rounded-xl p-8 flex flex-col justify-between hover:scale-[1.02] transition-all">
          <div>
            <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary mb-6">
              <span className="material-symbols-outlined">tune</span>
            </div>
            <h3 className="font-headline text-xl font-bold tracking-tight mb-2">Smart Editing</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Precision controls for restructuring and remixing generated stems with surgical accuracy.
            </p>
          </div>
        </div>

        {/* Feature 3: Stem Export */}
        <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col gap-6 group hover:scale-[1.02] transition-all">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">layers</span>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold tracking-tight mb-2">Stem Export</h3>
            <p className="text-sm text-on-surface-variant">
              Download individual tracks for drums, bass, vocals, and instruments in 24-bit WAV.
            </p>
          </div>
        </div>

        {/* Feature 4: Album Generator */}
        <div className="md:col-span-4 bg-surface-container-low border border-outline-variant/15 rounded-xl p-8 flex flex-col gap-6 hover:scale-[1.02] transition-all">
          <div className="w-10 h-10 rounded-lg bg-on-secondary-container/20 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">album</span>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold tracking-tight mb-2">
              Album Generator
            </h3>
            <p className="text-sm text-on-surface-variant">
              Upload a script and let our AI translate vibes and moods into a
              cohesive multi-track experience.
            </p>
          </div>
        </div>

        {/* Feature 5: Auto Lyrics */}
        <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 flex flex-col gap-6 group hover:scale-[1.02] transition-all">
          <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined">lyrics</span>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold tracking-tight mb-2">Auto Lyrics</h3>
            <p className="text-sm text-on-surface-variant">
              Generate poetic and rhythmic lyrics synchronized perfectly with
              your AI-generated tracks.
            </p>
          </div>
        </div>

        {/* Feature 8: SFX (Large accent) */}
        <div className="md:col-span-6 bg-surface-container-highest rounded-xl p-8 relative overflow-hidden hover:scale-[1.02] transition-all">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">surround_sound</span>
            </div>
            <h3 className="font-headline text-2xl font-bold tracking-tight mb-3">
              SFX Generator
            </h3>
            <p className="text-on-surface-variant">
              Create cinematic impacts, atmospheric whooshes, and UI sounds
              instantly for games and film.
            </p>
          </div>
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-primary/5 blur-3xl rounded-full" />
        </div>

        {/* Feature 6 & 7 (Combined row) */}
        <div className="md:col-span-3 bg-surface-container-low border border-outline-variant/15 rounded-xl p-6 hover:scale-[1.02] transition-all">
          <h4 className="font-headline font-bold text-primary tracking-tight mb-2">
            Advanced Workflow
          </h4>
          <p className="text-xs text-on-surface-variant">
            Seamless integration with professional studio environments and DAWs.
          </p>
        </div>
        <div className="md:col-span-3 bg-surface-container-low border border-outline-variant/15 rounded-xl p-6 hover:scale-[1.02] transition-all">
          <h4 className="font-headline font-bold text-tertiary tracking-tight mb-2">
            Experimental Lab
          </h4>
          <p className="text-xs text-on-surface-variant">
            Push boundaries with glitch, microtonal, and generative
            soundscapes.
          </p>
        </div>
      </div>
    </section>
  );
}
