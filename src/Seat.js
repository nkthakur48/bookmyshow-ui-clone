import React from "react";
import "./Seat.css";

const Seat = props => {
  return (
    <span
      className={"seat seat-" + props.status}
      onClick={() =>
        props.click({
          number: props.number,
          status: props.status,
          row: props.row
        })
      }
    >
      {props.number}
    </span>
  );
};

export default Seat;
