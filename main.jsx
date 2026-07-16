import { createRoot } from "react-dom/client";
import { useState } from "react";

function Main() {
  const [toggle, setToggle] = useState(true);
  const [arr1, setArr1] = useState(["-", "-", "-"]);
  const [arr2, setArr2] = useState(["-", "-", "-"]);
  const [arr3, setArr3] = useState(["-", "-", "-"]);
  const mainArr = [arr1, arr2, arr3];
  function handle(i,j) {
    let btn = document.getElementById(`${i}-${j}`)
    if (btn.innerHTML === 'X' || btn.innerHTML === 'O') {
      return
    }
    btn.innerHTML = toggle ? 'X' : 'O'
    setToggle(!toggle)
  }

  return (
    <div className="flex flex-col justify-center items-center my-50">
      {mainArr.map((i, row) => (
        <div key={row}>
          {i.map((j, column) => (
            <button className="h-25 w-25 border-2 hover:bg-teal-200" key={column} id={`${row}-${column}`} onClick={() => {
              handle(row,column)
            }}>
              {j}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

createRoot(document.querySelector("#root")).render(<Main />);
