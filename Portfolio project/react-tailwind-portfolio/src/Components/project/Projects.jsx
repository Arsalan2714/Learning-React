import Section from "../Section";
import { Briefcase } from "lucide-react";
import Project from "./Project";

const Projects = () => {
  const projectList = [
    {
      title: "Netflix Homepage Clone",
      desc: "Built a responsive clone of the Netflix homepage using HTML and CSS Replicated layout, navigationbar, and visual design to improve frontend skills Focused on practicing clean code and responsive design principles.",
      techUsed: ["HTML", "CSS"],
    },

    {
      title: "Spotify Clone",
      desc: "Builting a responsive spotify clone using HTML, CSS, and Javascript. Replicated layout, navigationbar, and visual design to improve frontend skills Focused on practicing clean code and responsive design principles.",
      techUsed: ["HTML", "CSS", "Java Script"],
    },
  ];

  return (
    <Section icon={<Briefcase />} sectionTitle="Projects">
      {projectList.map(project => <Project title={project.title} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>
  );
};

export default Projects;