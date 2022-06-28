import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { GetOfferstDTO, OfferEntity } from './offer.dto';

@Injectable()
export class OffersService {
    constructor(private readonly http: HttpService) { }

    getOffers(input: GetOfferstDTO, token: string) {
        return firstValueFrom(this.http.post<OfferEntity>('/getOffersByPartner', input, {
            headers: {
                'Authorizarion': `Bearer ${token}`
            }
        }))
    }
}
