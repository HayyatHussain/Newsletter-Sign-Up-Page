// Get the DOM elements
const form = document.querySelector("form"),
  formBtn = document.querySelector("form button"),
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

const containerHandler = (container, display) => {
  container.style.display = display;
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
  containerHandler(mainSection, hide);
  containerHandler(successMessage, showBlock);
  userInput.value = null;
});

dismissBtn.addEventListener("click", () => {
  containerHandler(successMessage, hide);
  containerHandler(mainSection, showFlex);
});

userInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    formBtn.click();
  }
});
