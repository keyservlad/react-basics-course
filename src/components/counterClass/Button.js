import React, { Component, useState } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  
  // Compilateur n'aime pas mais ca marche (deprecated)
  clickedBtn = () => {
    if (this.props.value === "minus") {
      this.props.setPoints(this.props.points - 1);
    } else {
      this.props.setPoints(this.props.points + 1);
    }
  };

  mouseEnters = (e) => {
    console.log("Mouse when on top of button");
    //console.log(e);
  };
  mouseLeaves = (e) => {
    console.log("Mouse when out of button");
    //console.log(e);
  };

  render() {
    return (
      <button
        className="counter__minus"
        onClick={this.clickedBtn}
        onMouseEnter={this.mouseEnters}
        onMouseLeave={this.mouseLeaves}
      >
        {this.props.children}
      </button>
    );
  }
}

// const Button = (props) => {
//   const clickedBtn = () => {
//     if (props.value === "minus") {
//       props.setPoints(props.points - 1);
//     } else {
//       props.setPoints(props.points + 1);
//     }
//   };

//   const mouseEnters = (e) => {
//     console.log("Mouse when on top of button");
//     //console.log(e);
//   };
//   const mouseLeaves = (e) => {
//     console.log("Mouse when out of button");
//     //console.log(e);
//   };

//   return (
//     <button
//       className="counter__minus"
//       onClick={clickedBtn}
//       onMouseEnter={mouseEnters}
//       onMouseLeave={mouseLeaves}
//     >
//       {props.children}
//     </button>
//   );
// };

export default Button;
