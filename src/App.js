import React, { Component } from "react";
import logo from "./assets/icon.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/quiz";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div className="header">
            <div className="header-logo">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <nav className="nav">
              <ul className="links">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          </div>
          <main>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <div className="welcome">
                    <h1>Welcome</h1>
                  </div>
                  <div className="start-btn">
                    <Link to="/category" className="start">
                      Start Now
                    </Link>
                  </div>
                </React.Fragment>
              )}
            />

            <Route exact path="/category" component={About} />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
