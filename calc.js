
let expression = "";
let justEvaluated = false;

function updateDisplay(content) {
  const display = document.querySelector(".display");
  display.textContent = content || "0";
}

function isOperator(char) {
  return ["+", "-", "x", "÷"].includes(char);
}

function safeEval(expr) {
  // Replace symbols to JS-friendly
  expr = expr.replace(/x/g, "*").replace(/÷/g, "/");


  try {
    const result = Function("return " + expr)();
    return result;
  } catch {
    return "Error";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateDisplay("0");

  document.querySelectorAll(".btn, .operator, #decimal").forEach(button => {
    button.addEventListener("click", () => {
      const char = button.textContent;

      if (justEvaluated && !isOperator(char)) {
        // Start new expression after result if input is number/decimal
        expression = "";
        justEvaluated = false;
      }

      if (char === ".") {
        const lastPart = expression.split(/[-+x÷()]/).pop();
        if (lastPart.includes(".")) return; // Prevent multiple decimals
      }

      if (char === "%") {
        // Convert last number to percent
        const match = expression.match(/(\d+(?:\.\d+)?)$/);
        if (match) {
          const percentValue = parseFloat(match[1]) / 100;
          expression = expression.slice(0, -match[1].length) + percentValue;
        }
        updateDisplay(expression);
        return;
      }

      if (char === "()") {
        // Basic bracket toggle
        const openCount = (expression.match(/\(/g) || []).length;
        const closeCount = (expression.match(/\)/g) || []).length;
        expression += openCount > closeCount ? ")" : "(";
      } else {
        expression += char;
      }

      updateDisplay(expression);
    });
  });

  document.querySelector("#equals").addEventListener("click", () => {
    const result = safeEval(expression);
    updateDisplay(result);
    expression = result.toString();
    justEvaluated = true;
  });

  document.querySelector("#clear").addEventListener("click", () => {
    expression = "";
    justEvaluated = false;
    updateDisplay("0");
  });

  document.querySelector("#back").addEventListener("click", () => {
    if (justEvaluated) {
      expression = "";
      justEvaluated = false;
    } else {
      expression = expression.slice(0, -1);
    }
    updateDisplay(expression);
  });
});

   



