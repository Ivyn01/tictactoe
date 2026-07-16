import { createRoot } from "react-dom/client";
import { useState } from "react";

function Main() {

  const [toggle, setToggle] = useState(true);
  const [arr1, setArr1] = useState(["-", "-", "-"]);
  const [arr2, setArr2] = useState(["-", "-", "-"]);
  const [arr3, setArr3] = useState(["-", "-", "-"]);
  const mainArr = [arr1, arr2, arr3];
  const [winner, setWinner] = useState('Keep Playing')

  function handle(i,j) {
    if (winner !== 'Keep Playing') {
      return
    }
    let btn = document.getElementById(`${i}-${j}`)
    if (btn.innerHTML === 'X' || btn.innerHTML === 'O') {
      return
    }
    btn.innerHTML = toggle ? 'X' : 'O'
    mainArr[i][j] = toggle ? 'X' : 'O'
    setToggle(!toggle)
    checkWinRow(i, j)
    checkWinColumn(i, j)
    checkWinDiagonal(i, j)
  }

  function checkWinRow (i, j) {
    let b = 0
    if (mainArr[i][b] === mainArr[i][b+1] && mainArr[i][b] === mainArr[i][b+2]) {
      let result = document.getElementById('result')
      // setWinner(toggle ? 'X wins' : 'O wins')
      setWinner(mainArr[i][j] + ' wins')
      // result.innerHTML = toggle ? 'X wins' : 'O wins'
    }
  }

  function checkWinColumn (i, j) {
    let a = 0
    if (mainArr[a][j] === mainArr[a+1][j] && mainArr[a][j] === mainArr[a+2][j]) {
      let result = document.getElementById('result')
      setWinner(mainArr[i][j] + ' wins')
      // setWinner(toggle ? 'X wins' : 'O wins')
      // result.innerHTML = toggle ? 'X wins' : 'O wins'
    }
  }

  function checkWinDiagonal (i,j) {
    if (mainArr[0][0] !== '-' && mainArr[0][0] === mainArr[1][1] && mainArr[1][1] === mainArr[2][2] || mainArr[0][2] !== '-' && mainArr[0][2] === mainArr[1][1] && mainArr[1][1] === mainArr[2][0]) {
      let result = document.getElementById('result')
      setWinner(mainArr[i][j] + ' wins')
      // setWinner(toggle ? 'X wins' : 'O wins')
    }
  }

  return (
    <div className="flex flex-col justify-center items-center my-50">
      {mainArr.map((i, row) => (
        <div id={row} key={row}>
          {i.map((j, column) => (
            <button className="h-25 w-25 border-2 hover:bg-teal-200" key={column} id={`${row}-${column}`} onClick={() => {
              handle(row,column)
              // checkWinRow(row, column)
              // checkWinColumn(row, column)
              // checkWinDiagonal(row, column)
            }}>
              {j}
            </button>
          ))}
        </div>
      ))}
      <p id={'result'} className="m-10">{winner}</p>
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<Main />);
