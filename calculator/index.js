function appendToDisplay(val) {
  document.getElementById("display").value += val;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function changeSign() {
  let display = document.getElementById("display").value;
  let newDisplay = "";
  if (display[0] === "-") {
    for (let i = 1; i < display.length; i++) {
      newDisplay += display[i];
    }
    document.getElementById("display").value = newDisplay;
  } else {
    document.getElementById("display").value = "-" + display;
  }
}

function evaluateExpression() {
  let display = document.getElementById("display").value;
  let newDisplay = eval(display);
  document.getElementById("display").value = newDisplay;
}
