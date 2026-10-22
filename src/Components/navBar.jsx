import { useState } from "react";
import { Link } from "react-scroll";

const navItems = [
  { label: "Home", to: "home" },
  { label: "Work", to: "projects" },
  { label: "About", to: "about" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = (mobile = false) =>
    navItems.map((item) => (
      <li key={item.to}>
        <Link
          to={item.to}
          smooth
          offset={-88}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className={`block cursor-pointer transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 ${
            mobile
              ? "border-b border-white/10 px-1 py-4 text-lg text-slate-200"
              : "rounded-sm px-2 py-2 text-sm text-slate-300"
          }`}
        >
          {item.label}
        </Link>
      </li>
    ));

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080b10]/90 backdrop-blur-xl">
        <div className="mx-auto flex min-h-16 w-full max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link
            to="home"
            smooth
            duration={500}
            aria-label="Manish Singh portfolio, home"
            className="shrink-0 cursor-pointer font-display text-xl text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:text-2xl"
          >
            Manish Singh<span className="text-cyan-300">.</span>
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-2">{renderLinks()}</ul>
          </nav>

          <a
            href="mailto:manishsingh1409@gmail.com"
            className="ml-auto hidden border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-cyan-200/60 hover:text-cyan-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 sm:inline-flex lg:ml-0"
          >
            Get in touch
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center border border-white/20 text-white transition hover:border-cyan-200/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 lg:hidden"
          >
            <span aria-hidden="true" className="text-xl leading-none">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </header>

      <button
        type="button"
        tabIndex={menuOpen ? 0 : -1}
        aria-label="Close navigation menu"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-16 z-40 bg-black/60 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed bottom-0 right-0 top-16 z-40 w-[min(20rem,85vw)] border-l border-white/10 bg-[#0c1118] px-6 py-5 shadow-2xl transition-transform duration-300 ease-out lg:hidden motion-reduce:transition-none ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
          Navigation
        </p>
        <ul>{renderLinks(true)}</ul>
        <a
          href="mailto:manishsingh1409@gmail.com"
          onClick={() => setMenuOpen(false)}
          className="mt-7 inline-flex min-h-11 w-full items-center justify-center bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
        >
          Get in touch
        </a>
      </nav>
    </>
  );
};

export default Navbar;
