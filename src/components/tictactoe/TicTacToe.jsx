import { useState } from "react";

export default function TicTacToe() {
  //   const [playerTurn, setPlayerTurn] = useState("X");

  function Squares({ value }) {
    return (
      <button className="square border border-red-500 text-center text-4xl h-20 w-20 cursor-pointer">
        {value}
      </button>
    );
  }

  return (
    <div className="tic-tac-toe-container flex flex-col items-center mt-20">
      <div className="row grid grid-cols-3 gap-0.5">
        <Squares value={1} />
        <Squares value={2} />
        <Squares value={3} />

        <Squares value={4} />
        <Squares value={5} />
        <Squares value={6} />

        <Squares value={7} />
        <Squares value={8} />
        <Squares value={9} />
      </div>
    </div>
  );
}
