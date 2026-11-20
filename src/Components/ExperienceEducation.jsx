import projects from "../data/projects.js";
import Reveal from "./Reveal.jsx";

const milestones = [
  { title: "GATE 2026", period: "2026", detail: "Qualified · All India Rank 13,656" },
  { title: "B.Tech, Computer Science and Engineering", period: "2022–2026", detail: "PDM University · CGPA 8.63/10" },
  { title: "Class XII · CBSE", period: "2021–2022", detail: "87.6% · First in class", note: "Physics 95 · Chemistry 94 · Computer Science 90" },
  { title: "Class X · CBSE", period: "2019–2020", detail: "74.6%" },
];

export default function ExperienceEducation() {
  const analytics = projects.find(({ name }) => name === "Analytics Circle");
  const godims = projects[0];

  return (
    <section id="experience" className="journey section-space" tabIndex={-1}>
      <div className="shell">
        <Reveal className="section-heading">
          <div><p className="eyebrow section-kicker"><span /> Experience &amp; education</p><h2>The <em>journey.</em></h2></div>
        </Reveal>
        <div className="journey-layout">
          <Reveal className="journey-work">
            <h3 className="eyebrow">Product development</h3>
            <article><h4><a href={analytics.link} target="_blank" rel="noopener noreferrer">{analytics.name}</a></h4><p>Contributed to AI and applicant-tracking system (ATS) features.</p></article>
            <article><h4><a href={godims.link} target="_blank" rel="noopener noreferrer">{godims.name}</a></h4><p>{godims.description}</p></article>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="eyebrow timeline-heading">Education &amp; credentials</h3>
            <ol className="timeline">
              {milestones.map(({ title, period, detail, note }) => (
                <li key={title}>
                  <span className="eyebrow">{period}</span><h4>{title}</h4><p>{detail}</p>
                  {note && <p className="timeline-note">{note}</p>}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
