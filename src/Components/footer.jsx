<<<<<<< HEAD
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => (
  <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
    <div className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
      <div>
        <p className="font-display text-lg text-white">
          Manish Singh<span className="text-cyan-300">.</span>
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Full-Stack Developer · New Delhi, India
        </p>
      </div>

      <p className="text-xs text-slate-500">
        © {new Date().getFullYear()} Manish Singh. All rights reserved.
      </p>

      <nav aria-label="Social links" className="flex items-center gap-5">
        <a
          href="https://www.linkedin.com/in/manish-singh-96a2bb273/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          <FaLinkedinIn aria-hidden="true" /> LinkedIn
        </a>
        <a
          href="https://github.com/Dot-Name"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          <FaGithub aria-hidden="true" /> GitHub
        </a>
        <a
          href="mailto:manishsingh1409@gmail.com"
          className="text-sm text-slate-400 transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          Email
        </a>
      </nav>
    </div>
  </footer>
);
=======
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center text-[#F4A261] py-8">
      <div className="container w-11/12 flex flex-col items-center justify-between gap-6 mx-auto sm:flex-row">
        {/* Left Section: Copyright and small text */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="font-bold text-[#F4A261]">Manish Singh</span>. All Rights Reserved.
          </p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="flex justify-center gap-6">
          <a 
            href="https://www.linkedin.com/in/manish-singh-96a2bb273/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Dot-Name" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.instagram.com/manish_singh9899/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a 
            href="https://x.com/MANISHS103" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#F4A261] hover:text-white transition-colors"
          >
            X (Twitter)
          </a>
        </div>
      </div>
    </footer>
  );
};
>>>>>>> origin/main

export default Footer;
