import { ApiProperty } from '@nestjs/swagger';

export class GetOfferstDTO {
    @ApiProperty({ type: Number })
    startLat: number;

    @ApiProperty({ type: Number })
    startLong: number;

    startAddress: string;

    startCountry: string;
    @ApiProperty({ type: Number })
    endLat: number;

    @ApiProperty({ type: Number })
    endLong: number;

    @ApiProperty({ type: String })
    endAddress: string;

    @ApiProperty({ type: String })
    endCountry: string;

    @ApiProperty({ type: String })
    distance: string;

    @ApiProperty({ type: String })
    userId: string;

    @ApiProperty({ type: String })
    providerList: string[];

    @ApiProperty({ type: Number })
    nbrOfPassenger: number;

}

export class OfferEntity {
    @ApiProperty({ type: Number })
    id: number;

    @ApiProperty({ type: String })
    displayPrice: string;

    @ApiProperty({ type: Number })
    displayPriceNumeric: number;

    @ApiProperty({ type: String })
    eta: number;

    @ApiProperty({ type: String })
    startDate: string;
}