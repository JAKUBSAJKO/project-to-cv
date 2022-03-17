import "./App.css";
// import components
import Name from "./components/name/Name.js";
import Education from "./components/education/Education";
import Workexp from "./components/workExperience/WorkExp";
import Skills from "./components/skills/Skills";
import Interests from "./components/interests/Interests";
import Languages from "./components/languages/Languages";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Name />
      <Education />
      <Workexp />
      <Skills />
      <Interests />
      <Languages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
