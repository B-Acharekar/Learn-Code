document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("result-display");
  let currentInput = "";
  let justEvaluated = false;

  function handleDigit(value) {
    if (justEvaluated) {
      // Start fresh after result
      currentInput = "";
      justEvaluated = false;
    }
    currentInput += value;
    display.value = currentInput;
  }

  function handleOperation(symbol) {
    if (justEvaluated) {
      justEvaluated = false; // allow chaining
    }

    const lastChar = currentInput.slice(-1);
    if ("+-*/".includes(lastChar)) {
      currentInput = currentInput.slice(0, -1);
    }

    currentInput += symbol;
    display.value = currentInput;
  }

  function calculateResult() {
    try {
      const result = eval(currentInput);
      display.value = result;
      currentInput = result.toString();
      justEvaluated = true;
    } catch (err) {
      display.value = "Error";
      currentInput = "";
    }
  }

  function clearDisplay() {
    currentInput = "";
    display.value = "";
    justEvaluated = false;
  }

  // Digits
  for (let i = 0; i <= 9; i++) {
    document
      .getElementById(`btn-${i}`)
      .addEventListener("click", () => handleDigit(i.toString()));
  }

  // Dot button
  document.getElementById("btn-dot").addEventListener("click", () => {
    if (justEvaluated) {
      currentInput = "0";
      justEvaluated = false;
    }
    const lastNumber = currentInput.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
      currentInput += ".";
      display.value = currentInput;
    }
  });

  // Operators
  document
    .getElementById("btn-add")
    .addEventListener("click", () => handleOperation("+"));
  document
    .getElementById("btn-subtract")
    .addEventListener("click", () => handleOperation("-"));
  document
    .getElementById("btn-multiply")
    .addEventListener("click", () => handleOperation("*"));
  document
    .getElementById("btn-divide")
    .addEventListener("click", () => handleOperation("/"));

  // Actions
  document
    .getElementById("submitBtn")
    .addEventListener("click", calculateResult);
  document.getElementById("resetBtn").addEventListener("click", clearDisplay);
});
