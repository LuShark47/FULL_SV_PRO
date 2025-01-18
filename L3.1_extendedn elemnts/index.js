// Function to handle form submission
function theUserSentForm(event) {
    event.preventDefault();
    const nameInput = document.querySelector("#name");
    const passwordInput = document.querySelector("#password");
    const genderInput = document.querySelector("[name=Gender]:checked");
    const msgName = document.querySelector("#msgName");
    const msgPassword = document.querySelector("#msgPassword");
    const msgGender = document.querySelector("#msgGender");

    // Validate name length
    msgName.innerText = nameInput.value.length >= 2 ? "Name is longer than 2 letters" : "";

    // Validate password strength
    
    

    // Check if gender is selected
    msgGender.innerText = genderInput === null ? "You must select gender" : "";
}

// Function to show password strength
function showPasswordStrength() {
    const passwordInput = document.querySelector("#password");
    if (validatePassword(passwordInput.value)) {
        msgPassword.classList.add("strong-password");
        msgPassword.classList.remove("weak-password");
    } else {
        msgPassword.classList.add("weak-password");
        msgPassword.classList.remove("strong-password");
    }
    msgPassword.innerText = validatePassword(passwordInput.value) ? "Password is strong" : "Password is weak";
}

// Function to validate password strength
function validatePassword(password) {
    const patterns = [
        /.{8,}/, // Minimum length of 8 characters
        /.*[A-Z].*[A-Z].*/, // At least 2 uppercase letters
        /.*[!@#$&*].*/, // At least 1 special character
        /.*[0-9].*[0-9].*/, // At least 2 numerals
        /.*[a-z].*[a-z].*[a-z].*/ // At least 3 lowercase letters
    ];
    return patterns.every(pattern => pattern.test(password));
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordInput = document.querySelector("#password");
    const toggleIcon = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

// Function to show password requirements
function showPasswordRequirements() {
    document.querySelector("#passwordRequirements").classList.remove("hidden");
}

// Function to hide password requirements
function hidePasswordRequirements() {
    document.querySelector("#passwordRequirements").classList.add("hidden");
}

// Function to check password requirements in real-time
function checkPasswordRequirements() {
    const password = document.querySelector("#password").value;
    const requirements = {
        minLength: /.{8,}/,
        upperCase: /.*[A-Z].*[A-Z].*/,
        specialChar: /.*[!@#$&*].*/,
        numerals: /.*[0-9].*[0-9].*/,
        lowerCase: /.*[a-z].*[a-z].*[a-z].*/
    };

    // Toggle the validity class based on the password input
    for (const [id, pattern] of Object.entries(requirements)) {
        document.querySelector(`#${id}`).classList.toggle("valid", pattern.test(password));
    }
    showPasswordStrength();
}