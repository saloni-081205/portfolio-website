import {
  Code2,
  Layers3,
  Trophy,
  Award,
  Database
} from "lucide-react";

import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";

const About = () => {
  const highlights = [
    {
    icon: Database,
    value: "Full",
    label: "Stack Development",
  },
  {
    icon: Layers3,
    value: "10+",
    label: "Technologies",
  },
  {
    icon: Trophy,
    value: "05+",
    label: "Hackathons",
  },
  {
    icon: Award,
    value: "03+",
    label: "Certifications",
  },
  ];

  return (
    <section
      id="about"
      className="relative bg-gray-50 py-24 overflow-hidden dark:bg-gray-900/50"
    >
      {/* Background decoration - Different from hero */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <div className="absolute bottom-1/4 -right-48 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-fuchsia-500/5 blur-2xl dark:bg-fuchsia-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <SectionTitle
          eyebrow="About Me"
          title="A little about me"
          description="I'm passionate about building practical software solutions and continuously improving my development skills."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-2xl border border-violet-500/20 bg-white/80 p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(139,92,246,0.05)] dark:bg-gray-950/80 dark:border-violet-500/20 dark:shadow-[0_0_30px_rgba(139,92,246,0.05)]">
              <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent shadow-[0_0_20px_rgba(139,92,246,0.3)]" />
              
            <p className="text-lg leading-8 text-gray-600 dark:text-gray-300">
              I'm a Computer Engineering student and aspiring software developer with a
              strong focus on frontend and full-stack development. I enjoy turning ideas
              into responsive, intuitive, and practical web applications that solve
              real-world problems.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">
              My technical interests include React.js, JavaScript, Node.js, REST APIs,
              databases, and AI-powered applications. Through projects such as a
              Real-Time Indian Sign Language Translator and full-stack web applications,
              I enjoy exploring how modern web technologies and AI can work together to
              create meaningful digital solutions.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-600 dark:text-gray-400">
              I continuously strengthen my programming, problem-solving, and software
              development skills through hands-on projects, hackathons, and technical
              learning. I'm currently focused on growing as a frontend developer while
              building a strong foundation in full-stack development.
            </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">

              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="group relative rounded-2xl border border-violet-500/20 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] active:-translate-y-1 active:scale-105 active:border-violet-500/40 active:shadow-[0_0_30px_rgba(139,92,246,0.15)] focus:-translate-y-1 focus:scale-105 focus:border-violet-500/40 focus:shadow-[0_0_30px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-950/80 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] dark:active:border-violet-500/40 dark:active:shadow-[0_0_30px_rgba(139,92,246,0.15)] dark:focus:border-violet-500/40 dark:focus:shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                    onTouchStart={(e) => {
                      // Add a temporary class for touch feedback
                      e.currentTarget.classList.add('touch-active');
                      setTimeout(() => {
                        e.currentTarget.classList.remove('touch-active');
                      }, 300);
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 group-focus:opacity-100" />
                    
                    <Icon
                      size={22}
                      className="relative text-violet-600 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-500 group-active:scale-110 group-active:text-violet-500 group-focus:scale-110 group-focus:text-violet-500 dark:text-violet-400 dark:group-hover:text-violet-300 dark:group-active:text-violet-300 dark:group-focus:text-violet-300"
                    />

                    <p className="relative mt-3 text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                      {item.value}
                    </p>

                    <p className="relative mt-1 text-sm text-gray-500 dark:text-gray-500">
                      {item.label}
                    </p>

                    {/* Glow effect on hover/active */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-violet-500/0 to-purple-500/0 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 group-hover:from-violet-500/10 group-hover:via-purple-500/10 group-hover:to-fuchsia-500/10 group-active:opacity-100 group-active:from-violet-500/10 group-active:via-purple-500/10 group-active:to-fuchsia-500/10 group-focus:opacity-100 group-focus:from-violet-500/10 group-focus:via-purple-500/10 group-focus:to-fuchsia-500/10" />
                  </motion.div>
                );
              })}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
