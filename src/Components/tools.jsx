import { FaSearch } from "react-icons/fa";
import SkillBadge from "./SkillBadge.jsx";

const tools = [
  {
    label: "Git",
    iconUrl: "https://cdn.simpleicons.org/git/F05032",
    Icon: FaSearch,
  },
  {
    label: "GitHub",
    iconUrl: "https://cdn.simpleicons.org/github/FFFFFF",
    Icon: FaSearch,
  },
  {
    label: "Figma",
    iconUrl: "https://cdn.simpleicons.org/figma/F24E1E",
    Icon: FaSearch,
  },
  {
    label: "NPM",
    iconUrl: "https://cdn.simpleicons.org/npm/CB3837",
    Icon: FaSearch,
  },
  { label: "SEO", Icon: FaSearch },
];

const Tools = () => (
  <article className="border-y border-white/15 py-7 sm:py-9">
    <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">05</p>
        <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
          Tools & practice
        </h3>
      </div>
      <ul
        aria-label="Tools and practices"
        className="grid grid-cols-4 gap-1.5 sm:grid-cols-2 sm:gap-2.5"
      >
        {tools.map((tool) => (
          <SkillBadge key={tool.label} {...tool} />
        ))}
      </ul>
    </div>
  </article>
);

export default Tools;
