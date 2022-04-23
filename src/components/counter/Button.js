import React from "react";

const Button = (props) => {
    if(props.points == props.goal){
        props.setGoal(props.points * 2)
    }
  const clickedBtn = () => {
    if (props.value === "minus") {
      props.setPoints(props.points - 1);
    } else {
      props.setPoints(props.points + 1);
    }
  };

  return (
    <button className="counter__minus" onClick={clickedBtn}>
      {props.children}
    </button>
  );
};

export default Button;
