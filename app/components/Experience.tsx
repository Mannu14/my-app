"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ChevronDown } from "lucide-react";
import experience from "../data/experienceData";

interface Job {
  role: string;
  company: string;
  location: string;
  duration: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const VISIBLE_BULLETS = 3;

function ExperienceCard({ job, index }: { job: Job; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = job.bullets.length > VISIBLE_BULLETS;
  const visibleBullets = expanded
    ? job.bullets
    : job.bullets.slice(0, VISIBLE_BULLETS);
  const remaining = job.bullets.length - VISIBLE_BULLETS;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative"
    >
      <span
        className={`absolute -left-[calc(2rem+7px)] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border sm:-left-[calc(2.5rem+7px)] ${
          job.current
            ? "border-violet-400 bg-violet-500"
            : "border-white/30 bg-neutral-800"
        }`}
      />

      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-violet-400/30">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <Briefcase size={16} className="text-violet-400" />
              {job.role}
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              {job.company} · {job.location}
            </p>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-neutral-400">
            {job.duration}
            {job.current && (
              <span className="ml-2 text-violet-400">● current</span>
            )}
          </span>
        </div>

        <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-neutral-400">
          {visibleBullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>

        {hasMore && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="mt-3 flex items-center gap-1 text-xs font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            {expanded ? "Show less" : `View ${remaining} more`}
            <ChevronDown
              size={14}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {job.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative bg-neutral-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-400">
            Where I&apos;ve worked and what I&apos;ve built.
          </p>
        </motion.div>

        <div className="relative space-y-10 border-l border-white/10 pl-8 sm:pl-10">
          {experience.map((job, index) => (
            <ExperienceCard key={`${job.company}-${index}`} job={job} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
