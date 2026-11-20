import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./contactForm.jsx";
import Reveal from "./Reveal.jsx";

export default function ContactMe() {
  return (
    <section id="contact" className="contact section-space" tabIndex={-1}>
      <div className="shell">
        <div className="contact-layout">
          <Reveal className="contact-copy">
            <p className="eyebrow section-kicker"><span /> Contact</p>
            <h2>Let’s build<br /><em>something.</em></h2>
            <p>I’m open to full-stack roles, interesting projects, and collaborations.</p>
            <a className="contact-email" data-magnetic href="mailto:manishsingh1409@gmail.com">
              <span>manishsingh1409@gmail.com</span><FaArrowUp aria-hidden="true" />
            </a>
            <div className="contact-socials">
              <a href="https://github.com/Dot-Name" target="_blank" rel="noopener noreferrer"><FaGithub aria-hidden="true" /> GitHub</a>
              <a href="https://www.linkedin.com/in/manish-singh-96a2bb273/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a>
              <a href="tel:+918826297238">+91 88262 97238</a>
            </div>
            <details className="contact-map">
              <summary className="eyebrow">New Delhi, India · View map</summary>
              <iframe title="Map showing Rohini Sector 3, New Delhi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14005.066201390352!2d77.11246962178733!3d28.70405809572901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c01d1ebd7d%3A0x2b660eec3498ecf8!2sRohini%20Sector%203%2C%20Rohini%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1699315944737!5m2!1sen!2sin"
                width="100%" height="280" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </details>
          </Reveal>
          <Reveal delay={90}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
