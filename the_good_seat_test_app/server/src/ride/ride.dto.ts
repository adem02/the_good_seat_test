import { ApiProperty } from '@nestjs/swagger';
import { User } from './../auth/auth.dto';
import { OfferEntity } from './../offer/offer.dto';


export class ChangeAddressDTO {
    @ApiProperty({ type: String })
    rideId: string;

    @ApiProperty({ type: Number })
    latitude: number;

    @ApiProperty({ type: Number })
    longitude: number;
}

export class RequestRideDTO {
    @ApiProperty({ type: String })
    userId: string;

    @ApiProperty({ type: String })
    offerId: string;

    @ApiProperty({ type: String })
    aggregatorCode: string;

    @ApiProperty({ type: String, required: false })
    returnUrl: string;

}

export class RideEntity {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    status: string;

    @ApiProperty({ type: String })
    displayPrice: string;

    @ApiProperty({ type: String })
    aggregator: string;

    paymentByTgs: boolean;
    @ApiProperty({ type: String })
    carLicense: string;

    @ApiProperty({ type: String })
    carModel: string;

    @ApiProperty({ type: String })
    carPhoto: string;
    @ApiProperty({ type: Number })
    eta: number;

    @ApiProperty({ type: Boolean })
    isPlanned: boolean;

    @ApiProperty({ type: String })
    startDate: string;

    @ApiProperty({ type: OfferEntity })
    offer: [OfferEntity];

    @ApiProperty({ type: OfferEntity })
    user: [User];
}

export class ReviewEntity {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: Number })
    driverRating: number;

    @ApiProperty({ type: Number })
    carRating: number;

    @ApiProperty({ type: Number })
    ratingAverage: number;

    @ApiProperty({ type: RideEntity })
    ride: RideEntity;
}