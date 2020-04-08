import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Question from "./question";
class Quiz extends React.Component {
  state = {
    id: "",
  };
  getCategory = (e) => {
    console.log(e.target.getAttribute("title"));
    this.setState({ id: e.target.getAttribute("title") });
  };
  render() {
    return (
      <Router>
        <div style={{ color: "black", textAlign: "center", marginTop: "30px" }}>
          <Route
            exact
            path="/category"
            render={(props) => (
              <React.Fragment>
                <h1>Categories</h1>

                <div className="card-container">
                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    onClick={this.getCategory}
                  >
                    <div className="card" value={"7580"}>
                      <h2 title="animal words \u0026 phrases">Animal Words</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="world city walk"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2>World city walk</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="tough-pourri"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2>Tough pourri</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="fill in the history _____"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2>Fill in the history____</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="world wide webs"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2>World wide webs</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="to the lighthouse"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2>To the lighthouse</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="storytellers"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2>Story tellers</h2>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/category/question"
            render={(props) => (
              <Question category={this.state.title} {...props} />
            )}
          />
        </div>
      </Router>
    );
  }
}
export default Quiz;
