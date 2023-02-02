import React, { useState } from "react";
import ReactDOM from "react-dom";
const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleEqual = () => {
    setInput(eval(input).toString());
  };

  const handleClear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <input type="text" value={input} />
      <br />
      <br />
      <button onClick={() => handleClick("1")}>1</button>
      <button onClick={() => handleClick("2")}>2</button>
      <button onClick={() => handleClick("3")}>3</button>
      <button onClick={() => handleClick("+")}>+</button>
      <br />
      <button onClick={() => handleClick("4")}>4</button>
      <button onClick={() => handleClick("5")}>5</button>
      <button onClick={() => handleClick("6")}>6</button>
      <button onClick={() => handleClick("-")}>-</button>
      <br />
      <button onClick={() => handleClick("7")}>7</button>
      <button onClick={() => handleClick("8")}>8</button>
      <button onClick={() => handleClick("9")}>9</button>
      <button onClick={() => handleClick("*")}>*</button>
      <br />
      <button onClick={() => handleClick(".")}>.</button>
      <button onClick={() => handleClick("0")}>0</button>
      <button onClick={handleEqual}>=</button>
      <button onClick={() => handleClick("/")}>/</button>
      <br />
      <button onClick={handleClear}>clear</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Calculator />);
export default Calculator;
