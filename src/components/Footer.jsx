import {
  ArrowUp,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-violet-500/50 bg-white/90 backdrop-blur-sm dark:border-violet-500/50 dark:bg-gray-950/90">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -bottom-32 h-72 w-72 rounded-full bg-violet-500/5 blur-3xl dark:bg-violet-500/5" />
        <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-3">

          {/* BRAND */}
          <div>

            <a
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400"
            >
              Saloni Rana<span className="text-violet-600 dark:text-violet-400">.</span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-600 transition-colors duration-300 hover:text-violet-700 dark:text-gray-400 dark:hover:text-violet-300">
              Frontend Developer passionate about building modern,
              responsive, and user-friendly web applications with modern web technologies.
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">

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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-white/50 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:bg-gray-950/50 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
              >
                <FaLinkedinIn size={18} />
              </a>

              <a
                href="mailto:salonics0812@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-500/30 bg-white/50 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:bg-gray-950/50 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
              >
                <Mail size={18} />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
              Quick Links
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-y-3">

              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 transition-all duration-300 hover:translate-x-1 hover:text-violet-600 hover:shadow-[0_0_10px_rgba(139,92,246,0.1)] dark:text-gray-400 dark:hover:text-violet-400"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 transition-colors duration-300 hover:text-violet-700 dark:text-gray-400 dark:hover:text-violet-300">
              Have a project, opportunity, or idea in mind? Let’s connect and build something impactful together.
            </p>

            <a
              href="mailto:salonics0812@gmail.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-all duration-300 hover:scale-105 hover:text-violet-700 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:text-violet-400 dark:hover:text-violet-300"
            >
              salonics0812@gmail.com
              <Mail size={16} className="transition-transform duration-300 hover:rotate-12" />
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="relative mt-12 flex flex-col gap-5 border-t border-violet-500/20 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-violet-500/20">

          <p className="text-sm text-gray-500 transition-colors duration-300 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400">
            © {currentYear} Saloni Rana. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <p className="text-xs text-gray-500 transition-colors duration-300 hover:text-violet-600 dark:text-gray-500 dark:hover:text-violet-400">
              Built with React & Tailwind CSS
            </p>

            {/* Back to top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="group flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            >
              <ArrowUp size={18} className="transition-transform duration-300 group-hover:-translate-y-1" />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;