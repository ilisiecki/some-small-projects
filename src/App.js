import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import RockPaperScissors from "./pages/RockPaperScissors.js";
import TicTacToe from "./pages/TicTacToe.js";
import Page404 from "./pages/Page404.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/rockpaperscissors" element={<RockPaperScissors />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
