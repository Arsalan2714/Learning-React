import Pill from "./Pill";
import Section from "./Section";
import { Code } from "lucide-react";

const Skills = () => {
  const skillTitles = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "C",
    "C++",
    "Basics DSA Concepts ",
    "Core Java ",
    "OOPs Concept",
    "Git",
    "web Development",
    "Frame Works: Tailwind CSS, Bootstrap",
  
  ];
  return (
    <Section icon={<Code />} sectionTitle="Skills">
      <div className="flex flex-wrap gap-2">
        {skillTitles.map((title) => (
          <Pill key={title} title={title} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
