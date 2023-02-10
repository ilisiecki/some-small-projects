import React, { useState } from "react";
import Scores from "./Scores.js";
import UserChoice from "./UserChoice.js";
import WinMessage from "./WinMessage.js";

const GameRPS = () => {
  const INIT_ROUND_COUNTER = 1;
  const INIT_WIN_MESSAGE = "Waiting for winner";
  const INIT_SCORE = 0;

  const [roundCounter, setRoundCounter] = useState(INIT_ROUND_COUNTER);
  const [userMadeChoice, setUserMadeChoice] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [winMessage, setWinMessage] = useState(INIT_WIN_MESSAGE);
  const [computerChoice, setComputerChoice] = useState(null);
  const [loadingGame, setLoadingGame] = useState(false);

  const [score, setScore] = useState({
    userScore: INIT_SCORE,
    computerScore: INIT_SCORE,
  });

  const onChoiceClick = (copyUserChoice) => {
    setWinMessage(handleWinner(copyUserChoice, makeComputerChoice()));
    setUserMadeChoice(true);
    nextRound();
  };

  const nextRound = async () => {
    setLoadingGame(true);
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await sleep(1500);
    setRoundCounter(roundCounter + 1);
    setUserMadeChoice(false);
    setLoadingGame(false);
    setWinMessage(INIT_WIN_MESSAGE);
  };

  const makeComputerChoice = () => {
    return Math.floor(Math.random() * 3 + 1);
  };

  const handleWinner = (userChoice, computerChoice) => {
    setComputerChoice(computerChoice);
    if (userChoice === 1 && computerChoice === 3) {
      console.log("You won!");
      let { userScore } = score;
      userScore += 1;
      setScore({ ...score, userScore });
      return "You win!";
    } else if (computerChoice === 1 && userChoice === 3) {
      console.log("comp won!");
      let { computerScore } = score;
      computerScore += 1;
      setScore({ ...score, computerScore });
      return "Computer win!";
    } else if (computerChoice > userChoice) {
      console.log("comp won!");
      let { computerScore } = score;
      computerScore += 1;
      setScore({ ...score, computerScore });
      return "Computer win!";
    } else if (userChoice > computerChoice) {
      console.log("You won!");
      let { userScore } = score;
      userScore += 1;
      setScore({ ...score, userScore });
      return "You win!";
    } else if (userChoice === computerChoice) {
      console.log("draw");
      return "It's a tie!";
    }
  };

  const restartScore = () => {
    setRoundCounter(INIT_ROUND_COUNTER);
    setUserMadeChoice(false);
    setWinMessage(INIT_WIN_MESSAGE);
    setUserChoice(null);
    setComputerChoice(null);
    setScore({ userScore: INIT_SCORE, computerScore: INIT_SCORE });
  };

  return (
    <>
      <div className="center-rps title-rps">Rock, Paper, Scissors Game</div>;
      <div className="center-rps">
        <p className="round-counter">Round: {roundCounter}</p>
      </div>
      <Scores score={score} />
      <div className="center-rps">
        <div className="center-board">
          <div className="board-rps">
            <div>
              <p className="margin-board">Player</p>
              <br />
              {userMadeChoice ? (
                <UserChoice choiceValue={userChoice} />
              ) : (
                <>
                  <UserChoice
                    choiceValue={1}
                    onChoiceClick={() => {
                      setUserChoice(1);
                      onChoiceClick(1);
                    }}
                  />
                  <UserChoice
                    choiceValue={2}
                    onChoiceClick={() => {
                      setUserChoice(2);
                      onChoiceClick(2);
                    }}
                  />
                  <UserChoice
                    choiceValue={3}
                    onChoiceClick={() => {
                      setUserChoice(3);
                      onChoiceClick(3);
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <div className="board-rps">
            <div>
              <p className="margin-board">Computer</p>
              <br />
              {userMadeChoice ? (
                <UserChoice choiceValue={computerChoice} />
              ) : (
                <>
                  <UserChoice choiceValue={1} />
                  <UserChoice choiceValue={2} />
                  <UserChoice choiceValue={3} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <WinMessage winMessage={winMessage} />
      {!loadingGame ? (
        <>
          <div className="center-rps">
            <button className="restart-button-rps" onClick={() => restartScore()}>
              Restart Score
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="center-rps">
            <button
              className="restart-button-rps"
              onClick={() =>
                alert(
                  "Next game is loading. You can't restart game in this case. Click OK to continue"
                )
              }
            >
              Restart Score
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default GameRPS;
