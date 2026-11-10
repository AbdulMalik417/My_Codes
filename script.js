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
// AMITECH Dynamic Service Catalogue

const amitechServiceList = [

    {
        name: "Solar Installation",
        description: "Solar panels, inverter installation and battery backup.",
        price:"Requests a quotation"

    },
    
    {
        name: "CCTV Installation",
        description: "Professional security camera and surveillance solutions."
    },

    {
        name: "Embedded Systems",
        description: "Arduino projects, microcontrollers and smart automation."
    },

    {
        name: "Web Development",
        description: "Professional websites for businesses and organisations."
    },

    {
        name: "AI Solutions",
        description: "AI-powered applications and business automation."
    }

];


// Find the HTML container
const serviceCatalog = document.getElementById("serviceCatalog");

// Display services
if (serviceCatalog) {

    amitechServiceList.forEach(function(service) {

        const serviceCard = document.createElement("div");

        serviceCard.className = "dynamic-service-card";

        serviceCard.innerHTML = `
            <h3>${service.name}</h3>
            <p>${service.description}</p>
        `;

        serviceCatalog.appendChild(serviceCard);

    });

}

// AMITECH Customer Dashboard

const dashboardCustomers = [

    {
        name: "Malik",
        service: "Solar Installation",
        location: "Ogbomoso"
    },

    {
        name: "John",
        service: "CCTV Installation",
        location: "Ibadan"
    },

    {
        name: "David",
        service: "Web Development",
        location: "Lagos"
    },

    {
        name: "Peter",
        service: "Arduino Projects",
        location: "Ogbomoso"
    },

    {
        name: "James",
        service: "AI Solutions",
        location: "Ibadan"
    }

];

const customerList = document.getElementById("customerList");

const customerSearch = document.getElementById("customerSearch");

// Display customers
function displayCustomers(customerData) {

    if (!customerList) return;

    customerList.innerHTML = "";

    customerData.forEach(customer => {

        const card = document.createElement("div");

        card.className = "customer-card";

        const name = document.createElement("h3");
        name.textContent = customer.name;

        const service = document.createElement("p");
        service.textContent = "Service: " + customer.service;

        const location = document.createElement("p");
        location.textContent = "Location: " + customer.location;

        card.append(name, service, location);

        customerList.appendChild(card);

    });

}

// Search customers
if (customerSearch && customerList) {

    displayCustomers(dashboardCustomers);

    customerSearch.addEventListener("input", () => {

        const searchValue = customerSearch.value.toLowerCase();

        const filteredCustomers = dashboardCustomers.filter(customer => {

            return customer.name.toLowerCase().includes(searchValue);

        });

        displayCustomers(filteredCustomers);

    });

}
const chatForm = document.getElementById("chatForm");

const userInput = document.getElementById("userInput");

const chatBody = document.getElementById("chatBody");

// DISPLAY MESSAGES

function displayMessage(message, sender) {

    const messageElement = document.createElement("div");

    messageElement.classList.add("message");

    messageElement.classList.add(sender + "-message");

    messageElement.textContent = message;

    chatBody.appendChild(messageElement);

    chatBody.scrollTop = chatBody.scrollHeight;

}

// GENERATE RESPONSES

function getBotResponse(message) {

    const text = message.toLowerCase();

    if (text.includes("hello") ||
        text.includes("hi")) {

        return "Hello! Welcome to ALVIONET. How can I assist you?";

    }

    if (text.includes("solar")) {

        return "ALVIONET provides solar and inverter installation, battery backup and maintenance services.";

    }

    if (text.includes("cctv")) {

        return "We provide CCTV installation and security monitoring solutions.";

    }

    if (text.includes("arduino") ||
        text.includes("embedded")) {

        return "We work on Arduino projects, embedded systems, IoT and automation solutions.";

    }

    if (text.includes("contact")) {

        return "You can contact ALVIONET TECH through our official business contact channels.";

    }

    if (text.includes("price") ||
        text.includes("cost")) {

        return "Our prices depend on your requirements. Please tell us more about the service you need.";

    }

    return "Thank you for contacting ALVIONET. Could you explain your request in more detail?";

}

// HANDLE USER MESSAGES

chatForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    displayMessage(message, "user");

    userInput.value = "";

    const response = getBotResponse(message);

    setTimeout(function() {

        displayMessage(response, "bot");

    }, 500);

});