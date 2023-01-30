import React, { useEffect, useState } from "react";
import "../../styles/tic-tac-toe.css";
import "../../styles/index.css";
import { ResetGame } from "./ResetGame";
import { Scoreboard } from "./Scoreboard.js";
import { Square } from "./Square.js";

export const MainGame = () => {
  const MAX_GAME_MOVES = 8;
  const START_VALUE_OF_MOVES = 0;
  const START_VALUE_OF_SCORE = 0;

  const [squares, setNewSquares] = useState(Array(9).fill(null));
  const [xStartGame, setXStartGame] = useState(true);
  const [xIsNext, setXIsNext] = useState(true);
  const [moveCounter, setMoveCounter] = useState(START_VALUE_OF_MOVES);
  const [score, setScore] = useState({
    xScore: START_VALUE_OF_SCORE,
    oScore: START_VALUE_OF_SCORE,
  });

  const onSquareClick = (i) => {
    if (moveCounter === START_VALUE_OF_MOVES && xStartGame) {
      setXStartGame(false);
      setXIsNext(false);
      squares[i] = "X";
    } else if (moveCounter === START_VALUE_OF_MOVES && !xStartGame) {
      setXStartGame(true);
      setXIsNext(true);
      squares[i] = "O";
    } else {
      if (squares[i] || checkWinner(squares)) {
        return;
      }
      const copySquares = squares.slice();
      if (xIsNext) {
        copySquares[i] = "X";
      } else {
        copySquares[i] = "O";
      }
      setXIsNext(!xIsNext);
      setNewSquares(copySquares);
    }
    setMoveCounter(moveCounter + 1);
    if (moveCounter === MAX_GAME_MOVES) {
      resetBoard();
    }
  };

  const onResetClick = () => {
    setNewSquares(Array(9).fill(null));
    setXStartGame(true);
    setScore({ xScore: START_VALUE_OF_SCORE, oScore: START_VALUE_OF_SCORE });
    setMoveCounter(START_VALUE_OF_MOVES);
  };

  const resetBoard = () => {
    setNewSquares(Array(9).fill(null));
    setXIsNext(xStartGame);
    setMoveCounter(START_VALUE_OF_MOVES);
  };

  useEffect(() => {
    const winner = checkWinner(squares);
    if (winner) {
      const GameOver = async () => {
        function sleep(ms) {
          return new Promise((resolve) => setTimeout(resolve, ms));
        }
        await sleep(1000);
        resetBoard();
        if (winner === "X") {
          let { xScore } = score;
          xScore += 1;
          setScore({ ...score, xScore });
          return;
        } else if (winner === "O") {
          let { oScore } = score;
          oScore += 1;
          setScore({ ...score, oScore });
          return;
        } else {
          setScore({ ...score });
          return;
        }
      };
      GameOver();
    }
  });

  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <>
      <Scoreboard score={score} xIsNext={xIsNext} />
      <div className="board">
        <Square squareValue={squares[0]} onSquareClick={() => onSquareClick(0)} />
        <Square squareValue={squares[1]} onSquareClick={() => onSquareClick(1)} />
        <Square squareValue={squares[2]} onSquareClick={() => onSquareClick(2)} />
      </div>
      <div className="board">
        <Square squareValue={squares[3]} onSquareClick={() => onSquareClick(3)} />
        <Square squareValue={squares[4]} onSquareClick={() => onSquareClick(4)} />
        <Square squareValue={squares[5]} onSquareClick={() => onSquareClick(5)} />
      </div>
      <div className="board">
        <Square squareValue={squares[6]} onSquareClick={() => onSquareClick(6)} />
        <Square squareValue={squares[7]} onSquareClick={() => onSquareClick(7)} />
        <Square squareValue={squares[8]} onSquareClick={() => onSquareClick(8)} />
      </div>
      <ResetGame onResetClick={onResetClick} />
    </>
  );
};
