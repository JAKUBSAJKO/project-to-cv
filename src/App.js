import "./App.css";
// import components
import Name from "./components/name/Name.js";
import Education from "./components/education/Education";
import Workexp from "./components/workExperience/WorkExp";
import Skills from "./components/skills/Skills";
import Interests from "./components/interests/Interests";
import Languages from "./components/languages/Languages";

function App() {
  return (
    <div className="App">
      <Name />
      <Education />
      <Workexp />
      <Skills />
      <Interests />
      <Languages />
    </div>
  );
}

export default App;
