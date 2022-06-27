import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        HttpModule.register({
            baseURL: 'https://apistaging.thegoodseat.fr',
            headers: {
                'x-api-key': 'wkcrqtCH1L7DHUDTyg35R47PLUnBBx9B4nsgJEgw',
                aggregatorCode: 'poc-tgs',

            },
        })],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule { }