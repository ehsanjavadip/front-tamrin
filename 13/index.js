function Toggelpass() {
    const txtpassword = document.querySelector('#txtpass');
    const showpass = document.querySelector('#showpass');
    if (txtpassword.type === "password") {
        txtpassword.type = "text";
        showpass.classList.remove('bi-eye');
        showpass.classList.add('bi-eye-slash');
    } else {
        txtpassword.type = "password";
        showpass.classList.add('bi-eye');
        showpass.classList.remove('bi-eye-slash');
    }
}