document.addEventListener('DOMContentLoaded', () => {

    particlesJS.load('particles-js', 'particle.json', function() {
        console.log('particles.js config loaded');
    });
});


document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const college = document.getElementById('college').value;
    const year = document.getElementById('year').value;
    const otherDetails = document.getElementById('otherDetails').value;

    // Display a confirmation message
    const message = `Thank you for registering, ${name}!\n
    Email: ${email}\n
    College: ${college}\n
    Year of Study: ${year}\n
    Other Details: ${otherDetails}`;

    document.getElementById('message').textContent = message;

    // Optionally, you can send the data to a server here using fetch or XMLHttpRequest.
});
