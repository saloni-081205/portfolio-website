// SectionTitle component (updated classes only)
const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <h2
        className="
          bg-gradient-to-r
          from-violet-600
          via-purple-500
          to-fuchsia-500
          bg-clip-text
          text-3xl
          font-extrabold
          tracking-tight
          text-transparent
          sm:text-4xl
          bg-[length:200%_auto]
          animate-gradient-x
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className="
            mx-auto
            mt-3
            max-w-2xl
            text-sm
            leading-6
            text-gray-600
            dark:text-gray-400
            sm:text-base
          "
        >
          {subtitle}
        </p>
      )}

      <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-500 shadow-[0_0_12px_rgba(168,85,247,0.55)] animate-pulse" />
    </div>
  );
};

export default SectionTitle;