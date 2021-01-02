import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App
