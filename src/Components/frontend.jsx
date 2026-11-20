import { SiCss, SiHtml5, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import SkillBadge from "./SkillBadge.jsx";

const frontendSkills = [
  { label: "React", Icon: SiReact },
  { label: "JavaScript", Icon: SiJavascript },
  { label: "HTML5", Icon: SiHtml5 },
  { label: "CSS3", Icon: SiCss },
  { label: "Tailwind CSS", Icon: SiTailwindcss },
];

export default function Frontend() {
  return (
    <details className="skill-group" name="skill-categories" open>
      <summary>Frontend</summary>
      <ul aria-label="Frontend">
        {frontendSkills.map((skill) => <SkillBadge key={skill.label} {...skill} />)}
      </ul>
    </details>
  );
}
