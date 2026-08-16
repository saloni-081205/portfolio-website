import NeonButton from "./ui/NeonButton";
import {
  ArrowDown,
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import { FaGithub,FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";
import ResumeButton from "./ui/ResumeButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-20 dark:bg-gray-950 pb-6"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl dark:bg-violet-500/20 animate-pulse" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl dark:bg-purple-500/20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl dark:bg-fuchsia-500/5" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Small introduction */}
          <p className="mb-4 text-md font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight bg-gradient-to-r
          from-violet-600
          via-purple-500
          to-fuchsia-500
          bg-clip-text
          text-transparent
          animate-gradient-x
          bg-[length:200%_auto]">
            Saloni Rana
          </h1>

          {/* Role */}
          <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-100">
            Frontend Developer
            <span className="text-violet-600 dark:text-violet-400">
              {" "}|{" "}
            </span>
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg dark:text-gray-300">
            I build modern, responsive and user-focused web applications
            using modern frontend and backend technologies. I enjoy turning
            ideas into practical digital experiences and solving real-world
            problems through technology.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* View Projects */}
            <NeonButton href="#projects">
              View My Projects
            </NeonButton>

            {/* Resume */}
            <ResumeButton />

            {/* Contact */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 px-6 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] dark:border-violet-500/30 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400 dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <Mail size={18} />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-3">

            <span className="mr-2 text-sm text-gray-500 dark:text-gray-500">
              Find me on
            </span>

            {/* <a
                href="https://github.com/saloni-081205"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-white/50 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:bg-gray-950/50 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
              >
                <FaGithub size={18} />
              </a> */}

            <a
              href="https://www.linkedin.com/in/saloni-rana-539a4436a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-violet-500/30 p-2.5 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:text-gray-400 dark:hover:border-violet-400 dark:hover:text-violet-400"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="mailto:salonics0812@gmail.com"
              aria-label="Email"
              className="rounded-lg border border-violet-500/30 p-2.5 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:text-gray-400 dark:hover:border-violet-400 dark:hover:text-violet-400"
            >
              <Mail size={18} />
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center lg:justify-end"
        >

          {/* Main profile container */}
          <div className="relative">

            {/* Decorative ring */}
            <div className="absolute -inset-5 rounded-full border border-violet-500/30 animate-spin-slow" />
            <div className="absolute -inset-10 rounded-full border border-violet-500/20 animate-spin-slow-reverse" />
            <div className="absolute -inset-16 rounded-full border border-fuchsia-500/20 animate-spin-slow" />

            {/* Profile image */}
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-violet-500/50 bg-gray-100 shadow-[0_0_40px_rgba(139,92,246,0.2)] sm:h-80 sm:w-80 dark:border-violet-500/50 dark:bg-gray-800 dark:shadow-[0_0_40px_rgba(139,92,246,0.2)]">

              <img
                src="/images/profile/profile.jpg"
                alt="Your Name"
                className="h-full w-full object-cover"
              />

              {/* Glow overlay */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating technology card */}
            {/*<motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-8 top-8 rounded-xl border border-violet-500/30 bg-white/95 px-4 py-3 shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-sm dark:border-violet-500/30 dark:bg-gray-900/95 dark:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              <p className="mt-1 text-sm font-semibold text-violet-600 dark:text-violet-400">
                ⚡ React.js • Frontend
              </p>
            </motion.div>

            {/* Floating project card
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute -bottom-5 -right-6 rounded-xl border border-violet-500/30 bg-white/95 px-4 py-3 shadow-[0_0_30px_rgba(139,92,246,0.15)] backdrop-blur-sm dark:border-violet-500/30 dark:bg-gray-900/95 dark:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              <p className="text-xs text-violet-500 dark:text-violet-400">
                🚀 Passion
              </p>
              <p className="mt-1 text-sm font-semibold text-gray-900 dark:text-white">
                Building Real-World Apps
              </p>
            </motion.div> */}

          </div>
        </motion.div> 
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center text-violet-400 transition hover:text-violet-500 md:flex"
        aria-label="Scroll to About section"
      >
        <span className="mb-2 text-xs uppercase tracking-widest text-violet-500 dark:text-violet-400">
          Scroll
        </span>
        <ArrowDown size={18} className="text-violet-500 dark:text-violet-400" />
      </motion.a>
    </section>
  );
};

export default Hero;