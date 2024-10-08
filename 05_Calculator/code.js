let number1;
let number2;
let operator;
let counter = 0;


//Operate function
function operate(num1,num2,operator){

  if (operator === "+"){
    return num1 + num2;
  }
  else if (operator === "-"){
    return num1 - num2;
  }
  else if (operator === "*"){
    return num1 * num2;
  }
  else if (operator === "/" && parseInt(num2) !== 0){
    return (num1 / num2).toFixed(2);
  }
  else if (operator === "/" && parseInt(num2) === 0){
    return "Error: division by zero";
  }
}

//Number buttons
let visorSpan = document.querySelector("#visor");
const numButtons = document.querySelectorAll(".number-buttons");
let numberTemp = "";

numButtons.forEach((numButton) => {
       
  numButton.addEventListener("click", () => {

    numberTemp += numButton.textContent;
    visorSpan.textContent = numberTemp;

  });
});


//Operator buttons
document.querySelectorAll(".number-operators").forEach((OperatorButton) => {
       
  OperatorButton.addEventListener("click", () => {

    if (counter === 0){
      number1 = parseFloat(numberTemp);
      operator = OperatorButton.textContent;
      numberTemp = "";
      counter++;

    }
    else if (counter === 1){
      number2 = parseFloat(numberTemp);
      numberTemp = "";
      visorSpan.textContent = operate(number1,number2,operator);
      number1 = parseFloat(operate(number1,number2,operator));
      operator = OperatorButton.textContent;
      counter = 1;
    }

  });
});

//Equal button
document.querySelector("#equal").addEventListener("click", () => {

  number2 = parseFloat(numberTemp);
  visorSpan.textContent = operate(number1,number2,operator);
});


//Clear button
document.querySelector("#clear").addEventListener("click", () => {

  visorSpan.innerHTML = "";
  numberTemp = "";
  number1 = 0;
  number2 = 0;
  counter = 0;
});

