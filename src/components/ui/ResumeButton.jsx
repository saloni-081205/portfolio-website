import { Download } from "lucide-react";

const ResumeButton = ({ className = "" }) => {
  return (
    <a
      href="/resume.pdf"
      download="Saloni Rana_Resume.pdf"
      className={`
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
    `}
    >
      <Download size={17} />
      Download Resume
    </a>
  );
};

export default ResumeButton;