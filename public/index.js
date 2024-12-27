document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation for empty fields
    if (username === '' || password === '') {
        document.getElementById('errorMessage').textContent = 'Both fields are required!';
        return;
    }

    // Simulate successful login
    if (username === 'user' && password === 'password123') {
        document.getElementById('errorMessage').textContent = 'Login successful!';
        document.getElementById('errorMessage').style.color = 'green';
        // Redirect or show success message
        setTimeout(() => {
            window.location.href = 'dashboard.html'; // Assuming you have a dashboard.html
        }, 2000); // Redirect after 2 seconds
    } else {
        document.getElementById('errorMessage').textContent = 'Invalid username or password!';
    }
});
