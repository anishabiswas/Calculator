let string = "";
let displayValue = "";
let buttons = document.querySelectorAll(".button");
let display = document.querySelector(".user-input");
display.value = "0";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      display.value = string;
      displayValue = string;
      //  string = "";
    } else if (e.target.innerHTML == "C") {
      {
        string = "";
        displayValue = "";
        //display.value = "0";
      }
    } else if (e.target.innerHTML == "^") {
      {
        displayValue += "^";
        string += "**";
      }
    } else if (e.target.innerHTML == "+/-") {
      if (displayValue > 0) {
        displayValue = "-" + displayValue;
        string = string * -1;
      } else if (displayValue < 0) {
        displayValue = displayValue.replace("-", "");
        string = string * -1;
      } else {
        displayValue = "";
        string = "";
      }
    } else {
      displayValue += e.target.innerHTML;
      string += e.target.innerHTML;
    }
    display.value = displayValue == "" ? "0" : displayValue;
  });
});
