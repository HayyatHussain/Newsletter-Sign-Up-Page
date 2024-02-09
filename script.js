// Get the DOM elements
const form = document.querySelector("form"),
  userInput = document.querySelector("input"),
  inputLabel = document.querySelector("label"),
  errorLabelMessage = document.querySelector(".label-text-2"),
  dismissBtn = document.getElementById("dismiss-btn"),
  mainSection = document.querySelector("main"),
  successMessage = document.querySelector(".success-message");

// Text to use for alternating containers

const hide = "none";
const showBlock = "block";
const showFlex = "flex";

const containerHandler = (container, display, input) => {
  container.style.display = display;
  input.value = "";
};

const inputValidator = (input, errorText) => {
  if (input.value.trim() === "") {
    input.classList.add("invalid-input");
    errorText.innerText = "Valid email required";
    return false; // Indicate validation failure
  } else {
    input.classList.remove("invalid-input");
    errorText.innerText = "";
    return true; // Indicate validation success
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const validateInput = inputValidator(userInput, errorLabelMessage);
  if (!validateInput) {
    return;
  }
  containerHandler(mainSection, hide, userInput);
  containerHandler(successMessage, showBlock, userInput);
});

dismissBtn.addEventListener("click", () => {
  containerHandler(successMessage, hide, userInput);
  containerHandler(mainSection, showFlex, userInput);
});
