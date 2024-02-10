// Get the DOM elements
const form = document.querySelector("form"),
  formBtn = document.querySelector("form button"),
  userInput = document.querySelector("input"),
  inputLabel = document.querySelector("label"),
  errorLabelMessage = document.querySelector(".label-text-2"),
  dismissBtn = document.getElementById("dismiss-btn"),
  mainSection = document.querySelector("main"),
  leftSection = document.querySelector(".left"),
  rightSection = document.querySelector(".right"),
  successMessage = document.querySelector(".success-message"),
  outputTxt = document.getElementById("email-output");

// For Transitioning all the elements of the left section
const staggerAnimation = (container) => {
  const children = container.children;
  const length = children.length;
  for (let i = 0; i < length; i++) {
    children[i].style.transition = "all 0.5s ease " + i * 0.3 + "s";
    children[i].style.transform = "translate(0, 0)";
  }
};

// Text to use for alternating containers

const hide = "0";
const show = "1";

const containerHandler = (container, scale, opacity) => {
  container.style.scale = scale;
  container.style.opacity = opacity;
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

window.addEventListener("DOMContentLoaded", () => {
  leftSection.style.transform = "translate(0, 0)";
  containerHandler(leftSection, show, show);
  rightSection.style.transform = "translate(0, 0)";
  containerHandler(rightSection, show, show);
  staggerAnimation(leftSection);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // User Email
  const email = userInput.value;
  const validateInput = inputValidator(userInput, errorLabelMessage);
  if (!validateInput) {
    return;
  } else {
    containerHandler(mainSection, hide, hide);
    containerHandler(successMessage, show, show);
    outputTxt.innerText = email;
    userInput.value = "";
  }
});

dismissBtn.addEventListener("click", () => {
  containerHandler(successMessage, hide, hide);
  containerHandler(mainSection, show, show);
});

userInput.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key === "Enter") {
    formBtn.click();
  }
});
