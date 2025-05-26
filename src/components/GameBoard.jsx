import { useState } from "react";


export default function GameBoard({ onSelectSquare, gameBoard }) {
  return (
    <div>
      {gameBoard.map((row, rowInd) => (
        <div className="flex" key={rowInd}>
          {row.map((cell, colInd) => (
            <div
              className={`flex items-center justify-center w-20 h-20 select-none text-6xl font-extrabold m-2 px-2 bg-cyan-200 transition-opacity ${
                cell
                  ? "pointer-events-none opacity-100"
                  : "cursor-pointer opacity-50"
              }`}
              key={colInd}
              onClick={() => !cell && onSelectSquare(rowInd, colInd)}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
