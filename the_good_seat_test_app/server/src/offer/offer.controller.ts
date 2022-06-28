import { ApiTags } from '@nestjs/swagger';
import { OffersService } from './offer.service';
import { Body, Controller, Headers, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { GetOfferstDTO } from './offer.dto';

@ApiTags('offer')
@Controller('offer')
export class OffersController {
    constructor(private offersService: OffersService) {

    }

    @Post('getOffersByPartner')
    getOffers(@Body() input: GetOfferstDTO, @Headers() headers) {
        const token = headers['Authorization'].split(' ')[1]

        // Should use middleware to verify user authenticated

        return this.offersService.getOffers(input, '')
            .then(res => res.data)
            .catch(err => err.response.data)
    }
}