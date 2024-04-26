// Function to check reservation availability
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const partySize = document.getElementById('party-size').value;

    // Simple check for availability (randomly simulating a response)
    const isAvailable = Math.random() > 0.5;

    const statusElement = document.getElementById('reservation-status');
    if (isAvailable) {
        statusElement.textContent = `Reservation confirmed for ${date} at ${time} for a party of ${partySize}.`;
        // Store the reservation in local storage or some mock data structure
    } else {
        statusElement.textContent = `Sorry, no availability for the selected date and time.`;
    }
});

// Function to fetch user profile information
function fetchUserProfile() {
    // Simulate fetching user data from Reqres API
    const userId = 1; // Change to the actual user ID after login
    fetch(`https://reqres.in/api/users/${userId}`)
        .then(response => response.json())
        .then(data => {
            const userInfoElement = document.getElementById('user-info');
            userInfoElement.innerHTML = `
                <p>Name: ${data.data.first_name} ${data.data.last_name}</p>
                <p>Email: ${data.data.email}</p>
            `;
        })
        .catch(error => console.error('Error fetching user data:', error));
}

// Call the function if we are on the profile page
if (document.getElementById('user-info')) {
    fetchUserProfile();
}
