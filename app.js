document.getElementById('signupForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        alert('Signup successful! You can now login.');
        window.location.href = 'login.html';
    }
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;

    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials, please try again.');
    }
});
