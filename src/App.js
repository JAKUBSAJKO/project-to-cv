import "./App.css";
// import components
import Name from "./components/name/Name.js";
import Education from "./components/education/Education";
import Workexp from "./components/workExperience/WorkExp";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Name />
      <Education />
      <Workexp />
      <Skills />
    </div>
  );
}

export default App;
