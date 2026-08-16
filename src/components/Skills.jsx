import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiTensorflow,
  SiOpencv,
  SiPostman,
} from "react-icons/si";

import {
  BrainCircuit,
  Code2,
  Database,
  Wrench,
} from "lucide-react";

import SectionTitle from "./ui/SectionTitle";
import { skills } from "../data/skills";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,

  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiTensorflow,
  SiOpencv,
  SiPostman,

  BrainCircuit,
};

const categoryIcons = {
  Frontend: Code2,
  Backend: FaServer,
  Database: Database,
  Programming: Code2,
  "AI / Machine Learning": BrainCircuit,
  "Tools & Platforms": Wrench,
};

// Color mapping for technology icons
const iconColors = {
  FaHtml5: "#E34F26",
  FaCss3Alt: "#1572B6",
  FaJs: "#F7DF1E",
  FaReact: "#61DAFB",
  FaNodeJs: "#339933",
  FaPython: "#3776AB",
  FaJava: "#007396",
  FaGitAlt: "#F05032",
  FaGithub: "#181717",
  SiTailwindcss: "#06B6D4",
  SiExpress: "#000000",
  SiMysql: "#4479A1",
  SiTensorflow: "#FF6F00",
  SiOpencv: "#5C3EE8",
  SiPostman: "#FF6C37",
  BrainCircuit: "#7C3AED",
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative bg-gray-50 py-24 overflow-hidden dark:bg-gray-900/50"
    >
      {/* Background decoration - Different from other sections */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <div className="absolute bottom-1/4 right-1/3 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl dark:bg-fuchsia-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I work with"
          description="A collection of technologies and tools I use while building applications and solving software development problems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((category, categoryIndex) => {
            const CategoryIcon =
              categoryIcons[category.category] || Code2;

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.08,
                }}
                className="group relative rounded-2xl border border-violet-500/20 bg-white/80 p-6 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-950/80 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 " />

                {/* Top border glow */}
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_20px_rgba(139,92,246,0.3)]" />

                {/* Category Header */}
                <div className="relative flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
                    <CategoryIcon size={24} />
                  </div>

                  <h3 className="text-lg font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                    {category.category}
                  </h3>

                </div>

                {/* Skills */}
                <div className="relative mt-6 flex flex-wrap gap-3">

                  {category.skills.map((skill) => {
                    const Icon = iconMap[skill.icon];
                    const iconColor = iconColors[skill.icon] || "#7C3AED";

                    return (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center gap-2 rounded-xl border border-violet-500/20 bg-white/50 px-3 py-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-500/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-900/50 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                      >
                        {Icon && (
                          <Icon
                            size={20}
                            style={{ color: iconColor }}
                            className="transition-all duration-300 group-hover/skill:scale-110"
                          />
                        )}

                        <span className="text-sm font-medium text-gray-700 transition-colors duration-300 group-hover/skill:text-violet-700 dark:text-gray-300 dark:group-hover/skill:text-violet-300">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;