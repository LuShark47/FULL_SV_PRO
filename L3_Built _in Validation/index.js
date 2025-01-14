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
    document.querySelector("#myForm").submit();
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