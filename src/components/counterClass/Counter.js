import React, { Component, useState, useEffect } from "react";
import Button from "./Button";
import Number from "./Number";

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    points: 0,
    goal: 11,
  };
  setPoints = (point) => {
    this.setState({
      ...this.state,
      points: point,
    }, () => {
      if (this.state.points === this.state.goal) {
        this.setGoal(this.state.goal * 2);
      }
    });
  };
  setGoal = (goal) => {
    this.setState({
      ...this.state,
      goal: goal,
    });
  };

  render() {
    return (
      <div className="counter">
       <Number digit={this.state.points} />
       <div className="counter__buttons">
         <Button
          value="minus"
          points={this.state.points}
          setPoints={this.setPoints}
          goal={this.state.goal}
          setGoal={this.setGoal}
        >
          -
        </Button>
        <Button
          value="plus"
          points={this.state.points}
          setPoints={this.setPoints}
          goal={this.state.goal}
          setGoal={this.setGoal}
        >
          +
        </Button>
        Goal {this.state.goal}
      </div>
    </div>
    );
  }
}

// const Counter = (props) => {
//   const [points, setPoints] = useState(0);
//   const [goal, setGoal] = useState(11);

//   useEffect(() => {
//     console.log('Run Every Single time')
//   })
//   useEffect(() => {
//     console.log("Run first render")
//   }, [])

//   useEffect(() => {
//     console.log('Run on goal change')
//   }, [goal])

//   useEffect(() => {
//     if (points == goal) {
//       setGoal(points * 2);
//     }
//   }, [points])

//   return (
//     <div className="counter">
//       <Number digit={points} />
//       <div className="counter__buttons">
//         <Button
//           value="minus"
//           points={points}
//           setPoints={setPoints}
//           goal={goal}
//           setGoal={setGoal}
//         >
//           -
//         </Button>
//         <Button
//           value="plus"
//           points={points}
//           setPoints={setPoints}
//           goal={goal}
//           setGoal={setGoal}
//         >
//           +
//         </Button>
//         Goal {goal}
//       </div>
//     </div>
//   );
// };

export default Counter;
