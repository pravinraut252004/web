// Contact form submission event
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simple form validation (checking if the fields are filled)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
    } else {
        alert('Please fill in all fields.');
    }
});
