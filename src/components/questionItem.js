import React, { Component } from "react";

export class questionItem extends Component {
  render() {
    return (
      <div style={{ width: "25%", margin: "auto" }}>
        {this.props.question && typeof this.props.question != "undefined" ? (
          <div
            style={{
              height: "500px",
              backgroundColor: "#ff933b",
              margin: "20px 0px",
              paddingTop: "50%",
            }}
          >
            <p>{this.props.question.question}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default questionItem;
