import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a href="#home" className="wordmark"><span aria-hidden="true">✳</span> Manish Singh</a>
        <small>© {new Date().getFullYear()} Manish Singh. All rights reserved.</small>
        <a href="#home" className="eyebrow">Back to top <FaArrowUp aria-hidden="true" /></a>
      </div>
    </footer>
  );
}
