// AMITECH Solar Quotation Module

export function calculateQuotation(
    panelCost,
    inverterCost,
    batteryCost,
    installationCost
) {

    const total =
        panelCost +
        inverterCost +
        batteryCost +
        installationCost;

    return total;
}