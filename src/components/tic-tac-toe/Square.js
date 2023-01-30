import React from "react";
import "../../styles/tic-tac-toe.css";

export const Square = ({ squareValue, onSquareClick }) => {
  const style = squareValue === "X" ? "square-x" : "square-o";

  return (
    <>
      <button className={`square-button ${style}`} onClick={onSquareClick}>
        {squareValue}
      </button>
    </>
  );
};
