import { useState } from "react";
import Cart from "./Cart";
import ResetBtn from "./ResetBtn";

function Box() {
  const [xIsNext, setXIsNext] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (board[i] || calculatingWinner(board)) {
    const winner = calculatingWinner(board);
    alert(`The Winner is ${winner}`)
      return;
    }
    const nextCart = board.slice();
    if (xIsNext) {
      nextCart[i] = "X";
      // setXIsNext(false);
    } else {
      nextCart[i] = "O";
      // setXIsNext(true);
    }
    setBoard(nextCart);
    setXIsNext(!xIsNext);
  }

  const winner = calculatingWinner(board);
  if (winner) {
    alert(`The winner is ${winner}`)
  } 

  return (
    <>
      <div className="container md:w-[50%] h-3/4 rounded-xl lg:w-[40%]">
      <h1 className=" absolute top-20 text-4xl text-cyan-500">Tic Tac Toe Game</h1>
        <div className="row1 p-2 flex items-center justify-between gap-3">
          <Cart value={board[0]} onCartClick={() => handleClick(0)} />
          <Cart value={board[1]} onCartClick={() => handleClick(1)} />
          <Cart value={board[2]} onCartClick={() => handleClick(2)} />
        </div>
        <div className="row2 p-2 flex items-center justify-between gap-3">
          <Cart value={board[3]} onCartClick={() => handleClick(3)} />
          <Cart value={board[4]} onCartClick={() => handleClick(4)} />
          <Cart value={board[5]} onCartClick={() => handleClick(5)} />
        </div>
        <div className="row2 p-2 flex items-center justify-between gap-3">
          <Cart value={board[6]} onCartClick={() => handleClick(6)} />
          <Cart value={board[7]} onCartClick={() => handleClick(7)} />
          <Cart value={board[8]} onCartClick={() => handleClick(8)} />
        </div>
        <div className="flex items-center justify-center mt-5">
          <ResetBtn setBoard={setBoard} />
        </div>
      </div>
    </>
  );
}

export default Box;


function calculatingWinner(board){
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for(let i=0; i<lines.length; i++){
    const [a,b,c] = lines[i];
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      return board[a];
    }
  }
  return null;
}