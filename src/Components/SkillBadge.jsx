import { createElement, useState } from "react";

const SkillBadge = ({ label, iconUrl, Icon }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <li className="group flex min-h-[5.25rem] min-w-0 flex-col items-center justify-center gap-1.5 border border-white/10 bg-white/[0.025] px-1 py-2 text-center text-[10px] leading-tight text-slate-200 transition duration-200 hover:border-cyan-200/40 hover:bg-white/[0.05] hover:text-white [@media(hover:hover)]:hover:scale-[1.02] motion-reduce:transform-none sm:min-h-14 sm:flex-row sm:justify-start sm:gap-3 sm:px-4 sm:py-3 sm:text-sm sm:text-left">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center sm:h-7 sm:w-7">
        {iconUrl && !imageFailed ? (
          <img
            src={iconUrl}
            alt=""
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-5 w-5 object-contain sm:h-6 sm:w-6"
          />
        ) : (
          createElement(Icon, {
            "aria-hidden": "true",
            className: "h-5 w-5 text-cyan-200 transition group-hover:text-white",
          })
        )}
      </span>
      <span>{label}</span>
    </li>
  );
};

export default SkillBadge;
