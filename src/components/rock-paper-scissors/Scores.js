import React from "react";

const Scores = ({ score }) => {
  const { userScore, computerScore } = score;
  return (
    <>
      <div className="center-board center-score score-style">
        <div>Score:{userScore}</div>
        <div>Score:{computerScore}</div>
      </div>
    </>
  );
};

export default Scores;
