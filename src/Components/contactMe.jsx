import { createElement } from "react";
import { FaEnvelope, FaGithub, FaLinkedinIn, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import ContactForm from "./contactForm.jsx";
import Reveal from "./Reveal.jsx";

const contacts = [
  {
    label: "Email",
    value: "manishsingh1409@gmail.com",
    href: "mailto:manishsingh1409@gmail.com",
    Icon: FaEnvelope,
  },
  {
    label: "Phone",
    value: "+91 88262 97238",
    href: "tel:+918826297238",
    Icon: FaPhone,
  },
  {
    label: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/manish-singh-96a2bb273/",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    label: "GitHub",
    value: "View my work",
    href: "https://github.com/Dot-Name",
    Icon: FaGithub,
    external: true,
  },
];

const ContactMe = () => (
  <section
    id="contact"
    className="scroll-mt-24 px-4 py-24 sm:px-6 md:py-32"
  >
    <div className="mx-auto w-full max-w-screen-2xl">
      <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200 sm:text-sm">
            Contact
          </p>
          <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Have an idea worth building?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            I'm open to discussing full-stack development opportunities,
            interesting projects, and collaborations.
          </p>

          <a
            href="mailto:manishsingh1409@gmail.com"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080b10] sm:text-base"
          >
            <FaEnvelope aria-hidden="true" />
            Email me
          </a>

          <Reveal
            as="ul"
            className="reveal-stagger mt-10 grid gap-3 sm:grid-cols-2"
            delay={100}
          >
            {contacts.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group flex h-full min-h-20 items-center gap-4 border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-200/40 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200"
                >
                  {createElement(Icon, {
                    "aria-hidden": "true",
                    className:
                      "shrink-0 text-cyan-200 transition group-hover:text-white",
                  })}
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.16em] text-slate-500">
                      {label}
                    </span>
                    <span className="mt-1 block break-words text-sm text-slate-200">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </Reveal>

          <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
            <FaMapMarkerAlt aria-hidden="true" className="text-cyan-200" />
            New Delhi, India
          </p>
        </div>

        <div className="grid gap-8">
          <ContactForm />
          <div className="overflow-hidden border border-white/10">
            <iframe
              title="Map showing Rohini Sector 3, New Delhi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.066201390352!2d77.11246962178733!3d28.70405809572901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c01d1ebd7d%3A0x2b660eec3498ecf8!2sRohini%20Sector%203%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1699315944737!5m2!1sen!2sin"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.35]"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ContactMe;
