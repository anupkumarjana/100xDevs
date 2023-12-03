
function sum(num1, num2, functionToCall) {
  let result = num1 + num2;
  return functionToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

const dataOfSum=sum(3,4, displayResult)

// displayResult(dataOfSum)

// You are only allowed to call one function after this
// How will you displayResult of a sum
