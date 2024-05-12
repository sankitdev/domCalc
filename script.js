const buttons = document.querySelectorAll(".operator, .number");
const inputField = document.querySelector("#text");

function calcLogic() {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const btnText = event.target.textContent;
      if (btnText === "=") {
        handleCalculation();
      } else if (btnText === "AC") {
        clearInput();
      } else {
        appendToinput(btnText);
      }
    });
  });
}

inputField.addEventListener("keydown", handleKeyDown);

function handleCalculation() {
  try {
    // Replace ÷ with / and × with *
    const expression = inputField.value.replace(/÷/g, "/").replace(/x/g, "*");
    inputField.value = math.evaluate(expression);
  } catch (error) {
    inputField.value = "Error";
  }
}

function clearInput() {
  inputField.value = "";
}

function handleKeyDown(event) {
  const key = event.key;

  if (key === "Enter") {
    handleCalculation();
  } else if (key === "Backspace") {
    inputField.value = inputField.value.slice(0, -1);
  } else if (/[0-9+\-*/.]/.test(key)) {
    appendToinput(key);
  }
}

function appendToinput(value) {
  inputField.value += value;
}

calcLogic();
