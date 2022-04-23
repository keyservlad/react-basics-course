import React, { useState, useEffect } from "react";
import Button from "./Button";
import Number from "./Number";

const Counter = (props) => {
  const [points, setPoints] = useState(0);
  const [goal, setGoal] = useState(11);
  return (
    <div className="counter">
      <Number digit={points} />
      <div className="counter__buttons">
        <Button
          value="minus"
          points={points}
          setPoints={setPoints}
          goal={goal}
          setGoal={setGoal}
        >
          -
        </Button>
        <Button
          value="plus"
          points={points}
          setPoints={setPoints}
          goal={goal}
          setGoal={setGoal}
        >
          +
        </Button>
        Goal {goal}
      </div>
    </div>
  );
};

export default Counter;
