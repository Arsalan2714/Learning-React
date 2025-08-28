import { User } from "lucide-react";
import Section from "./Section";

const AboutMe = () => {
  return (
    <div className="mt-6">
      <Section icon={<User />} sectionTitle="About Me">
        <p>
          “I am a passionate and dedicated Full Stack Web Developer with a
          strong foundation in HTML, CSS, JavaScript, React.js, Node.js,
          Express.js, and MongoDB. As a fresher, I focus on writing clean,
          efficient, and maintainable code while continuously improving my
          skills. I enjoy building responsive, user-friendly web applications
          and have hands-on experience working on personal and academic projects
          involving front-end design, back-end development, and database
          integration. I am eager to contribute to a dynamic team where I can
          learn, grow, and build innovative digital solutions.”
        </p>
      </Section>
    </div>
  );
};

export default AboutMe;
