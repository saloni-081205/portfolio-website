import { useEffect, useState } from "react";
import ResumeButton from "./ui/ResumeButton";
import {
  Menu,
  X,
  Sun,
  Moon,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });

      // Add scrolled state for glass effect enhancement
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 z-50 w-full  ${
      scrolled 
        ? "border-violet-500/50 bg-white/70 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-950/90 dark:shadow-[0_0_30px_rgba(139,92,246,0.1)]" 
        : "border-violet-500/20 bg-white/60 backdrop-blur-md dark:bg-gray-950/80"
    } border-b`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          onClick={handleNavClick}
          className="text-xl font-bold tracking-tight transition-all duration-300 hover:scale-105 hover:text-violet-600 dark:hover:text-violet-400 text-gray-900 dark:text-white"
        >
          &lt;SALONI RANA /&gt;
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-violet-600 dark:text-violet-400"
                    : "text-gray-600 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 animate-pulse"></span>
                )}
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.7)]"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* Github */}
          {/* <a
                href="https://github.com/saloni-081205"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-violet-500/10 hover:text-violet-600 dark:text-gray-300 dark:hover:bg-violet-500/20 dark:hover:text-violet-400"
              >
                <FaGithub size={18} />
              </a> */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/saloni-rana-539a4436a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-violet-500/10 hover:text-violet-600 dark:text-gray-300 dark:hover:bg-violet-500/20 dark:hover:text-violet-400"
          >
            <FaLinkedinIn size={19} />
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-gray-600 transition-all duration-300 hover:scale-110 hover:bg-violet-500/10 hover:text-violet-600 dark:text-gray-300 dark:hover:bg-violet-500/20 dark:hover:text-violet-400"
          >
            {darkMode ? <Sun size={19} className="text-violet-400" /> : <Moon size={19} />}
          </button>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download="Saloni Rana_Resume.pdf"
            className="group ml-2 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-violet-500/50"
          >
            <Download size={17} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            Resume
          </a>

        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 lg:hidden">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-lg p-2 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-violet-500/10 hover:text-violet-600 dark:text-gray-200 dark:hover:bg-violet-500/20 dark:hover:text-violet-400"
          >
            {darkMode ? <Sun size={19} className="text-violet-400" /> : <Moon size={19} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg p-2 text-gray-700 transition-all duration-300 hover:scale-110 hover:bg-violet-500/10 hover:text-violet-600 dark:text-gray-200 dark:hover:bg-violet-500/20 dark:hover:text-violet-400"
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-violet-500/20 bg-white/95 backdrop-blur-xl dark:border-violet-500/20 dark:bg-gray-950/95 lg:hidden shadow-[inset_0_0_30px_rgba(139,92,246,0.05)]">

          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4">

            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`relative rounded-lg px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-violet-400"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-lg bg-violet-500/10 dark:bg-violet-500/20"></span>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.7)]"></span>
                    )}
                    {link.name}
                  </span>
                </a>
              );
            })}

            <ResumeButton className="hidden lg:inline-flex mt-5" />

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;