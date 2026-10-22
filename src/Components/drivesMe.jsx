<<<<<<< HEAD
import { useInView } from "react-intersection-observer";
import Reveal from "./Reveal.jsx";

const principles = [
  {
    name: "Curiosity over comfort",
    description:
      "I explore unfamiliar technologies, break down complex problems, and learn by building real things.",
  },
  {
    name: "Build to understand",
    description:
      "The strongest learning happens when theory meets implementation and an idea becomes a working product.",
  },
  {
    name: "Ownership over shortcuts",
    description:
      "I value consistency, accountability, and seeing a problem through instead of settling for surface-level fixes.",
  },
  {
    name: "Progress through practice",
    description:
      "Every project is a chance to sharpen my engineering judgment, improve my craft, and raise my standards.",
  },
];

const DrivesMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section
      id="values"
      className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 md:py-32"
    >
      <div
        ref={ref}
        className={`mx-auto grid w-full max-w-screen-2xl items-start gap-12 transition-all duration-700 motion-reduce:transition-none lg:grid-cols-[0.9fr_1.1fr] lg:gap-24 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <Reveal className="text-center lg:sticky lg:top-28 lg:text-left">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">
            What drives me
          </p>
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Driven by curiosity.
            <span className="mt-2 block text-cyan-300">
              Defined by what I build.
            </span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            I'm driven by the challenge of turning what I don't know into
            something I can build. I value practical learning, consistency, and
            taking responsibility for the quality of my work.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base lg:mx-0">
            I don't expect to know everything. I aim to keep learning, ask
            better questions, and take on increasingly complex problems with
            confidence.
          </p>
        </Reveal>

        <Reveal
          as="ol"
          className="reveal-stagger divide-y divide-white/15 border-y border-white/15"
          delay={100}
        >
          {principles.map((principle, index) => (
            <li
              key={principle.name}
              className="group grid gap-3 py-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:py-8"
            >
              <span className="font-mono text-xs tracking-widest text-cyan-300/70 transition group-hover:text-cyan-200 sm:text-sm">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight text-white transition group-hover:text-cyan-200 sm:text-3xl">
                  {principle.name}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                  {principle.description}
                </p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
=======
import React from 'react';
import { useInView } from 'react-intersection-observer';

const DrivesMe = () => {
  // Using Intersection Observer to detect when elements are in view
  const { ref: sectionRef, inView: isInView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.05,   // 5% of the element is in view for better mobile visibility
  });

  return (
    <div className="h-auto mt-10 mb-10 overflow-x-hidden sm:mt-6 sm:mb-6">
      <div
        ref={sectionRef}
        className="flex flex-col flex-wrap items-center justify-center w-11/12 pt-10 overflow-x-hidden sm:pt-6 md:pt-28"
        style={{
          transform: `translateX(${isInView ? 0 : '50vw'})`, // Use percentage for better mobile adaptability
          opacity: isInView ? 1 : 0, // Fade in effect
          transition: 'transform 0.8s ease-out, opacity 0.8s ease-out', // Faster transitions for smaller screens
        }}
      >
        <div className="flex flex-col items-center justify-center w-full px-4 overflow-x-hidden sm:w-full md:flex-row md:w-10/12">
          {/* Image Section */}
          <div className="w-full mt-6 overflow-hidden md:mt-0 md:w-5/12">
            <img
              src={`${process.env.PUBLIC_URL}/Assets/what_drives_me.gif`}
              alt="Drives me"
              className="object-cover w-full mx-auto rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>

          {/* Text Section */}
          <div className="mt-6 text-center sm:text-right md:mt-0 md:w-7/12">
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-6xl font-orbitron">
              What Drives Me?
            </h2>
            <p className="overflow-y-hidden text-base text-white sm:text-lg md:text-xl lg:text-2xl font-saira">
              I believe technology has the power to solve real-world problems and make people's lives easier. I am constantly learning and exploring new technologies to stay on top of trends and improve my skill set. Whether it’s crafting a stunning UI, building a robust backend, or optimizing for performance, I’m always up for a challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/main
  );
};

export default DrivesMe;
