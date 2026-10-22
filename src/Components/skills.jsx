import Frontend from "./frontend.jsx";
import Backend from "./backend.jsx";
import Tools from "./tools.jsx";
import Reveal from "./Reveal.jsx";

const Skills = () => (
  <section id="skills" className="scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
    <div className="mx-auto w-full max-w-6xl">
      <Reveal className="mb-12 max-w-3xl sm:mb-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">
          Technical toolkit
        </p>
        <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
          Skills I put to work.
        </h2>
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          A practical set of technologies and engineering practices for building
          and shipping web products.
        </p>
      </Reveal>

      <Reveal className="reveal-stagger">
        <Frontend />
        <Backend />
        <Tools />
      </Reveal>
    </div>
  </section>
);

export default Skills;
