import { useCallback, useEffect, useRef, useState } from "react";
import { FaArrowUp, FaGithub, FaPause, FaPlay } from "react-icons/fa6";
import projects from "../data/projects.js";
import Reveal from "./Reveal.jsx";

const featuredPreview = "https://res.cloudinary.com/dr0cgvrva/image/upload/v1792652991/Screenshot_from_2026-10-22_12-39-29_hmdnnr.png";

function PreviewVideo({ src, onStop }) {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const video = ref.current;
    let mounted = true;
    video.play().catch(() => { if (mounted) onStop(); });
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) onStop();
    }, { rootMargin: "160px 0px" });
    observer.observe(video);
    const onVisibility = () => { if (document.hidden) onStop(); };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      mounted = false;
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      video.pause();
    };
  }, [onStop]);

  return <video ref={ref} src={src} className="project-video" data-playing={playing}
    muted loop playsInline preload="auto" onPlaying={() => setPlaying(true)} onError={onStop} aria-hidden="true" />;
}

function ProjectCard({ project, index, preview, setPreview }) {
  const { imgSrc, imageSrc = imgSrc, videoSrc, logoSrc, name, description, link, label } = project;
  const article = useRef(null);
  const [imageStep, setImageStep] = useState(0);
  const [logoFailed, setLogoFailed] = useState(false);
  const active = preview?.index === index;
  const manual = active && preview.mode === "manual";
  const isRepository = new URL(link).hostname === "github.com";
  const poster = imageStep === 0 ? imageSrc : index === 0 && imageStep === 1 ? featuredPreview : null;
  const optimized = poster?.replace("/image/upload/", "/image/upload/f_auto,q_auto,w_1400/");

  const stopPreview = useCallback(() => {
    setPreview((current) => current?.index === index ? null : current);
  }, [index, setPreview]);

  function onEnter(event) {
    if (!videoSrc || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setPreview((current) => current?.mode === "manual" ? current : { index, mode: "hover" });
  }

  function onMove(event) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    const style = article.current.style;
    style.setProperty("--tilt-x", `${y * -5}deg`);
    style.setProperty("--tilt-y", `${x * 5}deg`);
    style.setProperty("--pan-x", `${x * 13}px`);
    style.setProperty("--pan-y", `${y * 10}px`);
    style.setProperty("--arrow-turn", `${45 + x * 22}deg`);
  }

  function onLeave() {
    ["--tilt-x", "--tilt-y", "--pan-x", "--pan-y", "--arrow-turn"].forEach((property) => article.current.style.removeProperty(property));
    setPreview((current) => current?.index === index && current.mode === "hover" ? null : current);
  }

  return (
    <article className="project-card" ref={article} onPointerEnter={onEnter} onPointerMove={onMove} onPointerLeave={onLeave}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-media" aria-label={`Open ${name} in a new tab`}>
        <span aria-hidden="true" className="project-placeholder">{name}</span>
        {poster && <img className="project-image" src={imageStep === 0 ? optimized : poster}
          srcSet={imageStep === 0 && optimized !== poster ? `${poster.replace("/image/upload/", "/image/upload/f_auto,q_auto,w_640/")} 640w, ${optimized} 1400w` : undefined}
          sizes={index === 0 ? "(max-width: 700px) 92vw, 82vw" : "(max-width: 700px) 92vw, 45vw"}
          alt={`${name} project preview`} loading="lazy" decoding="async"
          onError={(event) => {
            const image = event.currentTarget;
            if (image.srcset) {
              image.removeAttribute("srcset");
              image.src = poster;
            } else {
              setImageStep((step) => step + 1);
            }
          }} />}
        {active && <PreviewVideo src={videoSrc} onStop={stopPreview} />}
        <span className="project-index eyebrow">{String(index + 1).padStart(2, "0")}</span>
        <span className="project-tag eyebrow">{label}</span>
      </a>
      <div className="project-meta">
        {logoFailed ? <span className="project-logo project-logo-fallback" aria-hidden="true">{name[0]}</span>
          : <img src={logoSrc} alt="" className="project-logo" loading="lazy" onError={() => setLogoFailed(true)} />}
        <div className="project-copy"><h3><a href={link} target="_blank" rel="noopener noreferrer">{name}</a></h3><p>{description}</p></div>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-visit" aria-label={isRepository ? `${name} on GitHub` : `Visit ${name}`}>
          {isRepository ? <FaGithub aria-hidden="true" /> : <FaArrowUp aria-hidden="true" />}
          <span>{isRepository ? "GitHub" : "Visit site"}</span>
        </a>
      </div>
      {videoSrc && <button className="preview-toggle eyebrow" type="button" onClick={() => {
        if (manual) stopPreview();
        else setPreview({ index, mode: "manual" });
      }}>{manual ? <FaPause aria-hidden="true" /> : <FaPlay aria-hidden="true" />} {manual ? "Stop preview" : "Play preview"}</button>}
    </article>
  );
}

export default function RecentProject() {
  const [preview, setPreview] = useState(null);

  return (
    <section id="projects" className="work section-space" tabIndex={-1}>
      <div className="shell">
        <Reveal className="section-heading">
          <div><p className="eyebrow section-kicker"><span /> Portfolio</p><h2>Selected <em>work.</em></h2></div>
          <p>Full-stack platforms, e-commerce, AI features, and experiments in interactive 3D.</p>
        </Reveal>
        <div className="project-layout">
          {projects.map((project, index) => (
            <Reveal key={project.name} className={`project-slot project-slot-${index + 1}`}>
              <ProjectCard project={project} index={index} preview={preview} setPreview={setPreview} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
