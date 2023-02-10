import React from "react";
import { FaRegHandRock, FaRegHandPaper, FaRegHandPeace } from "react-icons/fa";

const UserChoice = ({ choiceValue, onChoiceClick }) => {
  if (choiceValue === 1) {
    choiceValue = <FaRegHandRock />;
  } else if (choiceValue === 2) {
    choiceValue = <FaRegHandPaper />;
  } else {
    choiceValue = <FaRegHandPeace />;
  }

  return (
    <>
      <button className="button-rps" onClick={onChoiceClick}>
        {choiceValue}
      </button>
    </>
  );
};

export default UserChoice;
