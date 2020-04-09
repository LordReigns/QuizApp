import React from "react";
import "../App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Question from "./question";
class Quiz extends React.Component {
  state = {
    id: "",
  };
  getCategory = (e) => {
    this.setState({ id: e.target.getAttribute("title") }); //get id value in title attribute from h2 tag and set it to the state
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
                    <div className="card">
                      <h2 title="7580">Animal Words</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="world city walk"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2 title="11498">World city walk</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="tough-pourri"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2 title="11499">Tough pourri</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="fill in the history _____"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2 title="11542">Fill in the history____</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="world wide webs"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2 title="11562">World wide webs</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="to the lighthouse"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2 title="11556">To the lighthouse</h2>
                    </div>
                  </Link>

                  <Link
                    to="/category/question"
                    style={{ textDecoration: "none" }}
                    title="storytellers"
                    onClick={this.getCategory}
                  >
                    <div className="card">
                      <h2 title="618">Story tellers</h2>
                    </div>
                  </Link>
                </div>
              </React.Fragment>
            )}
          />
          <Route
            path="/category/question"
            render={(props) => <Question category={this.state.id} {...props} />}
          />
        </div>
      </Router>
    );
  }
}
export default Quiz;
