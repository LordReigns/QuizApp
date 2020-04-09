import React, { Component } from "react";

var id = 0;

export class questionItem extends Component {
  state = {
    question: [],
  };
  componentDidMount() {
    if (
      this.props.question &&
      typeof this.props.question[`${id}`] != "undefined"
    ) {
      this.setState({ question: this.props.question[`${id}`] });
    }
  }
  componentWillUnmount() {
    id = 0; // if user goes back to home id resets back to 0
  }
  getNext = () => {
    console.log(id);
    id++;
    if (id < this.props.question.length) {
      if (this.props.question[`${id}`].question !== "") {
        this.setState({ question: this.props.question[`${id}`] });
      } else {
        this.getNext();
      }
    } else {
      alert("All questions Answered");
    }
  };

  render() {
    return (
      <div style={{ width: "25%", margin: "auto" }}>
        {this.props.question &&
        typeof this.props.question[`${id}`] != "undefined" ? (
          <div
            style={{
              height: "500px",
              backgroundColor: "#ff933b",
              margin: "20px 0px",
              paddingTop: "50%",
            }}
          >
            <p>{this.props.question[`${id}`].question}</p>
            <button
              onClick={this.getNext}
              style={{
                display: "flex",
                marginTop: "150px",
                marginLeft: "300px",
                padding: "30px",
              }}
            >
              NEXT
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default questionItem;
