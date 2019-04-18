import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(
    () => {
      let second = setInterval(() => tick(), 1000);
      return () => clearInterval(second);
    },
    [time]
  );

  const tick = () => {
    setTime(new Date());
  };

  return (
    <div>
      <h1>{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;

// import React, { Component } from "react";

// export default class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       time: new Date().toLocaleTimeString()
//     };
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   tick() {
//     this.setState({
//       time: new Date().toLocaleTimeString()
//     });
//   }

//   render() {
//     return <p>The time is {this.state.time}.</p>;
//   }
// }
