import { FaSearch } from "react-icons/fa";
import { SiFigma, SiGit, SiGithub, SiNpm } from "react-icons/si";
import SkillBadge from "./SkillBadge.jsx";

const tools = [
  { label: "Git", Icon: SiGit },
  { label: "GitHub", Icon: SiGithub },
  { label: "Figma", Icon: SiFigma },
  { label: "NPM", Icon: SiNpm },
  { label: "SEO", Icon: FaSearch },
];

export default function Tools() {
  return (
    <details className="skill-group" name="skill-categories">
      <summary>Tools &amp; practice</summary>
      <ul aria-label="Tools and practice">
        {tools.map((tool) => <SkillBadge key={tool.label} {...tool} />)}
      </ul>
    </details>
  );
}
