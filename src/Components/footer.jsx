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

export default Footer;
