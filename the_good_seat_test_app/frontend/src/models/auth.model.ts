import { Offer } from "./offer.model";

export interface SignInCredentials {
    email: string;
    password: string;
}

export interface SignUpCreadentials {
    email: string;
    password: string;
    phone_number: string;
    lastName: string;
    firstName: string;
    isPhoneNumberVerified?: boolean;
}

export interface SignUpPayload {
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

export interface SignInPayload {
    token: string;
    accessToken: string;
    refreshToken: string;
    user: User;
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

export interface PaymentMethod {
    id: number;
    name: string;
    isFavorite: boolean;
    user: string;
}

