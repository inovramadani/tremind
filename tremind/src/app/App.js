import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { updateTime, updateColor } from "../actions/timeActions";
import {
  updateDuration,
  updateRemainingDuration,
  setDuration
} from "../actions/durationActions";

import Menu from "./Menu";
import TodayTask from "./TodayTask";
import ClockAndNextDayTask from "./ClockAndNextDayTask";
import NoteAndDone from "./NoteAndDone";

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.handleClickStart = this.handleClickStart.bind(this);
//     this.handleChangeTime = this.handleChangeTime.bind(this);
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalID);
//   }

//   tick() {
//     if (this.props.remainingDurationRedux > 0 ) this.calculateUrgencyColor();
//     let date = new Date();
//     this.props.updateNewTime(date);
//     this.props.updateNewRemainingDuration(this.props.remainingDurationRedux > 0 ? this.props.remainingDurationRedux - 1 : 0);
//   }

//   handleChangeTime(e) {
//     let currentinput = e.target.value;
//     let id = e.target.id;

//     let timeHour = this.state.timeHour;
//     let timeMinute = this.state.timeMinute;
//     let timeSecond = this.state.timeSecond;

//     switch (id) {
//     case "input-time-hour":
//       timeHour = Number(currentinput);
//       break;
//     case "input-time-minute":
//       timeMinute = Number(currentinput);
//       break;
//     case "input-time-second":
//       timeSecond = Number(currentinput);
//       break;

//     }
//     this.props.setNewDuration(timeHour, timeMinute, timeSecond);
//   }

//   handleClickStart(e) {
//     let timeInSecond = this.props.timeHourRedux * 3600 + this.props.timeMinuteRedux * 60 + this.props.timeSecondRedux;
//     this.props.updateNewDuration(timeInSecond);
//   }

//   calculateUrgencyColor() {
//     let urgencyColor = this.props.urgencyColorRedux;
//     let remainingDuration = this.props.remainingDurationRedux;
//     let duration = this.props.durationRedux;

//     if (remainingDuration > 3 * duration / 4 ) urgencyColor = 'green';
//     else if (remainingDuration <= 3 * duration / 4 && remainingDuration > duration / 2) urgencyColor = 'brown';
//     else if (remainingDuration <= duration / 2 && remainingDuration > duration / 4) urgencyColor = 'orange';
//     else if (remainingDuration <= duration / 4 && remainingDuration > 1) urgencyColor = 'red';
//     else urgencyColor = 'black';

//     this.props.updateNewColor(urgencyColor);
//   }

//   render() {
//     return (
//       <div className="body">
//         <Menu />
//         <div className="flex-container">
//           <TodayTask time={this.props.timeRedux}
//                      remainingDuration={this.props.remainingDurationRedux}
//                      onChangeTime={this.handleChangeTime}
//                      onClickStart={this.handleClickStart}
//                      timeHour={this.props.timeHourRedux}
//                      timeMinute={this.props.timeMinuteRedux}
//                      timeSecond={this.props.timeSecondRedux}
//                      urgencyColor={this.props.urgencyColorRedux}
//           />
//           <ClockAndNextDayTask time={this.props.timeRedux} urgencyColor={this.props.urgencyColorRedux}/>
//           <NoteAndDone />
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     timeRedux: state.time,
//     urgencyColorRedux: state.urgencyColor,
//     durationRedux: state.duration,
//     remainingDurationRedux: state.remainingDuration,
//     timeHourRedux: state.timeHour,
//     timeMinuteRedux: state.timeMinute,
//     timeSecondRedux: state.timeSecond,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {

//     updateNewTime: (time) => {
//       dispatch(updateTime(time))
//     },

//     updateNewColor: (color) => {
//       dispatch(updateColor(color))
//     },

//     setNewDuration: (hour, minute, second) => {
//       dispatch(setDuration(hour, minute, second))
//     },

//     updateNewDuration: (duration) => {
//       dispatch(updateDuration(duration))
//     },

//     updateNewRemainingDuration: (duration) => {
//       dispatch(updateRemainingDuration(duration))
//     }
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
      duration: 0,
      remainingDuration: 0,
      timeHour: 0,
      timeMinute: 0,
      timeSecond: 20,
      urgencyColor: "black"
    };

    this.handleClickStart = this.handleClickStart.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    if (this.state.remainingDuration > 0) this.calculateUrgencyColor();

    this.setState({
      time: new Date(),
      remainingDuration:
        this.state.remainingDuration > 0 ? this.state.remainingDuration - 1 : 0
    });
  }

  handleChangeTime(e) {
    let currentinput = e.target.value;
    let id = e.target.id;

    let timeHour = this.state.timeHour;
    let timeMinute = this.state.timeMinute;
    let timeSecond = this.state.timeSecond;

    console.log(e.target.id);
    console.log(timeHour, " : ", timeMinute, " : ", timeSecond);

    switch (id) {
      case "input-time-hour":
        timeHour = Number(currentinput);
        break;
      case "input-time-minute":
        timeMinute = Number(currentinput);
        break;
      case "input-time-second":
        timeSecond = Number(currentinput);
        break;
    }

    this.setState({
      timeHour: timeHour,
      timeMinute: timeMinute,
      timeSecond: timeSecond
    });
  }

  handleClickStart(e) {
    let timeInSecond =
      this.state.timeHour * 3600 +
      this.state.timeMinute * 60 +
      this.state.timeSecond;

    this.setState({
      duration: timeInSecond,
      remainingDuration: timeInSecond
    });

    console.log("timeInSecond : ", timeInSecond);
    console.log("state duration : ", this.state.duration);
    console.log("state remaining duration : ", this.state.remainingDuration);
  }

  calculateUrgencyColor() {
    let urgencyColor = this.state.urgencyColor;
    let remainingDuration = this.state.remainingDuration;
    let duration = this.state.duration;

    if (remainingDuration > (3 * duration) / 4) urgencyColor = "green";
    else if (
      remainingDuration <= (3 * duration) / 4 &&
      remainingDuration > duration / 2
    )
      urgencyColor = "brown";
    else if (
      remainingDuration <= duration / 2 &&
      remainingDuration > duration / 4
    )
      urgencyColor = "orange";
    else if (remainingDuration <= duration / 4 && remainingDuration > 1)
      urgencyColor = "red";
    else urgencyColor = "black";

    this.setState({
      urgencyColor: urgencyColor
    });
  }

  render() {
    return (
      <div className="body">
        <Menu />
        <div className="flex-container">
          <TodayTask
            time={this.state.time}
            remainingDuration={this.state.remainingDuration}
            onChangeTime={this.handleChangeTime}
            onClickStart={this.handleClickStart}
            timeHour={this.state.timeHour}
            timeMinute={this.state.timeMinute}
            timeSecond={this.state.timeSecond}
            urgencyColor={this.state.urgencyColor}
          />
          <ClockAndNextDayTask
            time={this.state.time}
            urgencyColor={this.state.urgencyColor}
          />
          <NoteAndDone />
        </div>
      </div>
    );
  }
}

export default App;
