import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { RideController } from './ride.controller';
import { RideService } from './ride.service';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://apistaging.thegoodseat.fr',
            headers: {
                'x-api-key': 'wkcrqtCH1L7DHUDTyg35R47PLUnBBx9B4nsgJEgw',
                aggregatorCode: 'poc-tgs',
            },
        })],
    controllers: [RideController],
    providers: [RideService],
})

export class RideModule { }