"use client";

import { useDevModal } from "./DevModalContext";

export default function CTA() {
  const { openModal } = useDevModal();

  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="relative bg-primary-container/20 rounded-3xl p-12 md:p-20 overflow-hidden text-center ambient-shadow">
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
            Unleash Your Symphony&nbsp; Legacy
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-slate-200">
            Join and redefine the boundaries of sound design with AudioWeave.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={openModal}
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold font-headline text-lg hover:shadow-[0_0_20px_rgba(170,255,220,0.5)] transition-all"
            >
              Start Your Free Session
            </button>
            <button
              onClick={openModal}
              className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-bold font-headline text-lg"
            >
              View Showcase
            </button>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdi5QRjQdVgEmtqWvUGH5DqkO1hdF-E8nxgkAkF6P5kheKejmcp_Z3-dAo6eEiAwEErBjaJKkw8Lqcv_mxH709qaELZVvsZpVC0Sta6IIwCrtRtSVmIhOraRaELRhw93Mza8QBMzG8i81xCczABYObFVcH6QpSmzfmkdGa-vLBn6JM-Pb25BPALY4p3wxWfznpUJvILInPPC9x_QEWna1Ks_iY7FRFULxm7QwFVxnTY1G16tGDwND1czRFMGjCDX2ilX_v2P0Ynfw"
            alt="High-end music studio console"
          />
        </div>
      </div>
    </section>
  );
}
