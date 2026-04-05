"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WaveSurfer from "wavesurfer.js";

const showcases = [
  {
    title: "Anime Orchestral",
    tags: "Anime • Rising tensions • Epic",
    type: "Full Song",
    color: "primary",
    file: "/audio/animeorchestral.mp3",
    waveforms: [30, 50, 70, 90, 80, 100, 60, 40, 20, 40, 80, 95, 75, 55, 85, 65, 35, 55, 75, 95],
  },
  {
    title: "Steam Kissed Rain Love Song",
    tags: "Coffee House • Love • Pop",
    type: "Full Song",
    color: "primary",
    file: "/audio/coffeelovesong.mp3",
    waveforms: [60, 40, 80, 90, 70, 100, 85, 50, 30, 60, 45, 75, 95, 80, 100, 70, 40, 60, 20, 50],
  },
  {
    title: "Obsidian Skyfall Shadow Realms",
    tags: "Cinematic • Dark • Suspense",
    type: "Atmosphere",
    color: "tertiary",
    file: "/audio/darkcinematic.mp3",
    waveforms: [100, 10, 80, 15, 90, 10, 70, 20, 85, 5, 95, 85, 80, 70, 90, 10, 75, 5, 100, 15],
  },
  {
    title: "Love Echoes",
    tags: "Piano • Love • Instrumental",
    type: "Musical",
    color: "tertiary",
    file: "/audio/loveinstrumental.mp3",
    waveforms: [20, 15, 25, 30, 20, 25, 15, 10, 20, 30, 25, 20, 15, 25, 35, 25, 20, 15, 20, 25],
  },
];

export default function Showcases() {
  const [currentTrack, setCurrentTrack] = useState<null | (typeof showcases)[0]>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  const initWaveSurfer = useCallback((track: (typeof showcases)[0]) => {
    if (!waveformRef.current) return;

    if (wavesurferRef.current) {
      wavesurferRef.current.destroy();
    }

    wavesurferRef.current = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#454947",
      progressColor: track.color === "primary" ? "#99eecb" : "#ff8b69",
      cursorColor: "#ffffff",
      barWidth: 2,
      barGap: 3,
      barRadius: 2,
      height: 32,
      normalize: true,
      dragToSeek: true,
      url: track.file,
    });

    wavesurferRef.current.on("play", () => setIsPlaying(true));
    wavesurferRef.current.on("pause", () => setIsPlaying(false));
    wavesurferRef.current.on("timeupdate", (currentTime) => {
      if (wavesurferRef.current) {
        setProgress((currentTime / wavesurferRef.current.getDuration()) * 100);
      }
    });

    wavesurferRef.current.on("finish", () => {
      setIsPlaying(false);
    });

    wavesurferRef.current.on("ready", () => {
      wavesurferRef.current?.play();
    });

  }, []);

  useEffect(() => {
    if (currentTrack) {
      initWaveSurfer(currentTrack);
    }
  }, [currentTrack, initWaveSurfer]);

  const togglePlay = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  return (
    <section id="showcases" className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/10 relative">
      <div className="mb-16">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">
          Sample <span className="text-primary text-glow">Showcases</span>
        </h2>
        <p className="text-on-surface-variant max-w-lg">
          Experience the output quality across different production formats.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {showcases.map((showcase, index) => (
          <div
            key={index}
            className="bg-surface-container-high rounded-xl p-6 flex flex-col gap-6 group hover:bg-surface-variant transition-all border border-outline-variant/15"
          >
            <div className="flex justify-between items-start">
              <span
                className={`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded ${showcase.color === "primary"
                  ? "bg-primary/10 text-primary"
                  : "bg-tertiary/10 text-tertiary"
                  }`}
              >
                {showcase.type}
              </span>
              <button
                onClick={() => setCurrentTrack(showcase)}
                className={`w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-transform ${showcase.color === "primary"
                  ? "bg-primary text-on-primary"
                  : "bg-tertiary text-on-tertiary"
                  }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {currentTrack?.title === showcase.title && isPlaying ? "pause" : "play_arrow"}
                </span>
              </button>
            </div>
            <div>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-1">
                {showcase.title}
              </h4>
              <p className="text-xs text-outline mb-4">{showcase.tags}</p>
              <div className="h-12 flex items-center gap-[2px]">
                {showcase.waveforms.map((height, i) => (
                  <div
                    key={i}
                    className={`waveform-bar ${showcase.color === "tertiary" ? "opacity-50 bg-tertiary" : ""
                      }`}
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {currentTrack && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-3xl"
          >
            <div className="bg-[#0b0f0e]/95 backdrop-blur-3xl ambient-shadow rounded-2xl px-8 py-5 flex items-center gap-8 border border-white/10 ring-1 ring-white/5">
              <button
                onClick={togglePlay}
                className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-lg ${currentTrack.color === "primary"
                  ? "bg-primary text-black"
                  : "bg-tertiary text-black"
                  }`}
              >
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  {isPlaying ? "pause" : "play_arrow"}
                </span>
              </button>

              <div className="flex-grow">
                <div className="flex justify-between items-end mb-2">
                  <div className="flex flex-col">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] leading-none mb-1 shadow-primary/20">
                      Sonic Architect Output
                    </p>
                    <h5 className="font-headline font-bold text-lg text-on-surface leading-none tracking-tight">
                      {currentTrack.title}
                    </h5>
                  </div>
                  <span className="text-[10px] font-mono text-outline/80 bg-white/5 px-2 py-0.5 rounded leading-none">
                    {Math.floor(progress)}%
                  </span>
                </div>

                <div ref={waveformRef} className="w-full h-8" />
              </div>

              <button
                onClick={() => {
                  wavesurferRef.current?.destroy();
                  setCurrentTrack(null);
                  setIsPlaying(false);
                }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-outline hover:text-on-surface hover:bg-white/10 transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
