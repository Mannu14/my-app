"use client";

import { motion } from "framer-motion";
import techStack from "../data/techStackData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TechStack() {
  return (
    <section className="relative bg-neutral-950 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Tech I Work With
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {techStack.map(({ category, items }) => (
            <motion.div
              key={category}
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
