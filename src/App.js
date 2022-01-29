import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Homepage from "./Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Homepage} exact/>
          <Route path='/about' component={About} exact/>
          <Route path='/contact' component={Contact} exact/>
        </Switch>
      </Router>
    </div>      
  );
}

export default App;
