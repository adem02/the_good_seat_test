import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger'
import { OfferEntity } from "src/offer/offer.dto";

export class SignInCredentialsDTO {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ type: String })
    password: string;
}

export class SignUpCredentialsDTO {
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({ type: String })
    password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10)
    @ApiProperty({ type: String })
    phone_number: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    firstName: string;

    @IsBoolean()
    @IsNotEmpty()
    @ApiProperty({ type: Boolean })
    isPhoneNumberVerified: boolean;
}

export class User {
    @ApiProperty({ type: String })
    id: number;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    phone_number: string;

    @ApiProperty({ type: String })
    firstName: string;

    @ApiProperty({ type: String })
    lastName: string;

    @ApiProperty({ type: String })
    birthday: string;

    @ApiProperty({ type: String })
    nationnality: string;

    @ApiProperty({ type: Boolean })
    active: boolean;

    @ApiProperty({ type: [OfferEntity] })
    offers: OfferEntity[];
}

export class SignInPayload {
    @ApiProperty({ type: String })
    token: string;

    @ApiProperty({ type: User })
    user: User;
}


export class SignUpPayload {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    email: string;

    @ApiProperty({ type: String })
    phone_number: string;

    @ApiProperty({ type: String })
    firstName: string;

    @ApiProperty({ type: String })
    lastName: string;

    @ApiProperty({ type: String })
    birthday: string;

    @ApiProperty({ type: String })
    nationnality: string;

    @ApiProperty({ type: String })
    aggregator: string;

    @ApiProperty({ type: String })
    isCGUAccepted: boolean;

    @ApiProperty({ type: String })
    active: boolean;

    @ApiProperty({ type: [OfferEntity] })
    offers: OfferEntity[];
}


