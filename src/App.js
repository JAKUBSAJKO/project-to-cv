import "./App.css";
// import components
import Name from "./components/name/Name.js";
import Education from "./components/education/Education";
import Workexp from "./components/workExperience/WorkExp";
import Skills from "./components/skills/Skills";
import Interests from "./components/interests/Interests";

function App() {
  return (
    <div className="App">
      <Name />
      <Education />
      <Workexp />
      <Skills />
      <Interests />
    </div>
  );
}

export default App;
