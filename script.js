// AMITECH WEBSITE JAVASCRIPT

// 1. Display a welcome message

console.log("Welcome to AMITECH Technology!");


// 2. Create a welcome function

function welcomeUser() {

    alert("Welcome to AMITECH! We provide smarter technology solutions.");

}


// 3. Create a function for exploring services

function exploreServices() {

    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });

}


// 4. Create a contact message

function contactMessage() {

    alert("Thank you for your interest in AMITECH. Contact us to get started!");

}
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("active");

        const isOpen = mainNav.classList.contains("active");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

}
// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();

        const email = document.getElementById("customerEmail").value.trim();

        const service = document.getElementById("customerService").value;

        const message = document.getElementById("customerMessage").value.trim();

        const formMessage = document.getElementById("formMessage");

        if (!name || !email || !service || !message) {

            formMessage.textContent = "Please complete all fields.";

            return;

        }

        formMessage.textContent =
            "Thank you, " + name + "! Your enquiry has been checked.";

        contactForm.reset();

    });

}