import { useState } from "react";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";
import ExperienceModal from "./modals/ExperienceModal";

import { experience } from "../data/experience";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <>
      <section
        id="experience"
        className="relative bg-white py-24 overflow-hidden dark:bg-gray-950"
      >
        {/* Background decoration - Different from other sections */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
          <div className="absolute bottom-1/3 right-1/2 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl dark:bg-fuchsia-500/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <SectionTitle
            eyebrow="My Experience"
            title="Experience & Internships"
            description="My practical experience, internships, and opportunities where I have applied my technical knowledge to real-world projects."
          />

          <div className="mx-auto max-w-4xl space-y-6">

            {experience.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group relative rounded-2xl border border-violet-500/20 bg-white/80 p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] sm:p-8 dark:border-violet-500/20 dark:bg-gray-950/80 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500" />

                {/* Top border glow */}
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_20px_rgba(139,92,246,0.3)]" />

                <div className="relative flex flex-col gap-6 md:flex-row">

                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
                      <BriefcaseBusiness size={26} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    {/* Type */}
                    <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 transition-colors duration-300 group-hover:text-violet-500 dark:text-violet-400 dark:group-hover:text-violet-300">
                      {item.type}
                    </p>

                    {/* Role */}
                    <h3 className="mt-2 text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent sm:text-2xl dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                      {item.role}
                    </h3>

                    {/* Company */}
                    <p className="mt-1 text-base font-semibold text-gray-700 transition-colors duration-300 group-hover:text-violet-700 dark:text-gray-300 dark:group-hover:text-violet-300">
                      {item.company}
                    </p>

                    {/* Metadata */}
                    <div className="mt-3 flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:flex-wrap sm:gap-5 dark:text-gray-400">

                      <span className="flex items-center gap-2 transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                        <CalendarDays size={16} />
                        {item.duration}
                      </span>

                      {item.location && (
                        <span className="flex items-center gap-2 transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-violet-400">
                          <MapPin size={16} />
                          {item.location}
                        </span>
                      )}

                    </div>

                    {/* Description */}
                    <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">

                      {item.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-600 transition-all duration-300 hover:scale-105 hover:bg-violet-500/20 hover:shadow-[0_0_10px_rgba(139,92,246,0.15)] dark:bg-violet-500/10 dark:text-violet-400 dark:hover:bg-violet-500/20"
                        >
                          {technology}
                        </span>
                      ))}

                    </div>

                    {/* View Experience */}
                    <button
                      type="button"
                      onClick={() => setSelectedExperience(item)}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    >
                      View Experience
                      <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
                    </button>

                  </div>

                </div>
              </motion.article>
            ))}

          </div>

        </div>
      </section>

      <ExperienceModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
};

export default Experience;