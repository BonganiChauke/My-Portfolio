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

// function to validate user names field
function validateNames(name, userName) {
    if (name == "") return "" + userName + " can not be empty";
    if (/[^A-Za-z]/.test(name))
        return "" + userName + " must contain only letters";
    if (name.length < 3)
        return "" + userName + " must be at least 3 characters long.";
    if (name.length > 50)
        return "" + userName + " must can not exceed 50 characters long.";
    return "";
}

//function to validate email field
function validateEmail(email) {
    if (email == "") return "Email can not be empty";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) return "Invalid Email Addres"
    return ""
}

// function to validate phone number
function validatePhoneNumber(phone_number) {
    if (phone_number == "") return "Phone number can not be empty";
    if (phone_number.length > 10) return "Phone number must be 10 digits";
    if (!/^[0-9]+$/.test(phone_number)) return "Phone number must have digits only";
    return "";
}

// fuction to validate message field
function validateMessage(message) {
    if (message == "") return "Message can not be empty";
    if (message.length > 250) return "Message can not exceed 250 characters";
    return ""
}

// ***************************************************
// event on focus listener for user first name field
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

// event on focus listener for user first name field
last_name.addEventListener("focusout", function () {
    const errorMessage = validateNames(last_name.value, "Last Name");
    showError(last_name, errorMessage);

    // to check the border if inputs are valid
    if (errorMessage == "") {
        last_name.style.border = "0.2px solid black";
    } else {
        last_name.style.border = "1px solid red";
    }
});

//event focus listener for email field 
email.addEventListener("focusout", function () {
    const errorMessage = validateEmail(email.value);
    showError(email, errorMessage);

    // to check the border if inputs are valid
    if (errorMessage != "") {
        email.style.border = "1px solid red";
    } else {
        email.style.border = "0.2px solid black";
    }
});

// event focus listener for phone number field
phone_number.addEventListener("focusout", function () {
    const errorMessage = validatePhoneNumber(phone_number.value);
    showError(phone_number, errorMessage);

    // to check the border if inputs are valid
    if (errorMessage != "") {
        phone_number.style.border = "1px solid red";
    } else {
        phone_number.style.border = "0.2px solid black";
    }


});

// event focus listener for message field
message.addEventListener("focusout", function () {
    const messageError = validateMessage(message.value);
    showError(message, messageError);

    // if to check the border if inputs are valid
    if (messageError != "") {
        message.style.border = "1px solid red";
    } else {
        message.style.border = "0.2px solid black";
    }
});

// form event handling
document.getElementById("contact-form").addEventListener("submit", (e) => {
    //prevent default load
    e.preventDefault();
});
