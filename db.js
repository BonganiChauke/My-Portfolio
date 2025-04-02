// declaring form variables
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone_number");
const message = document.getElementById("message");

// function to show error message on an input field
function showError(input, message) {
  const errorTxt = input.nextElementSibling.querySelector(".error-msg");
  errorTxt.textContent = message;
  errorTxt.parentElement.style.visibility = message ? "visible" : "hidden";
}

// function to validate user names
function validateNames(name, userName) {
  if (name == "") return "" + userName + " can not be empty";
  if (/[^A-Za-z]/.test(name))
    return "" + userName + " must contain only letters";
  if (name.length < 3)
    return "" + userName + " must be at least 3 characters long.";
  return "";
}

// event on focus listener for user first name
first_name.addEventListener("focusout", function () {
  const errorMessage = validateNames(first_name.value, "First Name");
  showError(first_name, errorMessage);

  // to check the border if inputs are valid
  if (errorMessage == "") {
    first_name.style.border = "0.2px solid black";
  } else {
    first_name.style.border = "1px solid red";
  }
});

// event on focus listener for user first name
last_name.addEventListener("focusout", function () {
  const errorMessage = validateNames(last_name.value, "Last Name");
  showError(last_name, errorMessage);

  // to check the border if inputs are valid
  if (errorMessage == "") {
    last_name.style.border = "0.2px solid black";
  }else{
    last_name.style.border = "1px solid red";
  }
});

// form event handling
document.getElementById("contact-form").addEventListener("submit", (e) => {
  //prevent default load
  e.preventDefault();
});
