import { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import projects from "../data/projects.js";
import Reveal from "./Reveal.jsx";

const ProjectCard = ({ project, index }) => {
  const { imgSrc, videoSrc, logoSrc, name, description, link, label } = project;
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(
    () => () => {
      videoRef.current?.pause();
    },
    [],
  );

  const playPreview = (event) => {
    if (event?.pointerType && event.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const video = videoRef.current;
    if (!video) return;
    video.preload = "auto";
    video.play().catch((error) => {
      if (error.name !== "AbortError") {
        console.error(`Unable to play the ${name} project preview`, error);
      }
    });
  };

  const stopPreview = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    video.preload = "none";
  };

  const handlePointerMove = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    cardRef.current?.style.setProperty(
      "--card-tilt-x",
      `${(0.5 - y) * 4}deg`,
    );
    cardRef.current?.style.setProperty(
      "--card-tilt-y",
      `${(x - 0.5) * 4}deg`,
    );
  };

  const resetTilt = () => {
    cardRef.current?.style.setProperty("--card-tilt-x", "0deg");
    cardRef.current?.style.setProperty("--card-tilt-y", "0deg");
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onPointerEnter={playPreview}
      onPointerMove={handlePointerMove}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        stopPreview();
        resetTilt();
      }}
      onFocus={playPreview}
      onBlur={stopPreview}
      aria-label={`${name} — ${description}. Opens in a new tab.`}
      className="group block w-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10]"
    >
      <div
        ref={cardRef}
        style={{
          transform:
            "perspective(1100px) rotateX(var(--card-tilt-x, 0deg)) rotateY(var(--card-tilt-y, 0deg))",
        }}
        className="h-full border border-white/10 bg-[#10151b] transition duration-300 group-hover:border-cyan-200/35 group-hover:shadow-[0_20px_70px_-35px_rgba(34,211,238,0.35)] motion-reduce:transform-none motion-reduce:transition-none"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0c1118]">
          {!imageFailed ? (
            <img
              src={imgSrc}
              alt={`${name} website preview`}
              loading={index === 0 ? "eager" : "lazy"}
              onError={() => setImageFailed(true)}
              className={`absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] motion-reduce:transform-none ${
                videoReady ? "group-hover:opacity-0" : ""
              }`}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-900 to-cyan-950 p-6 text-center">
              <span className="font-display text-2xl text-white">{name}</span>
            </div>
          )}

          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            aria-hidden="true"
            onPlaying={() => setVideoReady(true)}
            className={`absolute inset-0 h-full w-full object-cover opacity-0 transition duration-300 ${
              videoReady ? "group-hover:opacity-100 group-focus-within:opacity-100" : ""
            }`}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080b10]/75 via-transparent to-black/10" />
          <span className="absolute left-4 top-4 border border-white/20 bg-[#080b10]/75 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors group-hover:border-cyan-200/50">
            {label}
          </span>
          <span className="absolute bottom-4 right-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/90 transition-transform group-hover:translate-x-1">
            Visit project <FaArrowUpRightFromSquare aria-hidden="true" />
          </span>
        </div>

        <div className="flex items-start gap-4 p-5 sm:p-6">
          {logoFailed ? (
            <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 bg-white/5 font-display text-lg text-cyan-200">
              {name.charAt(0)}
            </span>
          ) : (
            <img
              src={logoSrc}
              alt=""
              loading="lazy"
              onError={() => setLogoFailed(true)}
              className="h-10 w-10 shrink-0 rounded-full border border-white/15 bg-white/5 object-contain p-1 transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="min-w-0">
            <h3 className="font-display text-xl text-white transition group-hover:translate-x-1 group-hover:text-cyan-100 motion-reduce:transform-none sm:text-2xl">
              {name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400 sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

const RecentProject = () => (
  <section id="projects" className="scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
    <div className="mx-auto w-full max-w-screen-2xl">
      <Reveal className="mb-12 flex flex-col justify-between gap-6 border-b border-white/10 pb-8 md:mb-16 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            Selected work
          </p>
          <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
            Products in practice.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
          A selection of products and experiences built across full-stack
          development, e-commerce, AI features, and interactive 3D.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-x-7 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 xl:gap-y-14">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            as="div"
            delay={index * 65}
            className="h-full"
          >
            <ProjectCard project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default RecentProject;
