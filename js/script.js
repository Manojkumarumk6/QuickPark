document.getElementById('booking-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const parkingType = document.getElementById('parking-type').value;
    const location = document.getElementById('location').value;
    const availabilityMessage = document.getElementById('availability-message');

    // Simulated AJAX call to check availability
    fetch('check_availability.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parkingType, location }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.available) {
            availabilityMessage.textContent = `Slots are available at ${location} for ${parkingType} parking.`;
        } else {
            availabilityMessage.textContent = `Sorry, no slots available for ${parkingType} parking at ${location}.`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        availabilityMessage.textContent = 'An error occurred while checking availability.';
    });
});
