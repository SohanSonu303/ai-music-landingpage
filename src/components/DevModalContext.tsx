"use client";

import React, { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DevModalContextType {
  openModal: () => void;
  isDevMode: boolean;
  setDevMode: (val: boolean) => void;
}

const DevModalContext = createContext<DevModalContextType | undefined>(undefined);

export function DevModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDevMode, setDevMode] = useState(true); // Toggle this to false to disable the dev modal interceptor

  const openModal = () => {
    if (isDevMode) {
      setIsOpen(true);
    }
  };

  return (
    <DevModalContext.Provider value={{ openModal, isDevMode, setDevMode }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-md bg-surface-container-high border border-white/10 rounded-3xl p-8 text-center ambient-shadow"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6">
                <span className="material-symbols-outlined text-4xl">construction</span>
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-4">
                Development Under Progress
              </h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed">
                We're currently fine-tuning our service engine. This feature will be live soon! Please reach out to us through the contact section for early access.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold hover:brightness-110 transition-all font-headline"
              >
                Got it
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </DevModalContext.Provider>
  );
}

export function useDevModal() {
  const context = useContext(DevModalContext);
  if (!context) {
    throw new Error("useDevModal must be used within a DevModalProvider");
  }
  return context;
}
