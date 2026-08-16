import { useState } from "react";

import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink =
      `mailto:salonics0812@gmail.com` +
      `?subject=${encodeURIComponent(subject || "Portfolio Contact")}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;

    window.location.href = mailtoLink;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-white py-24 overflow-hidden dark:bg-gray-950"
    >
      {/* Background decoration - Different from other sections */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
        <div className="absolute bottom-1/3 left-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl dark:bg-fuchsia-500/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <SectionTitle
          eyebrow="Contact Me"
          title="Let's work together"
          description="Have a project idea, opportunity, or simply want to connect? Feel free to reach out."
        />

        <div className="grid gap-10 lg:grid-cols-5">

          {/* CONTACT INFORMATION */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >

            <div className="relative rounded-2xl border border-violet-500/20 bg-white/80 p-7 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] dark:border-violet-500/20 dark:bg-gray-950/80">
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 group-hover:from-violet-500/5 group-hover:via-purple-500/5 group-hover:to-fuchsia-500/5" />

              <h3 className="relative text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                Get in touch
              </h3>

              <p className="relative mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                I'm always open to discussing new projects, internship
                opportunities, collaborations, or interesting ideas.
              </p>

              {/* Email */}
              <a
                href="mailto:salonics0812@gmail.com"
                className="relative mt-7 flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.05)] dark:hover:bg-violet-500/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group-hover:scale-110 dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-violet-700 dark:text-gray-200 dark:hover:text-violet-300">
                    salonics0812@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919426464653"
                className="relative mt-2 flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.05)] dark:hover:bg-violet-500/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group-hover:scale-110 dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-violet-700 dark:text-gray-200 dark:hover:text-violet-300">
                    +91 9426464653
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="relative mt-2 flex items-center gap-4 rounded-xl p-3 transition-all duration-300 hover:scale-[1.02] hover:bg-violet-500/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.05)] dark:hover:bg-violet-500/20">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                    Location
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-800 transition-colors duration-300 hover:text-violet-700 dark:text-gray-200 dark:hover:text-violet-300">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="relative mt-7 border-t border-violet-500/20 pt-6 dark:border-violet-500/20">

                <p className="text-xs font-semibold uppercase tracking-wider text-violet-500 dark:text-violet-400">
                  Connect with me
                </p>

                <div className="mt-4 flex gap-3">

                  {/* <a
                    href="https://github.com/saloni-081205"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-white/50 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:bg-gray-950/50 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
                  >
                    <FaGithub size={20} />
                  </a> */}

                  <a
                    href="https://www.linkedin.com/in/saloni-rana-539a4436a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andr"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/30 bg-white/50 text-gray-700 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.2)] dark:border-violet-500/30 dark:bg-gray-950/50 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
                  >
                    <FaLinkedinIn size={19} />
                  </a>

                </div>

              </div>

            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >

            <div className="relative rounded-2xl border border-violet-500/20 bg-white/80 p-7 backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] dark:border-violet-500/20 dark:bg-gray-950/80 sm:p-8">
              
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 group-hover:from-violet-500/5 group-hover:via-purple-500/5 group-hover:to-fuchsia-500/5" />

              <h3 className="relative text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                Send me a message
              </h3>

              <p className="relative mt-2 text-sm text-gray-600 dark:text-gray-400">
                Fill out the form below and your email client will open with
                the message prepared.
              </p>

              <form
                onSubmit={handleSubmit}
                className="relative mt-7 space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-violet-700 dark:text-gray-300 dark:hover:text-violet-300"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-violet-500/20 bg-gray-50/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:border-violet-500/20 dark:bg-gray-900/80 dark:text-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-violet-700 dark:text-gray-300 dark:hover:text-violet-300"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-violet-500/20 bg-gray-50/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:border-violet-500/20 dark:bg-gray-900/80 dark:text-white"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-violet-700 dark:text-gray-300 dark:hover:text-violet-300"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Let's work together"
                    className="w-full rounded-xl border border-violet-500/20 bg-gray-50/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:border-violet-500/20 dark:bg-gray-900/80 dark:text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-violet-700 dark:text-gray-300 dark:hover:text-violet-300"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-violet-500/20 bg-gray-50/80 px-4 py-3 text-sm text-gray-900 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 focus:shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:border-violet-500/20 dark:bg-gray-900/80 dark:text-white"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] sm:w-auto"
                >
                  <Send size={17} className="transition-transform duration-300 group-hover:rotate-12" />
                  Send Message
                </button>

                {/* Success */}
                {submitted && (
                  <div className="flex items-center gap-2 text-sm text-violet-600 dark:text-violet-400">
                    <CheckCircle size={17} className="animate-pulse" />
                    Your email client should now be open.
                  </div>
                )}

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;