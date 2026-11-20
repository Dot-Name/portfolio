import { FaArrowUpRightFromSquare, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa6";
import projects from "../data/projects.js";
import Reveal from "./Reveal.jsx";

const snapshots = [
  projects[1],
  { ...projects[3], imgSrc: "https://res.cloudinary.com/dr0cgvrva/image/upload/v1792652639/Screenshot_from_2026-10-22_12-33-43_hijljy.png" },
  projects[2],
];

export default function AboutMe() {
  return (
    <section id="about" className="about section-space" tabIndex={-1}>
      <div className="shell">
        <div className="about-layout">
          <Reveal className="about-portrait">
            <div className="portrait-grid" />
            <div className="portrait-letter" aria-hidden="true">MS</div>
            <img src="/Assets/Its_me.png" alt="Manish Singh" width="608" height="555" loading="lazy" decoding="async" />
            <a className="portrait-badge portrait-react" href="#skills" aria-label="React in my tech stack"><FaReact aria-hidden="true" /></a>
            <a className="portrait-badge portrait-node" href="#skills" aria-label="Node.js in my tech stack"><FaNodeJs aria-hidden="true" /></a>
            <a className="portrait-badge portrait-data" href="#skills" aria-label="Databases in my tech stack"><FaDatabase aria-hidden="true" /></a>
            <span className="portrait-caption eyebrow">Manish Singh / New Delhi, India</span>
          </Reveal>
          <Reveal className="about-copy" delay={75}>
            <p className="eyebrow section-kicker"><span /> About me</p>
            <h2>Good design.<br /><em>Solid code.</em></h2>
            <p>I’m Manish Singh, a full-stack developer who enjoys turning complex ideas into practical products.</p>
            <p>I work across the stack, from shaping the interface to building REST APIs, implementing authentication, and taking applications to production. I care about understanding the problem and leaving code that’s easy to maintain.</p>
            <a href="https://github.com/Dot-Name" target="_blank" rel="noopener noreferrer" className="text-action">Explore my GitHub <FaArrowUpRightFromSquare aria-hidden="true" /></a>
          </Reveal>
        </div>
        <details className="snapshot-details">
          <summary className="eyebrow">More project snapshots</summary>
          <div className="snapshots">
            {snapshots.map(({ name, imgSrc, link }) => (
              <a key={name} href={link} target="_blank" rel="noopener noreferrer">
                <img src={imgSrc} alt={`${name} project preview`} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.hidden = true; }} />
                <span>{name} <FaArrowUpRightFromSquare aria-hidden="true" /></span>
              </a>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
