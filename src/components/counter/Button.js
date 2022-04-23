import React from "react";

const Button = (props) => {
  
  const clickedBtn = () => {
    if (props.value === "minus") {
      props.setPoints(props.points - 1);
    } else {
      props.setPoints(props.points + 1);
    }
  };

const mouseEnters = (e) => {
  console.log('Mouse when on top of button');
  //console.log(e);
}
const mouseLeaves = (e) => {
  console.log('Mouse when out of button');
  //console.log(e);
}

  return (
    <button className="counter__minus" onClick={clickedBtn} onMouseEnter={mouseEnters} onMouseLeave={mouseLeaves}>
      {props.children}
    </button>
  );
};

export default Button;
