"use client";

import { motion } from "framer-motion";
import { Server, Activity, Puzzle, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const PILLARS = [
  {
    icon: Server,
    title: "Production Backend",
    stack: "Node.js · Express · MongoDB · Redis",
  },
  {
    icon: Activity,
    title: "Real-Time Systems",
    stack: "Socket.IO · Tracking · Dispatch · Concurrency",
  },
  {
    icon: Puzzle,
    title: "Engineering",
    stack: "RBAC/ABAC · Accounting · Pricing · APIs",
  },
];

export default function Services() {
  return (
    <section id="about" className="relative bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Engineering systems, not just screens.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            I&apos;m a backend developer working on production systems across
            delivery, grocery, pharmacy, parcel, ride-hailing and rental
            workflows — from real-time dispatch to payments and access
            control.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-5 sm:grid-cols-3"
        >
          {PILLARS.map(({ icon: Icon, title, stack }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{stack}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-neutral-500"
        >
          <span className="rounded-full border border-white/10 px-4 py-1.5">
            B.Tech ECE · IIIT Ranchi · 2025
          </span>
          <a
            href="https://www.geeksforgeeks.org/user/rjtiger10/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 px-4 py-1.5 transition-colors hover:border-violet-400/30 hover:text-neutral-300"
          >
            200+ DSA on GeeksforGeeks <ExternalLink size={12} />
          </a>
          <span className="rounded-full border border-white/10 px-4 py-1.5">
            190+ on CodeChef
          </span>
        </motion.div>
      </div>
    </section>
  );
}
