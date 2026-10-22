import { FaCode } from "react-icons/fa";
import SkillBadge from "./SkillBadge.jsx";

const frontendSkills = [
  {
    label: "React",
    iconUrl: "https://cdn.simpleicons.org/react/61DAFB",
    Icon: FaCode,
  },
  {
    label: "JavaScript",
    iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E",
    Icon: FaCode,
  },
  {
    label: "HTML5",
    iconUrl: "https://cdn.simpleicons.org/html5/E34F26",
    Icon: FaCode,
  },
  {
    label: "CSS3",
    iconUrl: "https://cdn.simpleicons.org/css/1572B6",
    Icon: FaCode,
  },
  {
    label: "Tailwind CSS",
    iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    Icon: FaCode,
  },
];

const Frontend = () => (
  <article className="border-t border-white/15 py-7 sm:py-9">
    <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">01</p>
        <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
          Frontend
        </h3>
      </div>
      <ul
        aria-label="Frontend technologies"
        className="grid grid-cols-4 gap-1.5 sm:grid-cols-2 sm:gap-2.5"
      >
        {frontendSkills.map((skill) => (
          <SkillBadge key={skill.label} {...skill} />
        ))}
      </ul>
    </div>
  </article>
);

export default Frontend;
