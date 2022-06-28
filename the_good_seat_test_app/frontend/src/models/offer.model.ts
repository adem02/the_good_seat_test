export interface Offer {
    id: number;
    displayPrice: string;
    displayPriceNumeric: number;
    eta: number;
    startDate: string;
    provider: string;
    displayProviderName: string;
    logoUrl: string;
    termAndCondition: string;
    vehicleType: string;
    description: string;
    redirectionLink: string;
    co2Emission: number;
}