// form event handling 
document.getElementById("contact-form").addEventListener('submit', (e) => {

    //prevent default load
    e.preventDefault();

    // declaring form variables
    const first_name = document.getElementById("first_name");
    const last_name = document.getElementById("last_name");
    const email = document.getElementById("email");
    const phone_number = document.getElementById("phone_number");
    const message = document.getElementById("message");

    // ctrl value
    const valid = false;


    // if statement to handle inputs
    if (first_name.value == "") {
        alert("First name can not be empty")
    } else if (last_name.value == "") {
        alert("Last name can be empty")
    } else if (email.value == "") {
        alert("Email can not be empty")
    } else if (phone_number.value == "") {
        alert("Phone number can not be empty")
    } else if (message.value == "") {
        alert("Message can not be empty")
    } else {
        alert("Successful Submitted")
    }

});