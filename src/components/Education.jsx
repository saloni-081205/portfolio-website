import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";

const Education = () => {
  const education = [
    {
        degree: "Bachelor of Technology - B.Tech",
        field: "Computer Engineering",
        institution: "Sarvajanik College of Engineering and Technology",
        location: "Surat, Gujarat",
        duration: "2023 – 2027",
        score: "CGPA: 9.67",
        description:
          "Pursuing Computer Engineering with a strong focus on software development, web technologies, databases, and modern application development. Building practical experience through full-stack projects, hackathons, and emerging technologies such as AI and computer vision.",
},
  ];

  return (
    <section
      id="education"
      className="relative bg-white py-24 overflow-hidden dark:bg-gray-950"
    >
      {/* Background decoration - Different from other sections */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-48 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <div className="absolute bottom-1/3 -left-48 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-fuchsia-500/5 blur-2xl dark:bg-fuchsia-500/5" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">

        <SectionTitle
          eyebrow="Education"
          title="My Education"
          description="My academic journey and educational background."
        />

        <div className="relative">

          <div className="space-y-10">

            {education.map((item, index) => (
              <motion.div
                key={`${item.degree}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="relative"
              >

                {/* Education card */}
                <div className="group relative rounded-2xl border border-violet-500/20 bg-white/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-950/80 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500" />
                  
                  {/* Top border glow */}
                  <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-[0_0_20px_rgba(139,92,246,0.3)]" />

                  {/* Icon */}
                  <div className="absolute -top-5 left-6 flex h-12 w-12 items-center justify-center rounded-full border-2 border-violet-500/30 bg-white/90 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-violet-500 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] dark:border-violet-500/30 dark:bg-gray-950/90 dark:text-violet-400 dark:group-hover:border-violet-400">
                    <GraduationCap size={22} />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-violet-600 transition-colors duration-300 group-hover:text-violet-500 dark:text-violet-400 dark:group-hover:text-violet-300">
                        {item.duration}
                      </p>

                      <h3 className="mt-2 text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                        {item.degree}
                      </h3>

                      <p className="mt-1 font-medium text-gray-700 transition-colors duration-300 group-hover:text-violet-700 dark:text-gray-300 dark:group-hover:text-violet-300">
                        {item.field}
                      </p>
                    </div>

                    <span className="w-fit rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-semibold text-violet-600 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
                      {item.score}
                    </span>

                  </div>

                  <div className="mt-5 border-t border-violet-500/10 pt-5 transition-colors duration-300 group-hover:border-violet-500/20 dark:border-violet-500/10 dark:group-hover:border-violet-500/20">

                    <p className="flex items-center gap-2 font-medium text-gray-800 transition-colors duration-300 group-hover:text-violet-800 dark:text-gray-200 dark:group-hover:text-violet-300">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                      {item.institution}
                    </p>

                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
                          📍 {item.location}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300">
                      {item.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;