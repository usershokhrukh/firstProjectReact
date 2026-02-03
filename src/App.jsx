import React from "react";
import "./App.css"
import react from "react";

const App = () =>{

  return (  
    <div>
      <button onClick={dayNight} className="button">click</button>
    </div>
  );

}


function dayNight() {
  const firstNumber = Number(prompt("enter first number: "));
  const secondNumber = Number(prompt("enter second number: "));
  const status = prompt("choose one of them: + - / % * : ");
  switch(status) {
    case "+":
      alert(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
      break;
    case "-":
      alert(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
      break;
    case "/":
      alert(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
      break;
    case "*":
      alert(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
      break;
  }
}

export default App