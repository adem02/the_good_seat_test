import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        HttpModule.register({
            baseURL: process.env.BASE_URL,
            headers: {
                'x-api-key': process.env.API_KEY,
                aggregatorCode: process.env.AGGREGATOR_CODE,

            },
        })],
    controllers: [AuthController],
    providers: [AuthService],
})

export class AuthModule { }