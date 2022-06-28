import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OffersController } from './offer.controller';
import { OffersService } from './offer.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://apistaging.thegoodseat.fr',
            headers: {
                'x-api-key': 'wkcrqtCH1L7DHUDTyg35R47PLUnBBx9B4nsgJEgw',
                aggregatorCode: 'poc-tgs',
            },
        })],
    controllers: [OffersController],
    providers: [OffersService],
})

export class OffersModule { }