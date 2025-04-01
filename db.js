 // declaring form variables
 const first_name = document.getElementById("first_name");
 const last_name = document.getElementById("last_name");
 const email = document.getElementById("email");
 const phone_number = document.getElementById("phone_number");
 const message = document.getElementById("message");


// function to check inputs
function checkInputs() {
    // selecting all input elements with class "item"
    const items = document.querySelectorAll(".item");

    // looping through each element 
    for (const item of items) {

        // check if input is empty
        if (item.value.trim() === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        //
        if(item[1].value != ""){
            validateEmail();
        }

        item[1].addEventListener("keyup", () => {
            validateEmail();
        })

        // event listener for input changes
        item.addEventListener("keyup", () => {
            if (item.value.trim() !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            } else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });

    }
}

// function to check email validation
function validateEmail() {
    const items = document.getElementById("error-txttt");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if 
    if(!email.value.match(emailRegex)){
        email.classList.add("error");
        email.parentElement.classList.add("error");
        items.textContent = "yoh"
        
    }else{
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

// form event handling 
document.getElementById("contact-form").addEventListener('submit', (e) => {

    //prevent default load
    e.preventDefault();
    checkInputs();

});