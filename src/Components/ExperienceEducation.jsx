import Reveal from "./Reveal.jsx";

const ExperienceEducation = () => (
  <section
    id="experience"
    className="scroll-mt-24 border-y border-white/10 bg-white/[0.02] px-4 py-24 sm:px-6 md:py-32"
  >
    <div className="mx-auto w-full max-w-screen-2xl">
      <Reveal className="mb-12 max-w-3xl sm:mb-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">
          Experience & education
        </p>
        <h2 className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
          The work behind the work.
        </h2>
      </Reveal>

      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal delay={80}>
          <h3 className="mb-6 font-display text-2xl text-white sm:text-3xl">
            Experience
          </h3>
          <article className="border-l border-cyan-300/50 pl-6 transition-colors duration-500 sm:pl-8">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
              Product development
            </p>
            <h4 className="mt-3 font-display text-2xl text-white">
              Analytics Circle
            </h4>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Contributed to AI and applicant-tracking system (ATS) features.
            </p>
          </article>
        </Reveal>

        <Reveal delay={140}>
          <h3 className="mb-6 font-display text-2xl text-white sm:text-3xl">
            Education & credentials
          </h3>
          <Reveal
            as="ol"
            className="reveal-stagger divide-y divide-white/10 border-y border-white/10"
            delay={100}
          >
            <li className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-white">
                  B.Tech, Computer Science and Engineering
                </h4>
                <span className="font-mono text-sm text-slate-500">
                  2022–2026
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                PDM University <span className="px-2 text-slate-600">·</span>
                CGPA 8.63/10
              </p>
            </li>
            <li className="py-5">
              <h4 className="font-semibold text-white">GATE 2026</h4>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                Qualified <span className="px-2 text-slate-600">·</span>
                All India Rank 13,656
              </p>
            </li>
            <li className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-white">Class XII · CBSE</h4>
                <span className="font-mono text-sm text-slate-500">
                  2021–2022
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">
                87.6% <span className="px-2 text-slate-600">·</span> First in
                class
              </p>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">
                Physics 95 <span className="px-2">·</span> Chemistry 94{" "}
                <span className="px-2">·</span> Computer Science 90
              </p>
            </li>
            <li className="py-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="font-semibold text-white">Class X · CBSE</h4>
                <span className="font-mono text-sm text-slate-500">
                  2019–2020
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-400 sm:text-base">74.6%</p>
            </li>
          </Reveal>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ExperienceEducation;
