import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RideService {
    constructor(private readonly http: HttpService) { }

    getOffers(input: any, token: string) {
        return firstValueFrom(this.http.post<any>('/getOffersByPartner', input, {
            headers: {
                'Authorizarion': `Bearer ${token}`
            }
        }))
    }
}
