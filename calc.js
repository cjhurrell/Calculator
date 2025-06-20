let openEquation = "";
let operator = "";
let closeEquation = "";
let result = "";

document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");

  function calc(a, op, b) {
    const x = parseFloat(a);
    const y = parseFloat(b);

    switch (op) {
      case "+": return x + y;
      case "-": return x - y;
      case "*": return x * y;
      case "/": return y !== 0 ? x / y : "error";
      default: return "error"
        
    }
  }



  document.querySelectorAll("button:not(#clear):not(#back):not(.operator)").forEach(button => {
    button.addEventListener("click", () => {
      const char = button.textContent;
  

      if (!operator) {
        openEquation += char;
        display.textContent = openEquation;} 
        else
        {closeEquation += char;
          display.textContent = closeEquation;
        } 
      });
    });
      
document.querySelectorAll(".operator").forEach(btn => {
  btn.addEventListener("click", (event) => {
    operator = event.target.textContent
  });
});

document.querySelector("#clear").addEventListener("click", () => {
  display.textContent = "0";
  openEquation = "";
  operator = "";
  closeEquation = "";
  result = "";
});

document.querySelector("#back").addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1) || "0";
});
});
   



