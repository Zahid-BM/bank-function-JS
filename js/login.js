// main website background color 
document.body.style.backgroundColor = '#FFEEAD';
// login verification and page redirection 
document.getElementById('btn-login-submit').addEventListener('click', function () {
    document.getElementById('input-email').value;  /* capturing input email */
    document.getElementById('input-password').value; /* capturing input password */
    /* login validation */
    if (document.getElementById('input-email').value == 'zahid@bank.com' && document.getElementById('input-password').value == '001177') {
        window.location.href = 'banking.html';
    }
    else {
        alert('Wrong User input');
    }
})