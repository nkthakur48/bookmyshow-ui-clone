import React, { Component } from "react";
import Seat from "./Seat";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    A: [0, 1, 0, 1, 0, 0, 0, 0], // 0 - unfilled; 1 - filled, 2 - selected
    B: [1, 0, 1, 0],
    seatCount: 1,
    selectedRow: "",
    selectedRowLayout: []
  };
  updateSeatCount = event => {
    this.setState({ seatCount: event.target.value });
  };
  seatClickHandler = ({ row, number, status }) => {
    if (status === 1) {
      return;
    }
    // Clear Selected Seats
    this.setState({ selectedRow: "" });
    this.setState({ selectedRowLayout: [] });

    console.log(row, number, status);
    const rowSeats = [...this.state[row]];
    // Check whether seats could be selected in right
    const expectedSeats = rowSeats.splice(number - 1, this.state.seatCount);
    console.log(expectedSeats);
    if (expectedSeats.length >= this.state.seatCount) {
      // Check whether any seat is occupied
      for (let status of expectedSeats) {
        if (status !== 0) {
          // A seat is occupied somehwhere
          return;
        }
      }
      // Select seats
      this.setState({ selectedRow: row });
      let selectedRowLayout = [];
      // Add previous
      let iArr = this.state[row].slice(0, number - 1);
      selectedRowLayout = selectedRowLayout.concat(iArr);
      // Add selcted
      iArr = new Array(parseInt(this.state.seatCount)).fill(2);
      selectedRowLayout = selectedRowLayout.concat(iArr);
      // Add next
      iArr = this.state[row].slice(number + this.state.seatCount - 1);
      selectedRowLayout = selectedRowLayout.concat(iArr);
      this.setState({ selectedRowLayout: selectedRowLayout });
    }
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
            return (
              <Seat
                row="A"
                status={status}
                number={index + 1}
                click={this.seatClickHandler}
                selectedRow={this.state.selectedRow}
                selectedRowLayout={this.state.selectedRowLayout}
              />
            );
          })}
        </div>
        <br />
        <hr />
        <div>
          <h2>Executive: Rs. 236</h2>B :{" "}
          {this.state.B.map((status, index) => {
            return (
              <Seat
                row="B"
                status={status}
                number={index + 1}
                click={this.seatClickHandler}
                selectedRow={this.state.selectedRow}
                selectedRowLayout={this.state.selectedRowLayout}
              />
            );
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
