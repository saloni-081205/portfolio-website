// Certifications.jsx
import { useState } from "react";
import { ArrowUpRight, Award, CalendarDays, Filter } from "lucide-react";
import { motion } from "framer-motion";

import SectionTitle from "./ui/SectionTitle";
import CertificateModal from "./modals/CertificateModal";

import { certifications } from "../data/certifications";

const Certifications = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  // Get unique categories from certifications
  const categories = ["All", ...new Set(certifications.map((cert) => cert.category))];

  // Filter certifications based on active filter
  const filteredCertifications = activeFilter === "All"
    ? certifications
    : certifications.filter((cert) => cert.category === activeFilter);

  return (
    <>
      <section
        id="certifications"
        className="relative bg-white py-24 overflow-hidden dark:bg-gray-950"
      >
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-500/5" />
          <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-fuchsia-500/5 blur-3xl dark:bg-fuchsia-500/5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          <SectionTitle
            eyebrow="Credentials"
            title="My Certifications"
            description="Verified certifications and professional training credentials earned across technical domains."
          />

          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
              <Filter size={18} />
              <span className="text-sm font-semibold uppercase tracking-wider">Filter:</span>
            </div>
            
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    : "border border-violet-500/30 bg-white/50 text-gray-700 backdrop-blur-sm hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-600 dark:border-violet-500/30 dark:bg-gray-950/50 dark:text-gray-300 dark:hover:border-violet-400 dark:hover:text-violet-400"
                }`}
              >
                {category}
                {activeFilter === category && (
                  <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs text-white">
                    {filteredCertifications.length}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {filteredCertifications.map((certificate, index) => (
              <motion.button
                type="button"
                key={certificate.id}
                onClick={() => setSelectedCertificate(certificate)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-white/80 text-left backdrop-blur-sm shadow-[0_0_20px_rgba(139,92,246,0.05)] transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] dark:border-violet-500/20 dark:bg-gray-950/80 dark:hover:border-violet-500/40 dark:hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-fuchsia-500/0 opacity-0 blur-xl transition-opacity duration-500" />

                {/* Certificate Preview */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800">

                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-1 text-xs font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    {certificate.category}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-violet-950/0 via-violet-950/0 to-violet-950/0 transition-all duration-500 group-hover:from-violet-950/0 group-hover:via-violet-950/20 group-hover:to-violet-950/60">

                    <span className="flex translate-y-4 items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white opacity-0 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                      View Certificate
                      <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
                    </span>

                  </div>
                </div>

                {/* Card Content */}
                <div className="relative p-5">

                  <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400">
                    <Award size={17} />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {certificate.category}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-lg font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400">
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-600 transition-colors duration-300 group-hover:text-violet-700 dark:text-gray-400 dark:group-hover:text-violet-300">
                    {certificate.issuer}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <CalendarDays size={15} />
                    {certificate.date}
                  </div>

                </div>
              </motion.button>
            ))}

          </div>

          {/* Empty State */}
          {filteredCertifications.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <Award size={48} className="text-violet-400/50 dark:text-violet-500/30" />
              <h3 className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
                No certifications found
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Try selecting a different filter category.
              </p>
            </div>
          )}

        </div>
      </section>

      {/* Modal */}
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
};

export default Certifications;