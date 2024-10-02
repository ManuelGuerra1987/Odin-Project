function add(num1,num2){
  return num1 + num2;  
}

function subtract(num1,num2){
  return num1 - num2;  
}

function multiply(num1,num2){
  return num1 * num2;  
}

function divide(num1,num2){
  return (num1 / num2).toFixed(2);
}

let number1;
let number2;
let operator;


function operate(num1,num2,operator){
  if (operator === "+"){
    return add(num1,num2);
  }
  else if (operator === "-"){
    return subtract(num1,num2);
  }
  else if (operator === "*"){
    return multiply(num1,num2);
  }
  else if (operator === "/"){
    return divide(num1,num2);
  }
}

let visorSpan = document.querySelector("#visor");
const numButtons = document.querySelectorAll(".number-buttons");

numButtons.forEach((numButton) => {
       
  numButton.addEventListener("click", () => {

    visorSpan.textContent = numButton.textContent;

  });
});


const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", () => {
  visorSpan.innerHTML = "";
});

