"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Youtube, ExternalLink, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const colorMap = {
  React: { bgColor: "#61dafb", textColor: "#000000" },
  Redux: { bgColor: "#764abc", textColor: "#ffffff" },
  CSS: { bgColor: "#2965f1", textColor: "#ffffff" },
  "Node.js": { bgColor: "#68a063", textColor: "#ffffff" },
  "Express.js": { bgColor: "#303030", textColor: "#ffffff" },
  MongoDB: { bgColor: "#4db33d", textColor: "#ffffff" },
  "Next.js": { bgColor: "#000000", textColor: "#ffffff" },
  "Chart.js": { bgColor: "#ffa500", textColor: "#000000" },
};

const defaultColor = { bgColor: "#372a5c", textColor: "#e9e1ff" };

export default function ProjectCard({
  title,
  description,
  technologies,
  keyPoints,
  url,
  GithubUrl,
  YoutubeUrl,
  websiteImage,
  Name,
}) {
  const [showMore, setShowMore] = useState(false);

  const techArray = technologies.split(",").map((t) => t.trim());
  const keyPointsArray = keyPoints
    ? keyPoints.split(",").map((t) => t.trim())
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.35)]"
    >
      <Link
        href={url || "#"}
        target={url ? "_blank" : undefined}
        rel="noopener noreferrer"
        className="relative block aspect-video w-full overflow-hidden bg-neutral-900"
      >
        <Image
          src={`/Images/${websiteImage}`}
          alt={Name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {url && (
          <div className="absolute inset-0 flex items-center justify-center bg-neutral-950/0 opacity-0 transition-all duration-300 group-hover:bg-neutral-950/60 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-white">
              VIEW PROJECT <ExternalLink size={14} />
            </span>
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white transition-transform group-hover:translate-x-0.5">
          {title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {techArray.map((tech) => {
            const { bgColor, textColor } = colorMap[tech] || defaultColor;
            return (
              <span
                key={tech}
                className="rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: bgColor, color: textColor }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-neutral-400">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-violet-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_4px_16px_-4px_rgba(139,92,246,0.6)] transition-all hover:-translate-y-0.5 hover:bg-violet-400"
            >
              <ExternalLink size={14} /> Live
            </Link>
          )}
          {GithubUrl && (
            <Link
              href={GithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-white/40"
            >
              <Github size={14} /> Source
            </Link>
          )}
          {YoutubeUrl && (
            <Link
              href={YoutubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-neutral-200 transition-colors hover:border-white/40"
            >
              <Youtube size={14} className="text-red-500" /> Video
            </Link>
          )}
        </div>

        {keyPointsArray.length > 0 && (
          <>
            <button
              onClick={() => setShowMore((v) => !v)}
              className="mt-4 flex items-center gap-1 text-xs font-medium text-neutral-400 transition-colors hover:text-white"
            >
              {showMore ? "Show less" : "Highlights"}
              <ChevronDown
                size={14}
                className={`transition-transform ${showMore ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence initial={false}>
              {showMore && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-3 grid grid-cols-1 gap-2 border-t border-white/10 pt-3 sm:grid-cols-2">
                    {keyPointsArray.map((point) => (
                      <span
                        key={point}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs leading-snug text-neutral-300"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </motion.div>
  );
}
