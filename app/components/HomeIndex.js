"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiReact,
  SiSocketdotio,
} from "react-icons/si";
import Navbar from "./Navbar";
import HeroScene from "./HeroScene";
import { useReducedMotion } from "../lib/useReducedMotion";

const TECH_STACK = [
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiRedis, label: "Redis" },
  { icon: SiSocketdotio, label: "Socket.IO" },
  { icon: SiReact, label: "React" },
];

export default function HomeIndex() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      <Navbar />
      <section
        id="home"
        className="relative flex min-h-screen w-full items-center overflow-hidden bg-neutral-950"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.18),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.14),transparent_45%)]" />

        {mounted && !reducedMotion && (
          <div className="absolute inset-0 z-0 opacity-90">
            <HeroScene />
          </div>
        )}

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 pt-24 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-violet-300">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Backend Developer
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              Hi, I&apos;m Manish Yadav
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
              I build reliable backend systems with Node.js, Express, MongoDB
              and Redis — from real-time dispatch and pricing engines to
              double-entry accounting and RBAC/ABAC access control, in
              production.
            </p>

            <p className="mt-3 text-sm text-neutral-500">
              Currently building at{" "}
              <span className="font-medium text-neutral-300">
                Tcipher Technologies
              </span>
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.7)] transition-all hover:-translate-y-0.5 hover:bg-violet-400 hover:shadow-[0_12px_36px_-8px_rgba(139,92,246,0.85)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/[0.08]"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              {TECH_STACK.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-neutral-500"
                  title={label}
                >
                  <Icon size={20} />
                  <span className="text-xs">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-neutral-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 4v16m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
    </div>
  );
}
