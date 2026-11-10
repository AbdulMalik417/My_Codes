// Import information from services.js
import { calculateQuotation } from "./quotation.js";

import {
    services,
    displayCompanyName
} from "./services.js";

// Display company name

console.log(displayCompanyName());

// Display all services

services.forEach(function(service) {

    console.log(service);

});

const quotation = calculateQuotation(
    350000,
    300000,
    450000,
    100000
);

console.log("Solar Quotation: ₦" + quotation.toLocaleString());