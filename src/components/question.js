import React, { Component } from "react";
import QuestionItem from "./questionItem";
import axios from "axios";
const api = {
  base: "http://jservice.io/api/clues/",
};
class question extends Component {
  _isMounted = false;
  state = {
    questions: [],
  };
  componentDidMount() {
    this._isMounted = true;
    axios.get(`${api.base}?id=11532`).then((res) => {
      if (this._isMounted) {
        this.setState({ questions: res.data });
        console.log(res.data);
      }
    });
  }
  render() {
    return this.state.questions.map((question) => {
      return question.question !== "" ? (
        <QuestionItem question={question} />
      ) : (
        ""
      );
    });
  }
}

export default question;
