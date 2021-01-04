import React, { Component } from "react";
import { connect } from "react-redux";

class Timer extends Component {
  state = {
    interval: 0,
  };

  start = () => {
    let interval = setInterval(() => {
      console.log("hi");
    }, 1000);
    this.setState({ interval: interval });
  };

  stop = () => {
    this.setState({ interval: clearInterval(this.state.interval) });
  };
  render() {
    let { min, sec } = this.props;
    return (
      <div>
        <h1>
          Timer -- {min} : {sec}
          <button onClick={this.start}>Start</button>
          <button onClick={this.stop}>Stop</button>
        </h1>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  console.log(" Props from mapStatetoProps", state);
  return {
    sec: state.timerReducer.sec,
    min: state.timerReducer.min,
  };
};

export default connect(mapStatetoProps)(Timer);
