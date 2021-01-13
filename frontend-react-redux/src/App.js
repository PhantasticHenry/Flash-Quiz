import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Quiz from "./features/quiz";
import Home from "./features/home";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <Switch> */}
        <Route path="/" exact component={Home} />
        <Route path="/start-quiz" exact component={Quiz} />
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
