"use client";

import { motion } from "framer-motion";
import { Radio, MapPinned, Landmark } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: Radio,
    title: "Real-Time Systems",
    description:
      "Live order tracking, rider location updates and event-driven workflows built on Socket.IO and Redis.",
  },
  {
    icon: MapPinned,
    title: "Dispatch & Pricing",
    description:
      "Geo-based rider allocation, concurrency-safe locking and dynamic, zone-based pricing engines.",
  },
  {
    icon: Landmark,
    title: "Business Systems",
    description:
      "Double-entry accounting, settlements, RBAC/ABAC authorization and payment workflows across verticals.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function EngineeringFocus() {
  return (
    <section className="relative bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            What I Build
          </h2>
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
          {FOCUS_AREAS.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-colors hover:border-violet-400/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                <Icon size={20} />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
