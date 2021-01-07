const defaultResult=0;
let currentResult = defaultResult;

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);



/* functions */

function getUserNumberInput(){
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator,resultBeforecalc,calcNumber){
    const calcDescription=`${currentResult} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}

function add()
{ const enteredNumber =getUserNumberInput();
  const initialResult=currentResult;
  currentResult=currentResult+enteredNumber;
  createAndWriteOutput('+',initialResult,enteredNumber);
}


function subtract(){
    const enteredNumber =getUserNumberInput();
  const initialResult=currentResult;
  currentResult=currentResult - enteredNumber;
  createAndWriteOutput('-',initialResult,enteredNumber);
}


function multiply(){
    const enteredNumber =getUserNumberInput();
    const initialResult=currentResult;
    currentResult=currentResult * enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
}


function divide(){
    const enteredNumber =getUserNumberInput();
    const initialResult=currentResult;
    currentResult=currentResult/enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}