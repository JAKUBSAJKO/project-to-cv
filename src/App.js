import "./App.css";
// import components
import Name from "./components/name/Name.js";
import Education from "./components/education/Education";
import Workexp from "./components/workExperience/WorkExp";

function App() {
  return (
    <div className="App">
      <Name />
      <Education />
      <Workexp />
    </div>
  );
}

export default App;
