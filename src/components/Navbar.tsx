"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDevModal } from "./DevModalContext";

const navItems = [
  { name: "Explore", href: "#" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Explore");
  const { openModal } = useDevModal();

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel ambient-shadow">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tight text-primary font-headline">
          AudioWeave Studio
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              className={`relative pb-1 transition-colors ${
                activeItem === item.name ? "text-teal-200" : "text-slate-400 hover:text-teal-100"
              }`}
            >
              {item.name}
              {activeItem === item.name && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-200"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={openModal}
            className="hidden sm:block text-slate-400 hover:text-teal-100 transition-colors font-headline text-sm uppercase tracking-widest"
          >
            Sign In
          </button>
          <button
            onClick={openModal}
            className="bg-primary text-on-primary px-6 py-2 rounded-full font-bold font-headline scale-95 active:scale-90 transition-transform hover:brightness-110"
          >
            Start Creating
          </button>
        </div>
      </div>
    </nav>
  );
}
