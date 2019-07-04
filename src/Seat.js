import React from "react";
import "./Seat.css";

const Seat = props => {
  return <span className={"seat seat-" + props.status}>{props.number}</span>;
};

export default Seat;
