// Function to handle signup
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const signupData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password
    };

    // Simulate signup with Reqres API
    fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Signup successful!'); // You can redirect to the login page or profile
        } else {
            alert('Signup failed.');
        }
    })
    .catch(error => console.error('Error during signup:', error));
});

// Function to handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const loginData = {
        email: email,
        password: password
    };

    // Simulate login with Reqres API
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Login successful!');
            // Store the token and user info, then redirect to profile or home
        } else {
            alert('Login failed.');
        }
    })
    .catch(error => console.error('Error during login:', error));
});
