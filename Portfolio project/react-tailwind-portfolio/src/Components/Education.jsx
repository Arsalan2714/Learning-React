import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from 'lucide-react';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
    <Graduation title="Bachelor of Science in Information Technology" school="Government College of Engineering And Ceramic Technology" year="2023-2026"/>
    <Graduation title="Diploma in Computer Science & Technology" school="Sir Rajendra Nath Mukherjee govt. Polytechnic" year="2020-2023"/>

    <Graduation title="Full Stack Web Development" school="Free Resources" year="2024"/>
  </Section>
}

export default Education;