<<<<<<< HEAD
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
=======
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-scroll'; // Import the Link component from react-scroll

const AboutMe = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation triggers only once
    threshold: 0.3, // Triggers when 10% of the component is visible
  });

  return (
    <div id="about" className="flex items-center justify-center pb-10 mt-10 mb-10 overflow-x-hidden text-left pt-28 sm:pb-6 sm:mt-6 sm:mb-6">
      <div
        className="flex flex-col items-center justify-center w-11/12 sm:w-full md:w-9/12 sm:flex-col md:flex-row"
        ref={ref} // Attach the ref to the parent container
      >
        {/* Image Section */}
        <div
          className={`mt-6 sm:mt-8 md:mt-0 w-full md:w-[50%] flex justify-center sm:order-1 md:order-2 sm:mb-6`}
          style={{
            transform: `translateX(${inView ? 0 : -500}%)`, // Slide in from the left
            transition: 'transform 0.5s ease-out',
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Assets/About section.png`}
            alt="About"
            className="object-cover w-full max-w-xs rounded-lg sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Text Section */}
        <div
          className="w-full text-center sm:text-left sm:order-2 md:order-1"
          style={{
            transform: `translateX(${inView ? 0 : -500}%)`, // Same effect for text
            transition: 'transform 0.5s ease-out',
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl font-orbitron">
            About Me
          </h2>
          <div className='text-sm text-white font-saira md:text-lg lg:text-2xl'>

            <p>I am Manish Singh, a MERN stack developer from Delhi, India. I specialize in building dynamic web and mobile applications with expertise in React, Node.js, MongoDB, and Express.</p>

            <p>I am also the founder of <strong>Godims</strong>, a platform offering services such as web and Android development, graphic design, and SEO. Alongside my development skills, I am enhancing my problem-solving abilities by learning data structures and algorithms in C++.</p>

            <p>Passionate about continuous learning, I aim to contribute to impactful projects while exploring fields like game and mobile app development.</p>

            <p>Connect with me on <a className='text-blue-300' href="https://www.linkedin.com/in/manish-singh-96a2bb273/">LinkedIn</a> or check out my work on <a className='text-blue-300' href="https://github.com/Dot-Name">GitHub</a>.</p>
          </div>

          <div className="flex justify-center sm:justify-start">
            {/* Using Link from react-scroll to scroll to the contact section */}
            <Link
              to="contact" // The target section's ID
              smooth={true} // Smooth scrolling effect
              duration={500} // Duration of the scroll in milliseconds
              className="relative inline-block px-4 py-2 mt-5 text-sm font-medium text-white transition-all duration-300 border-2 border-transparent rounded-full animate-bounce sm:px-6 sm:py-3 sm:text-lg lg:text-xl font-orbitron bg-customCyan hover:border-customCyan hover:bg-transparent hover:text-customCyan"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/main
  );
};

export default AboutMe;
