import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Extracurricular from "./Components/Extracurricular";
import Header from "./Components/Header";
import Hobbies from "./Components/Hobbies";
import Projects from "./Components/project/Projects";
import Skills from "./Components/Skills";


function App() {
  return (
    <div id="portfolio-content">
      <div className="bg-slate-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Hobbies />
        <Extracurricular />
        <Contact />
      </div>
    </div>
    </div>
  )
}

export default App
