import React from "react";
import "../../styles/tic-tac-toe.css";

export const Scoreboard = ({ score, xIsNext }) => {
  const { xScore, oScore } = score;

  return (
    <>
      <div className="title">SCOREBOARD</div>
      <div className="scoreboard">
        <span className={`score scoreboard-x ${!xIsNext && "inactive"}`}>X: {xScore}</span>
        <span className={`score scoreboard-o ${xIsNext && "inactive"}`}>O: {oScore}</span>
      </div>
    </>
  );
};
