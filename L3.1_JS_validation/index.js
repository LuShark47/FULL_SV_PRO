function theUserSentForm(event){
    event.preventDefault();
    if(document.querySelector("#name").value.length >= 2)
    {
        //if you want just to enter text use innerText instead of innerHTML
        document.querySelector("#msgName").innerHTML = "<h4>name is long than 2 letters</h4>";
    }
    // setTimeout(() => {
    //     document.querySelector("#msgName").innerHTML = "";
    // }, 3000);
    // rhis is arrow function () => {}
    if (validatePassword(document.querySelector("#password").value)) {
        document.querySelector("#msgPassword").innerHTML = "<h4>Password is strong</h4>";
    }
    else {
        document.querySelector("#msgPassword").innerHTML = "<h4>Password is weak</h4>";
    }
    if (document.querySelector("[name=Gender]:checked") === null) {
        document.querySelector("#msgGender").innerHTML = "<h4>You must select gender</h4>";
    } else {
        document.querySelector("#msgGender").innerHTML = "";
    }
}
function validatePassword(password) {
    const minLength = /.{8,}/;
    const upperCase = /.*[A-Z].*[A-Z].*/;
    const specialChar = /.*[!@#$&*].*/;
    const numerals = /.*[0-9].*[0-9].*/;
    const lowerCase = /.*[a-z].*[a-z].*[a-z].*/;

    return minLength.test(password) &&
           upperCase.test(password) &&
           specialChar.test(password) &&
           numerals.test(password) &&
           lowerCase.test(password);
}
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".password-toggle");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show password
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash"); // Change icon
    } else {
        passwordInput.type = "password"; // Hide password
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye"); // Revert icon
    }
}
function showPasswordRequirements() {
    document.getElementById("passwordRequirements").classList.remove("hidden");
}

function hidePasswordRequirements() {
    document.getElementById("passwordRequirements").classList.add("hidden");
}


/****check password */
function checkPasswordRequirements() {
    const password = document.getElementById("password").value;

    const minLength = /.{8,}/;
    const upperCase = /.*[A-Z].*[A-Z].*/;
    const specialChar = /.*[!@#$&*].*/;
    const numerals = /.*[0-9].*[0-9].*/;
    const lowerCase = /.*[a-z].*[a-z].*[a-z].*/;

    document.getElementById("minLength").classList.toggle("valid", minLength.test(password));
    document.getElementById("upperCase").classList.toggle("valid", upperCase.test(password));
    document.getElementById("specialChar").classList.toggle("valid", specialChar.test(password));
    document.getElementById("numerals").classList.toggle("valid", numerals.test(password));
    document.getElementById("lowerCase").classList.toggle("valid", lowerCase.test(password));
}