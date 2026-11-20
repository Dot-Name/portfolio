import { useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const navItems = [
  ["Home", "home"], ["Work", "projects"], ["About", "about"],
  ["Stack", "skills"], ["Journey", "experience"], ["Contact", "contact"],
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);

  useEffect(() => {
    const sections = navItems.map(([, id]) => document.getElementById(id)).filter(Boolean);
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = Math.min(220, window.innerHeight * .36);
      const current = sections.findLast((section) => section.getBoundingClientRect().top <= line);
      setActive(current?.id ?? "home");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const escape = (event) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = (event) => { if (event.matches) setOpen(false); };
    document.addEventListener("keydown", escape);
    desktop.addEventListener("change", closeAtDesktop);
    return () => {
      document.removeEventListener("keydown", escape);
      desktop.removeEventListener("change", closeAtDesktop);
    };
  }, [open]);

  function renderLinks() {
    return navItems.map(([label, id]) => (
      <li key={id}><a href={`#${id}`} aria-current={id === active ? "location" : undefined}
        onClick={(event) => {
          if (open && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey) {
            document.getElementById(id)?.focus({ preventScroll: true });
          }
          setOpen(false);
        }}>{label}</a></li>
    ));
  }

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a href="#home" className="wordmark" onClick={() => setOpen(false)}><span aria-hidden="true">✳</span> Manish Singh</a>
        <nav className="nav-desktop" aria-label="Main navigation"><ul>{renderLinks()}</ul></nav>
        <a href="mailto:manishsingh1409@gmail.com" className="nav-contact eyebrow" data-magnetic>Let’s talk <FaArrowUpRightFromSquare aria-hidden="true" /></a>
        <button type="button" className="nav-toggle eyebrow" ref={toggle} onClick={() => setOpen(!open)}
          aria-expanded={open} aria-controls="mobile-navigation">{open ? "Close ×" : "Menu +"}</button>
      </div>
      <nav className="nav-mobile" id="mobile-navigation" aria-label="Mobile navigation" hidden={!open}><ul>{renderLinks()}</ul></nav>
    </header>
  );
}
