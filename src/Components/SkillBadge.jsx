import { createElement } from "react";

export default function SkillBadge({ label, Icon }) {
  return <li className="skill-badge">{createElement(Icon, { "aria-hidden": true })}<span>{label}</span></li>;
}
