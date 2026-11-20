import Reveal from "./Reveal.jsx";

const principles = [
  {
    name: "Curiosity over comfort",
    description:
      "I explore unfamiliar technologies, break down complex problems, and learn by building real things.",
  },
  {
    name: "Build to understand",
    description:
      "The strongest learning happens when theory meets implementation and an idea becomes a working product.",
  },
  {
    name: "Ownership over shortcuts",
    description:
      "I value consistency, accountability, and seeing a problem through instead of settling for surface-level fixes.",
  },
  {
    name: "Progress through practice",
    description:
      "Every project is a chance to sharpen my engineering judgment, improve my craft, and raise my standards.",
  },
];

export default function DrivesMe() {
  return (
    <section id="values" className="values">
      <div className="shell values-layout">
        <Reveal><p className="eyebrow section-kicker"><span /> What drives me</p><h2>Build to<br /><em>understand.</em></h2></Reveal>
        <Reveal as="ul" className="values-list" delay={70}>
          {principles.map(({ name, description }) => (
            <li key={name}><h3>{name}</h3><p>{description}</p></li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
