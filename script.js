
document.getElementById('submitButton').addEventListener('click', function() {
    var password = document.getElementById('passwordInput').value;
    if (password === 'F1N3PINCIL!88912') {
        document.getElementById('message').innerHTML = 'Congratulations! You have saved the world!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').innerHTML = 'Incorrect password. Try again.';
    }
});
