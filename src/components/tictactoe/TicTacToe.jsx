import { useState } from "react";

export default function TicTacToe() {
  const [squares, setSqaures] = useState(Array(9).fill(""));
  const [playerTurn, setPlayerTurn] = useState(false);

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
    if (cpySquares[getIndex]) {
      return;
    }
    cpySquares[getIndex] = playerTurn ? "O" : "X";
    setPlayerTurn(!playerTurn);
    setSqaures(cpySquares);
  }

  return (
    <div className="tic-tac-toe-container flex flex-col items-center mt-20">
      <div className="row grid grid-cols-3 gap-0.5">
        <Squares value={squares[1]} onClick={() => handleClick(1)} />
        <Squares value={squares[2]} onClick={() => handleClick(2)} />
        <Squares value={squares[3]} onClick={() => handleClick(3)} />

        <Squares value={squares[4]} onClick={() => handleClick(4)} />
        <Squares value={squares[5]} onClick={() => handleClick(5)} />
        <Squares value={squares[6]} onClick={() => handleClick(6)} />

        <Squares value={squares[7]} onClick={() => handleClick(7)} />
        <Squares value={squares[8]} onClick={() => handleClick(8)} />
        <Squares value={squares[9]} onClick={() => handleClick(9)} />
      </div>
    </div>
  );
}
