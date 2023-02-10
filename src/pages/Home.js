import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="center">
        <div className="title-pages">
          <div>This is the Home page of some small projects project.</div>
          <div>Choose project you want to check:</div>
          <Link to="/tictactoe">
            <button className="buttons">Tic Tac Toe</button>
          </Link>
          <Link to="/rockpaperscissors">
            <button className="buttons">Rock Paper Scissors</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
