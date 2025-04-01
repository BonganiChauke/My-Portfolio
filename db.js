// form event handling 



    // function to validate user first and last names
    // Names validation function
    function validateNames(name) {
        const hasNumber = /[0-9]/.test(name); // Number
        const hasSpecialChar = /[!@@#\$%\^\&*\)\(+=._-]/.test(name); // Special character

        let errorMessage = "";
        if (name === "") errorMessage += "Name is required.\n";
        if (name.length < 3) errorMessage += "Name cannot be less than 3 letters.\n";
        if (hasNumber) errorMessage += "Name cannot contain numbers.\n";
        if (hasSpecialChar) errorMessage += "Name cannot contain special characters.\n";

        return errorMessage;
    }

    // Function to display error message
    function displayErrorMessage(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

document.getElementById("contact-form").addEventListener('submit', (e) => {

    //prevent default load
    e.preventDefault();

    // declaring form variables
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phone_number = document.getElementById("phone_number");
    const message = document.getElementById("message");

    //
    let nameError = validateNames(first_name)
    
    if(nameError !== "" ){
        displayErrorMessage("error-txtt", nameError)
    }

});