import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OffersModule } from './offer/offer.module';
import { RideModule } from './ride/ride.module';

@Module({
  imports: [
    AuthModule,
    OffersModule,
    RideModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
