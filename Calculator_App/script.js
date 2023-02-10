const buttons = document.querySelectorAll("button");
const display = document.querySelector("#display");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let buttonValue = this.innerHTML;
    if (buttonValue === "C") {
      display.value = "";
    } else if (buttonValue === "=") {
      display.value = eval(display.value);
    } else {
      display.value += buttonValue;
    }
  });
}
