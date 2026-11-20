import { lazy, Suspense } from "react";
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedinIn } from "react-icons/fa6";

const OrbitScene = lazy(() => import("./OrbitScene.jsx"));
const resumeUrl = "https://res.cloudinary.com/dr0cgvrva/image/upload/v1795065737/Manish_Resume_zf47mq.pdf";

export default function HeroSection() {
  return (
    <section id="home" className="hero" tabIndex={-1}>
      <div className="shell hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-enter"><span className="status-dot" /> Available for work <span className="hero-location">/ New Delhi, IN</span></p>
          <h1 className="hero-title hero-enter">Manish<br /><em>Singh<span>.</span></em></h1>
          <p className="hero-role hero-enter">Full-Stack &amp; Creative Developer</p>
          <p className="hero-description hero-enter">I build reliable web products, from the APIs underneath to the interactive experiences on screen.</p>
          <div className="hero-actions hero-enter">
            <a className="solid-button" data-magnetic href="#projects">Explore my work <FaArrowDown aria-hidden="true" /></a>
            <a className="text-action" href="#contact">Get in touch <FaArrowUpRightFromSquare aria-hidden="true" /></a>
          </div>
          <div className="hero-links hero-enter">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Résumé <FaArrowUpRightFromSquare aria-hidden="true" /></a>
            <a href="https://github.com/Dot-Name" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
            <a href="https://www.linkedin.com/in/manish-singh-96a2bb273/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
          </div>
        </div>
        <figure className="hero-art hero-enter">
          <div className="art-panel">
            <div className="art-grid" aria-hidden="true" />
            <span className="art-corner art-corner-top" aria-hidden="true" />
            <span className="art-corner art-corner-bottom" aria-hidden="true" />
            <span className="art-word" aria-hidden="true">ORBIT</span>
            <span className="art-spark" aria-hidden="true">✦</span>
            <div className="art-fallback" aria-hidden="true">✦</div>
            <Suspense fallback={null}><OrbitScene /></Suspense>
            <span className="art-label eyebrow">Interactive 3D</span>
            <span className="art-sticker" aria-hidden="true">漫画 <span>✷</span></span>
          </div>
          <figcaption className="art-caption eyebrow"><span>Orbit study</span><span>WebGL <b>✳</b></span></figcaption>
        </figure>
      </div>
      <div className="hero-strip">
        <div className="shell hero-strip-inner eyebrow">
          <span>Full-stack engineering</span><b aria-hidden="true">✦</b>
          <span>Interactive web</span><b aria-hidden="true">✦</b>
          <a href="#projects">Scroll to projects <FaArrowDown aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
