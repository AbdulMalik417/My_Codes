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

    alert("Thank you for contacting AMITECH. We appreciate your interest in our services.");

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
/// ALVIONET Contact Form Validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();

        const email = document.getElementById("customerEmail").value.trim();

        const phone = document.getElementById("customerPhone").value.trim();

        const service = document.getElementById("customerService").value;

        const message = document.getElementById("customerMessage").value.trim();

        const formMessage = document.getElementById("formMessage");

        // Check empty fields
        if (!name || !email || !phone || !service || !message) {

            formMessage.textContent = "Please complete all fields.";

            formMessage.style.color = "red";

            return;
        }

        // Check email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent = "Please enter a valid email address.";

            formMessage.style.color = "red";

            return;
        }

        // Check phone number length
        if (phone.length < 7) {

            formMessage.textContent = "Please enter a valid phone number.";

            formMessage.style.color = "red";

            return;
        }

        // Display success message
        formMessage.textContent =
            "Thank you, " + name + "! Your enquiry has been validated successfully.";

        formMessage.style.color = "green";

        // Clear form
        contactForm.reset();

    });

}


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

// Select HTML elements
const welcomeTitle = document.getElementById("welcomeTitle");
const welcomeText = document.getElementById("welcomeText");
const changeMessage = document.getElementById("changeMessage");

// Respond when the button is clicked
if (changeMessage && welcomeTitle && welcomeText) {

    changeMessage.addEventListener("click", function() {

        welcomeTitle.textContent = "Welcome to the Future of Technology!";

        welcomeText.textContent =
            "ALVIONEX provides Solar, CCTV, Embedded Systems, Web Development and AI Solutions.";

        changeMessage.textContent = "Thank You for Exploring";

    });

}
function showService(service) {

    const description = document.getElementById("serviceDescription");

    if (!description) return;

    if (service === "solar") {

        description.textContent =
            "AMITECH provides solar installation, inverter setup, battery backup and maintenance services.";

    } else if (service === "cctv") {

        description.textContent =
            "AMITECH provides CCTV installation, security camera setup and surveillance solutions.";

    } else if (service === "web") {

        description.textContent =
            "AMITECH develops professional websites and digital solutions for businesses.";

    } else if (service === "Embedded") {

        description.textContent =
            "AMITECH develops Arduino-based systems, smart automation solutions and IoT applications.";
    }

    else if (service === "AI") {

        description.textContent =
            "AMITECH develops Intelligent automation for businesses.";
    }
}
