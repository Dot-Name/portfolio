import { FaReact, FaNodeJs, FaDatabase, FaCodeBranch } from "react-icons/fa6";
import Frontend from "./frontend.jsx";
import Backend from "./backend.jsx";
import Tools from "./tools.jsx";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills" className="stack section-space" tabIndex={-1}>
      <div className="shell stack-layout">
        <Reveal className="stack-sidebar">
          <p className="eyebrow section-kicker"><span /> Tech stack</p>
          <h2>Tools of<br /><em>the trade.</em></h2>
          <div className="stack-orbit" aria-hidden="true">
            <div className="stack-orbit-center">&lt;/&gt;</div>
            <div className="stack-orbit-track"><span><FaReact /></span><span><FaNodeJs /></span><span><FaDatabase /></span><span><FaCodeBranch /></span></div>
          </div>
        </Reveal>
        <Reveal className="skill-groups" delay={80}>
          <Frontend />
          <Backend />
          <Tools />
          <details className="skill-group" name="skill-categories">
            <summary>Applied AI</summary>
            <p>AI-powered résumé analysis and applicant-tracking features for <a href="https://www.analyticscircle.com/" target="_blank" rel="noopener noreferrer">Analytics Circle</a>.</p>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
