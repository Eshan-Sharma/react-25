import { useEffect, useState } from "react";

export default function TicTacToe() {
  const [squares, setSqaures] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState(false);
  const [status, setStatus] = useState("");

  function Squares({ value, onClick }) {
    return (
      <button
        onClick={onClick}
        className="square border border-red-500 text-center text-4xl h-20 w-20 cursor-pointer"
      >
        {value}
      </button>
    );
  }
  function handleClick(getIndex) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getIndex]) {
      return;
    }
    cpySquares[getIndex] = playerTurn ? "O" : "X";
    setPlayerTurn(!playerTurn);
    setSqaures(cpySquares);
  }
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
      return null;
    }
  }
  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item != "")) {
      setStatus("Game over, Draw!");
    } else if (getWinner(squares)) {
      setStatus(`"Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Just keep playing`);
    }
  }, [squares, playerTurn]);
  console.log(squares);

  function restart() {
    setSqaures(Array(9).fill(""));
    setStatus("");
    setPlayerTurn(false);
  }
  return (
    <div className="tic-tac-toe-container flex flex-col items-center mt-20">
      <div className="row grid grid-cols-3 gap-0.5">
        <Squares value={squares[0]} onClick={() => handleClick(0)} />
        <Squares value={squares[1]} onClick={() => handleClick(1)} />
        <Squares value={squares[2]} onClick={() => handleClick(2)} />

        <Squares value={squares[3]} onClick={() => handleClick(3)} />
        <Squares value={squares[4]} onClick={() => handleClick(4)} />
        <Squares value={squares[5]} onClick={() => handleClick(5)} />

        <Squares value={squares[6]} onClick={() => handleClick(6)} />
        <Squares value={squares[7]} onClick={() => handleClick(7)} />
        <Squares value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={restart}>Restart</button>
    </div>
  );
}
