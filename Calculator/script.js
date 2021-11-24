let sum = "";

function addToSum(operator) {
  sum = sum + operator;
  console.log(sum);
  document.getElementById("Output").innerText = sum;
}

function evaluateSum() {
  sum = eval(sum);
  document.getElementById("Output").innerText = sum;
}

function clearSum() {
  sum = "";
  document.getElementById("Output").innerText = sum;
}

function removeChar() {
  sum = sum.slice(0, -1);
  document.getElementById("Output").innerText = sum;
}
