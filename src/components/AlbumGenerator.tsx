"use client";

import { useDevModal } from "./DevModalContext";

export default function AlbumGenerator() {
  const { openModal } = useDevModal();

  return (
    <section className="py-32 relative bg-surface overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <span className="font-label text-tertiary text-sm tracking-[0.4em] uppercase mb-4 block">
            audioweave studio&apos;s powerhouse
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold text-on-surface mb-8 leading-[0.9] tracking-tight">
            ALBUM GENERATOR
          </h2>
          <p className="text-xl text-on-surface-variant mb-10 max-w-lg">
            Transform your scripts or story ideas into professional-grade music.
            Our AI builds cohesive themes and narrative flow across multiple
            tracks—perfect for YouTube creators, social media storytellers, and
            indie filmmakers seeking cinematic depth.
          </p>
          <ul className="space-y-6 mb-12">
            {[
              "Story-driven thematic continuity",
              "AI-generated narrative lyrics and vocals",
              "Full cinematic background scores & sound effects",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-tertiary">
                  verified
                </span>
                <span className="font-body text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-primary to-secondary text-on-primary font-label font-bold tracking-widest px-10 py-5 rounded-md hover:scale-105 transition-transform"
          >
            LAUNCH ALBUM
          </button>
        </div>
        <div className="relative grid grid-cols-2 gap-6">
          <div className="space-y-6 translate-y-12">
            <div className="aspect-square relative rounded-xl overflow-hidden border border-primary/30 neon-glow-primary group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrqtJIIZVusEhXBKE9ohQGHhbw3hzSza0DEnHcBUxvFXd2H7p6gGXq3hxZ6ovKbPDbLRv7TlGgmqs0BELzqcwkNN1pAAVb_IpIIx4juWMdvHlV9fSDcG3xXOIheyxhD-E-blrySDki76fV2bfX2RaQ6wfIgjuJx6lA0Trg1WE8KTxWw_D-IKCK2K0bmkCWkO9UJiVfR9ToC7HpFRHzrIrIJMm6Lfue1LHyFxpk624ACx0qNGPljjTugdd8R-gUcemAPi17F6jehw0"
                alt="Cyberpunk city"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-headline font-bold text-sm">NEON DRIFT</p>
                <p className="font-label text-[10px] text-tertiary tracking-widest">
                  SYNTHWAVE ANTHOLOGY
                </p>
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden border border-outline-variant/20 grayscale hover:grayscale-0 transition-all group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6T7RX4NpqRs6dyBLse8Ci84BOmNf_2mvuaOLLAaJAkL04_RH4bo-_hANRPROH48oT6abY2ylUmC48YR-Exs7oyFVA10Om4ZLH0oKFrj2YVtVbYHOfT67YXU5NE8FQPaLkTiRlGkqumgmzOqgdBgkCPme9L6E8IacJSPjz7Y3Gi25--mXFfm2uxFl45AFGsK7wyrQnARwbLIZwuS6ifAknQtLJkQeFKCSsQYPDuYfMacVYzvgG-EKzizp0fkrUbZDC5vh-p7JSImc"
                alt="Deep space"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-headline font-bold text-sm">VOID ECHOES</p>
                <p className="font-label text-[10px] text-tertiary tracking-widest">
                  AMBIENT TEXTURES
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="aspect-square relative rounded-xl overflow-hidden border border-outline-variant/20 grayscale hover:grayscale-0 transition-all group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOgC-a2lOkY2kQC5-lzjs_PRtD23iRQaJ6eA1joBDCVS-T7_HfWypN6Kg1aj-mdUjix8mfAOxfq-9F7mkVhXIUOBKT3AhsEzZEOtQlKFUyhYBTRTKCEkcUF-wvD0VEPv54NfZKZ3OJUnQx11_R-DUlirwyQlkZcHTiXebS-dqijhtRLSbqTMG4IGVgGPK3SRIH6-Mv5Hfm6vP9l55tUILSnfwviEvP7AYhMW_E9aBcVpukMt1yHDX2mQbBqcuvQy86l2kBDafWKbQ"
                alt="Musical keys"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-headline font-bold text-sm">IVORY GHOSTS</p>
                <p className="font-label text-[10px] text-tertiary tracking-widest">
                  NEOCLASSICAL STORY
                </p>
              </div>
            </div>
            <div className="aspect-square relative rounded-xl overflow-hidden border border-tertiary/30 neon-glow-tertiary group">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgQi0kVYiFXlRHVsVTrhvQ-0NRS9G2AfVBOe8Jb9zlC9XQs9eNzOqQd0BUpxxzQtCmRoeCVvPbq9K2PYk_J3XqXGjMafrfggjEbCZPYLEv_qjkNvntH5ZnEKgXqD0DzicLpNfW2SFdSCt7s-J4bQvVsQSb7IlCVi902jr8xM2YZrvAxxr12xtHl4QMnytFkoiqOZViI7PGvybmFOdyxEfUCxF7pSZ2LZNgIumYhrr7g8s-thByXbsVy6e83vZfbXa-hZ6mLdVSIBI"
                alt="Concert light"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-headline font-bold text-sm">IGNITION</p>
                <p className="font-label text-[10px] text-tertiary tracking-widest">
                  HYBRID ORCHESTRAL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
