import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignInInput {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

export class SignUpInput {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsBoolean()
    @IsNotEmpty()
    isPhoneNumberVerified: boolean;
}

export interface User {
    id: number;
    email: string;
    phone_number: string;
    firstName: string;
    lastName: string;
    birthday: string;
    nationnality: string;
    aggregator: string;
    isCGUAccepted: boolean;
    active: boolean;
    offers: Offer[];
    paymentMethod: PaymentMethod[];
}

export class SignInPayload {
    token: string;
    accessToken: string;
    refreshToken: string;
    user: User;
}


export class PaymentMethod {
    id: number;
    name: string;
    isFavorite: boolean;
    user: string;
}


export class SignUpPayload {
    id: number;
    email: string;
    phone_number: string;
    firstName: string;
    lastName: string;
    birthday: string;
    nationnality: string;
    aggregator: string;
    isCGUAccepted: boolean;
    active: boolean;
    offers: Offer[];
    paymentMethod: PaymentMethod[];
}

export class Offer {
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
