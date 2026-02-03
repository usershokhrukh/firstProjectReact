import "./App.css"
const App = () =>{

  return (  
    <div>
      <button onClick={analyze} className="button">click</button>
    </div>
  );

}


function analyze() {
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