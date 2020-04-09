import React, { Component } from "react";
import QuestionItem from "./questionItem";
import axios from "axios";
const api = {
  base: "http://jservice.io/api/clues/",
};
class question extends Component {
  _isMounted = false; //to make sure the component is mounted before using setState
  state = {
    questions: [],
  };
  componentDidMount() {
    this._isMounted = true;
    console.log(this.props.category);
    //get question from category using id parameter
    axios.get(`${api.base}?category=${this.props.category}`).then((res) => {
      if (this._isMounted) {
        this.setState({ questions: res.data });
        console.log(this.state.questions);
      }
    });
  }
  render() {
    return <QuestionItem question={this.state.questions} />;
  }
}

export default question;
