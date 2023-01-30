import React from "react";
import "../../styles/tic-tac-toe.css";

export const ResetGame = ({ onResetClick }) => {
  return (
    <>
      <button className="scoreboard title reset-button" onClick={onResetClick}>
        RESET GAME
      </button>
    </>
  );
};
