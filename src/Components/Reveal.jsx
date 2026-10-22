import { createElement } from "react";
import { useInView } from "react-intersection-observer";

const Reveal = ({
  as: element = "div",
  children,
  className = "",
  delay = 0,
  ...props
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
    rootMargin: "0px 0px -32px 0px",
    fallbackInView: true,
  });

  return createElement(
    element,
    {
      ...props,
      ref,
      className: `scroll-reveal ${inView ? "is-revealed" : ""} ${className}`,
      style: { ...props.style, "--reveal-delay": `${delay}ms` },
    },
    children,
  );
};

export default Reveal;
