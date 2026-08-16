// CertificateModal.jsx - Updated classes only
import { useEffect } from "react";
import {
  X,
  ExternalLink,
  CalendarDays,
  Award,
} from "lucide-react";

const CertificateModal = ({ certificate, onClose }) => {
  useEffect(() => {
    if (!certificate) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [certificate, onClose]);

  if (!certificate) {
    return null;
  }

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-violet-950/40 p-4 backdrop-blur-md"
      onMouseDown={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="certificate-modal-title"
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-violet-500/30 bg-white/95 shadow-[0_0_60px_rgba(139,92,246,0.2)] backdrop-blur-sm dark:border-violet-500/30 dark:bg-gray-950/95 dark:shadow-[0_0_60px_rgba(139,92,246,0.15)]"
      >

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/80 text-white transition-all duration-300 hover:scale-110 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* Certificate Image */}
          <div className="flex min-h-[300px] items-center justify-center bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-5 dark:from-violet-500/5 dark:to-purple-500/5">

            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              className="max-h-[70vh] w-full rounded-lg object-contain shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]"
            />

          </div>

          {/* Certificate Details */}
          <div className="flex flex-col justify-center p-7 sm:p-10">

            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
              <Award size={26} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Certification
            </p>

            <h2
              id="certificate-modal-title"
              className="mt-2 text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent sm:text-3xl dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400"
            >
              {certificate.title}
            </h2>

            <p className="mt-3 text-base font-medium text-gray-700 dark:text-gray-300">
              {certificate.issuer}
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <CalendarDays size={17} />
              <span>{certificate.date}</span>
            </div>

            <div className="mt-6 h-px bg-gradient-to-r from-violet-500/30 to-transparent dark:from-violet-500/20" />

            <p className="mt-6 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {certificate.description}
            </p>

            {/* Credential Link */}
            {certificate.credentialUrl && (
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
              >
                Verify Credential
                <ExternalLink size={17} className="transition-transform duration-300 group-hover:rotate-12" />
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;