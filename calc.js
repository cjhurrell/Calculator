document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");

  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const char = button.textContent;
      display.textContent = char;
    });
  });
});

