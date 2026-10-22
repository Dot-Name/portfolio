import {
  FaCreditCard,
  FaDatabase,
  FaKey,
  FaLock,
  FaNetworkWired,
  FaServer,
  FaShieldAlt,
} from "react-icons/fa";
import SkillBadge from "./SkillBadge.jsx";

const skillGroups = [
  {
    number: "02",
    title: "Backend & data",
    skills: [
      {
        label: "Node.js",
        iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
        Icon: FaServer,
      },
      {
        label: "Express",
        iconUrl: "https://cdn.simpleicons.org/express/FFFFFF",
        Icon: FaServer,
      },
      {
        label: "MongoDB",
        iconUrl: "https://cdn.simpleicons.org/mongodb/47A248",
        Icon: FaDatabase,
      },
      {
        label: "Mongoose",
        iconUrl: "https://cdn.simpleicons.org/mongoose/880000",
        Icon: FaDatabase,
      },
      {
        label: "Sequelize",
        iconUrl: "https://cdn.simpleicons.org/sequelize/52B0E7",
        Icon: FaDatabase,
      },
    ],
  },
  {
    number: "03",
    title: "APIs & authentication",
    skills: [
      { label: "REST APIs", Icon: FaNetworkWired },
      { label: "JWT", Icon: FaKey },
      { label: "OAuth", Icon: FaLock },
      { label: "RBAC", Icon: FaShieldAlt },
    ],
  },
  {
    number: "04",
    title: "Integrations",
    skills: [
      {
        label: "Payments",
        iconUrl: "https://cdn.simpleicons.org/razorpay/0C2451",
        Icon: FaCreditCard,
      },
      {
        label: "Cloudinary",
        iconUrl: "https://cdn.simpleicons.org/cloudinary/3448C5",
        Icon: FaServer,
      },
    ],
  },
];

const Backend = () => (
  <>
    {skillGroups.map((group) => (
      <article
        key={group.number}
        className="border-t border-white/15 py-7 sm:py-9"
      >
        <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr] sm:gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
              {group.number}
            </p>
            <h3 className="mt-2 font-display text-2xl text-white sm:text-3xl">
              {group.title}
            </h3>
          </div>
          <ul
            aria-label={group.title}
            className="grid grid-cols-4 gap-1.5 sm:grid-cols-2 sm:gap-2.5"
          >
            {group.skills.map((skill) => (
              <SkillBadge key={skill.label} {...skill} />
            ))}
          </ul>
        </div>
      </article>
    ))}
  </>
);

export default Backend;
