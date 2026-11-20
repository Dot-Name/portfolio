import { FaKey, FaLock, FaNetworkWired, FaShieldAlt } from "react-icons/fa";
import {
  SiCloudinary, SiExpress, SiMongodb, SiMongoose, SiMysql, SiNodedotjs, SiRazorpay, SiSequelize,
} from "react-icons/si";
import SkillBadge from "./SkillBadge.jsx";

const skillGroups = [
  {
    title: "Backend",
    skills: [{ label: "Node.js", Icon: SiNodedotjs }, { label: "Express", Icon: SiExpress }],
  },
  {
    title: "Databases",
    skills: [
      { label: "MongoDB", Icon: SiMongodb },
      { label: "Mongoose", Icon: SiMongoose },
      { label: "MySQL", Icon: SiMysql },
      { label: "Sequelize", Icon: SiSequelize },
    ],
  },
  {
    title: "APIs & authentication",
    skills: [
      { label: "REST APIs", Icon: FaNetworkWired },
      { label: "JWT", Icon: FaKey },
      { label: "OAuth", Icon: FaLock },
      { label: "RBAC", Icon: FaShieldAlt },
    ],
  },
  {
    title: "Integrations",
    skills: [{ label: "Payments", Icon: SiRazorpay }, { label: "Cloudinary", Icon: SiCloudinary }],
  },
];

export default function Backend() {
  return skillGroups.map(({ title, skills }) => (
    <details key={title} className="skill-group" name="skill-categories">
      <summary>{title}</summary>
      <ul aria-label={title}>
        {skills.map((skill) => <SkillBadge key={skill.label} {...skill} />)}
      </ul>
    </details>
  ));
}
