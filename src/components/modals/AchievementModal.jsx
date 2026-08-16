// AchievementModal.jsx - Updated classes only
import { useEffect } from "react";

import {
  X,
  ExternalLink,
  Trophy,
  CalendarDays,
  Building2,
} from "lucide-react";

const AchievementModal = ({ achievement, onClose }) => {
  useEffect(() => {
    if (!achievement) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [achievement, onClose]);

  if (!achievement) {
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
        aria-labelledby="achievement-modal-title"
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-violet-500/30 bg-white/95 shadow-[0_0_60px_rgba(139,92,246,0.2)] backdrop-blur-sm dark:border-violet-500/30 dark:bg-gray-950/95 dark:shadow-[0_0_60px_rgba(139,92,246,0.15)]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close achievement details"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/80 text-white transition-all duration-300 hover:scale-110 hover:bg-violet-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
        >
          <X size={20} />
        </button>

        <div className="grid lg:grid-cols-2">

          {/* IMAGE */}
          <div className="flex min-h-[400px] items-center justify-center bg-gradient-to-br from-violet-500/10 to-purple-500/10 p-5 dark:from-violet-500/5 dark:to-purple-500/5">

            {achievement.image ? (
              <img
                src={achievement.image}
                alt={`${achievement.title} certificate`}
                className="max-h-[70vh] w-full rounded-xl object-contain shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)]"
              />
            ) : (
              <div className="flex h-full min-h-[300px] w-full items-center justify-center rounded-xl bg-violet-500/10 shadow-[0_0_30px_rgba(139,92,246,0.1)] dark:bg-violet-500/5">
                <Trophy
                  size={60}
                  className="text-violet-400 transition-colors duration-300 hover:text-violet-500"
                />
              </div>
            )}

          </div>

          {/* DETAILS */}
          <div className="p-7 sm:p-10">

            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 text-violet-600 shadow-[0_0_20px_rgba(139,92,246,0.1)] dark:from-violet-500/20 dark:to-purple-500/20 dark:text-violet-400">
              <Trophy size={26} />
            </div>

            {/* Category */}
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              {achievement.category}
            </p>

            {/* Title */}
            <h2
              id="achievement-modal-title"
              className="mt-2 text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent sm:text-3xl dark:from-violet-400 dark:via-purple-400 dark:to-fuchsia-400"
            >
              {achievement.title}
            </h2>

            {/* Organization */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400">
              <Building2 size={17} />
              {achievement.organization}
            </div>

            {/* Date */}
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400">
              <CalendarDays size={17} />
              {achievement.date}
            </div>

            <div className="my-6 h-px bg-gradient-to-r from-violet-500/30 to-transparent dark:from-violet-500/20" />

            {/* Description */}
            <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
              {achievement.description}
            </p>

            {/* Details */}
            {achievement.details?.length > 0 && (
              <div className="mt-7">

                <h3 className="text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-purple-400">
                  Details
                </h3>

                <ul className="mt-4 space-y-2">

                  {achievement.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3 text-sm leading-6 text-gray-600 transition-colors duration-300 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
                      <span>{detail}</span>
                    </li>
                  ))}

                </ul>

              </div>
            )}

            {/* Verification */}
            {achievement.credentialUrl && (
              <a
                href={achievement.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(139,92,246,0.2)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
              >
                View Credential
                <ExternalLink size={17} className="transition-transform duration-300 hover:rotate-12" />
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementModal;