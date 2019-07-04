import React, { Component } from "react";
import Seat from "./Seat";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    A: [0, 1, 0, 1], // 0 - unfilled; 1 - filled, 2 - selected
    B: [1, 0, 1, 0],
    seatCount: 0
  };
  updateSeatCount = event => {
    this.setState({ seatCount: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <h3>Count of seats</h3>
        <input
          type="text"
          value={this.state.seatCount}
          onChange={this.updateSeatCount}
        />
        <div>
          <h2>Club: Rs. 236</h2>A :{" "}
          {this.state.A.map((status, index) => {
            return <Seat status={status} number={index + 1} />;
          })}
        </div>
        <br />
        <hr />
        <div>
          <h2>Club: Rs. 236</h2>B :{" "}
          {this.state.B.map((status, index) => {
            return <Seat status={status} number={index + 1} />;
          })}
        </div>
      </div>
    );
  }
}

const getSeatsPerRow = (rowChar, seats) => {
  const seatsInRow = [];
  for (let seat in seats) {
    if (seat.charAt(0) === rowChar) {
      seatsInRow.push({ seat: seats[seat] });
    }
  }
  return seatsInRow;
};

export default App;
