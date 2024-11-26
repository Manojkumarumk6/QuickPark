/**
 * Description: Use this file for form validation of this project
 */

let login_form = document.getElementById('loginform');
let signup_form = document.getElementById('signupForm');
const password_regex = new RegExp("^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\d]).*$");

/**
 * Method for handling input fields
 */
let handleInputField = function() {
    let el_ID = this.getAttribute('id') + '_error';
    if (this.value) {
        document.getElementById(el_ID).innerHTML = "";
    }
}

/**
 * Method for handling checkbox fields
 */
let handleCheckboxField = function() {
    let el_ID = this.getAttribute('id') + '_error';
    if (this.checked) {
        document.getElementById(el_ID).innerHTML = "";
    }
}

/**
 * Validating Signup form
 */
if (signup_form) {
    // Add event listeners for input fields
    document.getElementById('floatingInput').addEventListener('blur', handleInputField);
    document.getElementById('floatingInput2').addEventListener('blur', handleInputField);
    document.getElementById('floatingPassword').addEventListener('blur', handleInputField);
    document.getElementById('exampleCheck1').addEventListener('change', handleCheckboxField);

    signup_form.onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission for validation

        let email = document.getElementById('floatingInput');
        let name = document.getElementById('floatingInput2');
        let password = document.getElementById('floatingPassword');
        let term_status = document.getElementById('exampleCheck1');

        let isValid = true;

        // Validate email
        if (!email.value) {
            document.getElementById("floatingInput_error").innerHTML = "Email is required";
            isValid = false;
        } else {
            document.getElementById("floatingInput_error").innerHTML = "";
        }

        // Validate name
        if (!name.value.trim()) {
            document.getElementById("floatingInput2_error").innerHTML = "Name is required";
            isValid = false;
        } else {
            document.getElementById("floatingInput2_error").innerHTML = "";
        }

        // Validate password
        if (!password.value) {
            document.getElementById("floatingPassword_error").innerHTML = "Password is required";
            isValid = false;
        } else if (!password_regex.test(password.value)) {
            document.getElementById("floatingPassword_error").innerHTML = "Password should be at least 8 characters, having at least one lower case, one upper case, one special characters, one number";
            isValid = false;
        } else {
            document.getElementById("floatingPassword_error").innerHTML = "";
        }

        // Validate terms checkbox
        if (!term_status.checked) {
            document.getElementById("exampleCheck1_error").innerHTML = "Field is required";
            isValid = false;
        } else {
            document.getElementById("exampleCheck1_error").innerHTML = "";
        }

        // If valid, submit the form (or you can use AJAX to submit)
        if (isValid) {
            // You can either submit the form or use AJAX
            // signup_form.submit(); // Uncomment if you want to submit the form normally
            console.log("Form is valid. You can submit it now."); // Replace with actual form submission logic
        }
    };
}

/**
 * Validating login form
 */
if (login_form) {
    // Add event listeners for input fields
    document.getElementById('floatingInput').addEventListener('blur', handleInputField);
    document.getElementById('floatingPassword').addEventListener('blur', handleInputField);
    document.getElementById('exampleCheck1').addEventListener('change', handleCheckboxField);

    login_form.onsubmit = function(event) {
        event.preventDefault(); // Prevent form submission for validation

        let email = document.getElementById('floatingInput');
        let password = document.getElementById('floatingPassword');
        let term_status = document.getElementById('exampleCheck1');

        let isValid = true;

        // Validate email
        if (!email.value) {
            document.getElementById("floatingInput_error").innerHTML = "Email is required";
            isValid = false;
        } else {
            document.getElementById("floatingInput_error").innerHTML = "";
        }

        // Validate password
        if (!password.value) {
            document.getElementById("floatingPassword_error").innerHTML = "Password is required";
            isValid = false;
        } else {
            document.getElementById("floatingPassword_error").innerHTML = "";
        }

        // Validate terms checkbox
        if (!term_status.checked) {
            document.getElementById("exampleCheck1_error").innerHTML = "Field is required";
            isValid = false;
        } else {
            document.getElementById("exampleCheck1_error").innerHTML = "";
        }

        // If valid, submit the form (or you can use AJAX to submit)
        if (isValid) {
            // login_form.submit(); // Uncomment if you want to submit the form normally
            console.log("Login form is valid. You can submit it now."); // Replace with actual form submission logic
        }
    };
}
