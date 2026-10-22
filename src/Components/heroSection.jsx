<<<<<<< HEAD
import { useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const heroImages = {
  godims:
    "https://res.cloudinary.com/dr0cgvrva/image/upload/v1792652991/Screenshot_from_2026-10-22_12-39-29_hmdnnr.png",
  featured:
    "https://res.cloudinary.com/dr0cgvrva/image/upload/v1792652639/Screenshot_from_2026-10-22_12-33-43_hijljy.png",
};

const HeroSection = () => {
  const [failedHeroImages, setFailedHeroImages] = useState({});
  const visualRef = useRef(null);

  const handleVisualPointerMove = (event) => {
    if (
      event.pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    visualRef.current?.style.setProperty(
      "--hero-tilt-x",
      `${(0.5 - y) * 4}deg`,
    );
    visualRef.current?.style.setProperty(
      "--hero-tilt-y",
      `${(x - 0.5) * 4}deg`,
    );
  };

  const resetVisualTilt = () => {
    visualRef.current?.style.setProperty("--hero-tilt-x", "0deg");
    visualRef.current?.style.setProperty("--hero-tilt-y", "0deg");
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 px-4 pb-24 pt-16 sm:px-6 sm:pt-24 md:pb-32 md:pt-28"
    >
      <div className="mx-auto grid w-full max-w-screen-2xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
      <div className="order-1 text-center lg:text-left">
        <p
          className="hero-enter mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm"
          style={{ "--hero-delay": "40ms" }}
        >
          Full-stack developer <span className="px-1 text-cyan-500">·</span>
          MERN stack <span className="px-1 text-cyan-500">·</span> India
        </p>
        <h1
          className="hero-enter font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          style={{ "--hero-delay": "100ms" }}
        >
          I build digital products{" "}
          <span className="text-cyan-300">that work in the real world.</span>
        </h1>
        <p
          className="hero-enter mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0 lg:text-xl"
          style={{ "--hero-delay": "180ms" }}
        >
          I'm Manish Singh, a full-stack developer focused on building reliable
          web applications, useful developer tools, and engaging digital
          experiences — from the first line of code to production.
        </p>

        <div
          className="hero-enter mt-8 flex flex-wrap justify-center gap-3 lg:justify-start"
          style={{ "--hero-delay": "250ms" }}
        >
          <Link
            to="projects"
            smooth
            offset={-80}
            duration={500}
            className="inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10] sm:text-base"
          >
            Explore projects
          </Link>
          <Link
            to="contact"
            smooth
            offset={-80}
            duration={500}
            className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-200/70 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10] sm:text-base"
          >
            Let's talk
          </Link>
        </div>

        <div
          className="hero-enter mt-9 flex items-center justify-center gap-5 text-sm text-slate-400 lg:justify-start"
          style={{ "--hero-delay": "320ms" }}
        >
          <a
            href="https://github.com/Dot-Name"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Manish Singh on GitHub (opens in a new tab)"
            className="inline-flex items-center gap-2 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            <FaGithub aria-hidden="true" /> GitHub
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-white/20" />
          <a
            href="https://www.linkedin.com/in/manish-singh-96a2bb273/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Manish Singh on LinkedIn (opens in a new tab)"
            className="inline-flex items-center gap-2 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            <FaLinkedinIn aria-hidden="true" /> LinkedIn
          </a>
          <span aria-hidden="true" className="h-4 w-px bg-white/20" />
          <a
            href="mailto:manishsingh1409@gmail.com"
            className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
          >
            Email
          </a>
        </div>
      </div>

      <div className="hero-enter order-2 mx-auto hidden w-full max-w-2xl md:block">
        <div
          ref={visualRef}
          onPointerMove={handleVisualPointerMove}
          onPointerLeave={resetVisualTilt}
          className="group/hero-visual relative aspect-[1.12/1] transition-transform duration-500 ease-out motion-reduce:transform-none motion-reduce:transition-none"
          style={{
            transform:
              "perspective(1200px) rotateX(var(--hero-tilt-x, 0deg)) rotateY(var(--hero-tilt-y, 0deg))",
          }}
        >
          <div className="absolute inset-4 rotate-[-4deg] border border-cyan-200/20 bg-cyan-300/5 transition duration-500 group-hover/hero-visual:border-cyan-200/40 group-hover/hero-visual:bg-cyan-300/[0.08] sm:inset-8 motion-reduce:transition-none" />
          <div className="absolute inset-0 rotate-[2deg] overflow-hidden border border-white/15 bg-[#111821] shadow-2xl shadow-black/40 transition duration-500 group-hover/hero-visual:rotate-0 group-hover/hero-visual:shadow-cyan-950/40 motion-reduce:rotate-0 motion-reduce:transition-none">
            {failedHeroImages.main ? (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 to-cyan-950 font-display text-3xl text-white">
                Godims
              </div>
            ) : (
              <img
                src={heroImages.godims}
                alt="Godims website preview"
                fetchPriority="high"
                onError={() =>
                  setFailedHeroImages((previous) => ({
                    ...previous,
                    main: true,
                  }))
                }
                className="h-full w-full object-cover object-top opacity-90 transition duration-700 group-hover/hero-visual:scale-105 motion-reduce:scale-100 motion-reduce:transition-none"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b10]/85 via-transparent to-black/5" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200 sm:text-xs">
                  Selected work
                </p>
                <p className="mt-1 font-display text-2xl text-white sm:text-3xl">
                  Godims
                </p>
              </div>
              <span className="mb-1 border border-white/25 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white backdrop-blur-sm sm:text-xs">
                Full-stack
              </span>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 w-2/5 border border-white/15 bg-[#111821] p-2 shadow-2xl sm:-bottom-8 sm:-left-5 sm:p-3">
            {failedHeroImages.secondary ? (
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-900 to-cyan-950 p-2 text-center font-display text-sm text-white">
                Featured work
              </div>
            ) : (
              <img
                src={heroImages.featured}
                alt="Featured portfolio project preview"
                loading="lazy"
                onError={() =>
                  setFailedHeroImages((previous) => ({
                    ...previous,
                    secondary: true,
                  }))
                }
                className="aspect-[4/3] w-full object-cover object-top transition duration-500 group-hover/hero-visual:scale-105 motion-reduce:scale-100 motion-reduce:transition-none"
              />
            )}
           
          </div>
          <span
            aria-hidden="true"
            className="hero-visual-float absolute -right-2 top-1/3 h-3 w-3 rounded-full border border-cyan-200/70 bg-cyan-200/20 shadow-[0_0_24px_rgba(103,232,249,0.35)] sm:-right-4 motion-reduce:animate-none"
          />
        </div>
      </div>
    </div>
  </section>
=======
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll

const HeroSection = () => {
  const [inView, setInView] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Effect to detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Trigger the animation on page load
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInView(true);
    }, 300); // Delay the animation to allow the page to load

    return () => clearTimeout(timeout);
  }, []);

  // Calculate scroll-based animation values
  const translateImage = scrollY > 0 ? `translateX(-${Math.min(scrollY / 2, 150)}%)` : 'translateX(-150%)';
  const translateText = scrollY > 0 ? `translateX(${Math.min(scrollY / 2, 150)}%)` : 'translateX(150%)';

  return (
    <div className="flex items-center justify-center pt-10 pb-10 overflow-x-hidden sm:pt-6 sm:pb-6" id="home">
      <div className="flex flex-col items-center justify-center w-11/12 sm:flex-row sm:w-9/12">
        {/* Image Container */}
        <div
          className={`w-full sm:w-[50%] aspect-square overflow-hidden transform transition-all duration-700`}
          style={{ transform: inView ? 'translateX(0)' : translateImage }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Assets/its_me.gif`}
            alt="Manish Singh"
            className="object-cover w-full h-full "
          />
        </div>

        {/* Text Content */}
        <div
          className={`mt-6 sm:mt-0 sm:ml-8 sm:w-[50%] transform transition-all duration-700`}
          style={{ transform: inView ? 'translateX(0)' : translateText }}
        >
          <h1 className="mb-4 text-2xl font-bold text-center text-white sm:text-left sm:text-3xl md:text-4xl lg:text-5xl font-orbitron">
            "Crafting Digital Experiences with Precision and Innovation"
          </h1>
          <p className="mb-6 text-base text-center text-white sm:text-left sm:text-lg md:text-xl lg:text-2xl font-saira">
            Welcome to my portfolio! I’m Manish, a full-stack developer dedicated to turning your ideas into sleek, functional, and visually captivating web applications. Whether it’s intuitive UI/UX design or powerful backend systems, I combine the latest tech with creative problem-solving to deliver high-quality results. Let’s create the future of the web, together.
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link
              to="skills" // Target the Skills section
              smooth={true} // Enable smooth scroll
              offset={-70} // Adjust for any offset like fixed navbar
              duration={500} // Duration of the scroll
            >
              <button className="relative animate-bounce inline-block px-4 py-2 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full sm:px-6 sm:py-3 sm:text-lg lg:text-xl font-orbitron bg-customCyan hover:border-customCyan hover:bg-transparent hover:text-customCyan">
                Discover My Expertise
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/main
  );
};

export default HeroSection;
