"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

export default function ForCartview() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <main id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Featured Work
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-neutral-400">
          A selection of full-stack applications I&apos;ve built.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            keyPoints={project.keyPoints}
            url={project.url}
            GithubUrl={project.Github}
            YoutubeUrl={project.Youtube}
            websiteImage={project.websiteImage}
            Name={project.Name}
          />
        ))}
      </div>

      <div className="mt-16 text-center">
        <button
          onClick={() => setShowAll((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-violet-400/40 hover:text-white"
        >
          {showAll ? "Show less" : `View all ${projects.length} projects`}
          <ChevronDown
            size={16}
            className={`transition-transform ${showAll ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {showAll && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden"
          >
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techTechStack={project.techTechStack}
                  technologies={project.technologies}
                  keyPoints={project.keyPoints}
                  details={project.details}
                  url={project.url}
                  GithubUrl={project.Github}
                  YoutubeUrl={project.Youtube}
                  websiteImage={project.websiteImage}
                  Name={project.Name}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
