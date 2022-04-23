import React, { Component } from "react";

class Number extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="counter__number">{this.props.digit}</div>;
  }
}

export default Number;
