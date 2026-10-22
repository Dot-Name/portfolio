import { useState } from "react";
import { Link } from "react-scroll";
import projects from "../data/projects.js";
import Reveal from "./Reveal.jsx";

const collageProjects = [
  projects[1],
  {
    ...projects[3],
    imgSrc:
      "https://res.cloudinary.com/dr0cgvrva/image/upload/v1792652639/Screenshot_from_2026-10-22_12-33-43_hijljy.png",
  },
  projects[2],
];

const AboutMe = () => {
  const [failedImages, setFailedImages] = useState({});

  return (
    <section id="about" className="scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto grid w-full max-w-screen-2xl items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
        <Reveal className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">
            About the engineer
          </p>
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            A little about how I build.
          </h2>
          <Reveal className="reveal-stagger mt-7 max-w-3xl space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            <p>
              I'm Manish Singh, a full-stack developer who enjoys turning
              complex ideas into practical, well-engineered products.
            </p>
            <p>
              My work spans the development lifecycle: shaping user
              experiences, building REST APIs, implementing authentication,
              integrating services, and bringing applications to production.
            </p>
            <p>
              Through work including Godims, Lucky Blinds, Analytics Circle,
              and interactive 3D projects, I've worked across different product
              needs. I care about understanding the problem, making sound
              technical decisions, and building for maintainability.
            </p>
            <p>
              Good engineering is where thoughtful design meets dependable
              execution.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to="contact"
              smooth
              offset={-80}
              duration={500}
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10] sm:text-base"
            >
              Get in touch
            </Link>
            <a
              href="https://github.com/Dot-Name"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 underline decoration-cyan-300/50 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
            >
              Explore my GitHub
            </a>
          </div>
        </Reveal>

        <Reveal
          className="order-1 hidden grid-cols-2 gap-3 sm:gap-4 md:grid lg:order-2"
          delay={100}
        >
          {collageProjects.map((project, index) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block overflow-hidden border border-white/10 bg-[#111821] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                index === 0 ? "col-span-2" : ""
              }`}
              aria-label={`View ${project.name} project (opens in a new tab)`}
            >
              {failedImages[project.name] ? (
                <div
                  className={`flex items-center justify-center bg-gradient-to-br from-slate-900 to-cyan-950 font-display text-xl text-white ${
                    index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  {project.name}
                </div>
              ) : (
                <img
                  src={project.imgSrc}
                  alt={`${project.name} project preview`}
                  loading="lazy"
                  onError={() =>
                    setFailedImages((previous) => ({
                      ...previous,
                      [project.name]: true,
                    }))
                  }
                  className={`w-full object-cover object-top transition duration-500 group-hover:scale-[1.03] motion-reduce:scale-100 motion-reduce:transition-none ${
                    index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                />
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-3 pt-10 text-sm font-medium text-white sm:px-5 sm:pb-4 sm:text-base">
                {project.name}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default AboutMe;
