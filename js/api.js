// AMITECH API Practice

const loadCustomerButton =
    document.getElementById("loadCustomer");

const customerResult =
    document.getElementById("customerResult");

// Function to retrieve information from an API
async function getCustomer() {

    customerResult.textContent = "Loading customer information...";

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        if (!response.ok) {
            throw new Error("Unable to retrieve customer information.");
        }

        const customer = await response.json();

        customerResult.innerHTML = "";

        const name = document.createElement("h3");
        name.textContent = customer.name;

        const email = document.createElement("p");
        email.textContent = "Email: " + customer.email;

        const city = document.createElement("p");
        city.textContent = "City: " + customer.address.city;

        customerResult.append(name, email, city);

    } catch (error) {

        customerResult.textContent =
            "Something went wrong: " + error.message;

    }
}

if (loadCustomerButton && customerResult) {

    loadCustomerButton.addEventListener("click", getCustomer);

}