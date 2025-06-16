document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");

  document.querySelectorAll("button:not(#clear):not(#back)").forEach(button => {
    button.addEventListener("click", () => {
      const char = button.textContent;
      const current = display.textContent;

    if (current === "0" && char === "0") {return;}

    if (current === "0") {
      display.textContent = char;} else{ display.textContent += char; }
    });
    
    });
  });


document.querySelector("#clear").addEventListener("click", () => {
  const display = document.querySelector(".display");
  display.textContent = "0";
});

document.querySelector("#back").addEventListener("click", () => {
  const display = document.querySelector(".display");
  display.textContent = display.textContent.slice(0, -1) || "0";
});


