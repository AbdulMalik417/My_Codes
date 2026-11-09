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


// ALVIONET TECH COMPANY INFORMATION

let companyName = "ALVIONET TECH";

let companyEmail = "alvionet12@gmail.com";

let companyPhone = "07062254511";

let companyLocation = "Nigeria";

console.log(companyName);

console.log(companyEmail);

console.log(companyPhone);

console.log(companyLocation);

let projectCost = 800000;

if (projectCost >= 1000000) {

    console.log("Premium customer");

} else if (projectCost >= 500000) {

    console.log("Standard customer");

} else {

    console.log("Basic customer");

}

}
// AMITECH SOLAR QUOTATION CALCULATOR

function calculateSolarQuotation() {

    const panelCost = 350000;

    const inverterCost = 300000;

    const batteryCost = 450000;

    const installationCost = 100000;

    const totalCost =
        panelCost +
        inverterCost +
        batteryCost +
        installationCost;

    console.log("ALVIONET SOLAR QUOTATION");

    console.log("----------------------");

    console.log("Solar Panels: ₦" + panelCost);

    console.log("Inverter: ₦" + inverterCost);

    console.log("Battery: ₦" + batteryCost);

    console.log("Installation: ₦" + installationCost);

    console.log("----------------------");

    console.log("TOTAL: ₦" + totalCost);

}

calculateSolarQuotation();