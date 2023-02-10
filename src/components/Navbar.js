import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="center-horizontal navbar-style">
        <Link to="/"> Home </Link>
        <Link to="/tictactoe"> Tic Tac Toe </Link>
        <Link to="/rockpaperscissors"> Rock Paper Scissors </Link>
      </div>
    </>
  );
};

export default Navbar;
