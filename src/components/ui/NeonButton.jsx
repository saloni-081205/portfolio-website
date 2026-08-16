import { ArrowRight } from "lucide-react";

const NeonButton = ({
  children,
  href,
  onClick,
  icon = true,
  className = "",
}) => {
  const baseClasses = `
    group
    relative
    inline-flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    rounded-xl

    border
    border-purple-400/70

    bg-gradient-to-r
    from-violet-600
    via-purple-600
    to-fuchsia-600

    px-6
    py-3

    text-sm
    font-semibold
    text-white

    shadow-[0_0_12px_rgba(168,85,247,0.5),0_0_30px_rgba(168,85,247,0.25)]

    transition-all
    duration-300

    hover:-translate-y-0.5

    hover:shadow-[0_0_18px_rgba(168,85,247,0.85),0_0_45px_rgba(168,85,247,0.45)]


    ${className}
  `;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}

          {icon && (
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </span>

        {/* Neon shine */}
        <span
          className="
            absolute
            inset-0
            -translate-x-full
            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent
            transition-transform
            duration-700
            group-hover:translate-x-full
          "
        />
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={baseClasses}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}

        {icon && (
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>

      <span
        className="
          absolute
          inset-0
          -translate-x-full
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
          transition-transform
          duration-700
          group-hover:translate-x-full
        "
      />
    </button>
  );
};

export default NeonButton;