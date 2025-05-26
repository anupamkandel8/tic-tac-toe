import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/gameOver";

let gameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getCurrentPlayer(gameHistory) {
  if (gameHistory.length % 2 == 0) {
    return "X";
  } else {
    return "O";
  }
}

function App() {
  let winner;
  let draw = false;

  const [gameHistory, setGameHistory] = useState([]);

  gameHistory.forEach((game) => {
    const { square, playerSymbol } = game;
    const { row, col } = square;
    gameBoard[row][col] = playerSymbol;
  });

  if (gameHistory.length >= 5) {
    WINNING_COMBINATIONS.forEach((combination) => {
      const [a, b, c] = combination;
      if (
        gameBoard[a.row][a.column] &&
        gameBoard[a.row][a.column] == gameBoard[b.row][b.column] &&
        gameBoard[a.row][a.column] == gameBoard[c.row][c.column]
      ) {
        winner = gameBoard[a.row][a.column];
      }
    });

    if (gameHistory.length >= 9 && !winner) {
      draw = true;
    }
  }

  let activePlayer = getCurrentPlayer(gameHistory);

  //hamle yo function yeha define garem, aba tyo function chai tata ko GameBoard ma implement hunxa
  function handleSelectSquare(rowInd, colInd) {
    setGameHistory((prevHistory) => {
      let currentPlayer = getCurrentPlayer(prevHistory);

      const updatedHistory = [
        { square: { row: rowInd, col: colInd }, playerSymbol: currentPlayer },
        ...prevHistory,
      ];
      return updatedHistory;
    });
  }

  return (
    <>
      <div className="">
        <div className="flex  m-auto">
          <Player
            key={0}
            initialName="Anupam"
            symbol="X"
            isActive={activePlayer == "X"}
          />
          <Player
            key={1}
            initialName="syhh"
            symbol="0"
            isActive={activePlayer == "O"}
          />
        </div>

        <div className="relative">
          <GameBoard
            onSelectSquare={handleSelectSquare}
            gameBoard={gameBoard}
          />
          {(winner || draw) && (
            <div className="absolute inset-0 bg-blend-darken bg-opacity-50 flex items-center justify-center z-50">
              <GameOver winner={winner} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
