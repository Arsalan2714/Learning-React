import List from "./List";
import Section from "./Section";
import { Heart } from "lucide-react";

const Hobbies = () => {
  const hobbies = [
    "Photography",
    "Watching Movies, Series & Animes",
    "Playing Cricket",
    "Reading Manwah & Light Novels",
    "Workout",
  ];
  return (
    <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
      <List items={hobbies} />
    </Section>
  );
};

export default Hobbies;
