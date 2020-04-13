import React, { Component } from "react";
import QuestionItem from "./questionItem";
import Loader from "./loader"
import axios from "axios";
import "../App.css"
const api = {
  base: "http://jservice.io/api/clues/",
};

class question extends Component {
  _isNotMounted = true; //to make sure the component is mounted before using setState
  state = {
    questions: [],

  };

  componentDidMount() {
    this._isNotMounted = false;
    console.log(this.props.category);
    //get question from category using id parameter
    axios.get(`${api.base}?category=${this.props.category}`).then((res) => {
      if (!this._isNotMounted) {
        this.setState({ questions: res.data });
        console.log(this.state.questions);
      }
    });

  }
  render() {
    if (this._isNotMounted)
      return <Loader />
    return (
      <QuestionItem question={this.state.questions} />

    )
  }
}

export default question;
