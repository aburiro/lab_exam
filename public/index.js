// Assuming you have a script.js file linked in your HTML
// This script listens for the form submission and logs the user input

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Get the form inputs
        const nameInput = contactForm.querySelector("input[name='name']").value;
        const emailInput = contactForm.querySelector("input[name='email']").value;
        const descriptionInput = contactForm.querySelector("textarea[name='description']").value;

        // Log the user input (you can send it to your server or perform any other action here)
        console.log("Name: " + nameInput);
        console.log("Email: " + emailInput);
        console.log("Description: " + descriptionInput);
    });
});
