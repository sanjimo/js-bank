document.getElementById('submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //matching email & password
    if (userEmail == 'abc@123.com' && userPassword == '123') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Incorrect email or password!');
    }

    //clear email and password
    emailField.value = '';
    passwordField.value = '';
});