document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");

  document.querySelectorAll("button:not(#clear):not(#back)").forEach(button => {
    button.addEventListener("click", () => {
      const char = button.textContent;
      display.textContent += char;
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
});

