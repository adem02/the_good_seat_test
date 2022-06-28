import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RideService } from './ride.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ChangeAddressDTO, RequestRideDTO } from './ride.dto';

@ApiTags('ride')
@Controller('ride')
export class RideController {
    constructor(private offersService: RideService) {

    }

    @Post('requestRide')
    @ApiOperation({ summary: 'Make a request for a ride' })
    requestRide(@Body() input: RequestRideDTO) {

    }

    @Post('changearrivaladdress')
    @ApiOperation({ summary: 'Change departure Adrress' })
    changeDepartureAddress(@Body() input: ChangeAddressDTO) {

    }

    @Post('changearrivaladdress')
    @ApiOperation({ summary: 'Change arrival Adrress' })
    changeArrivalAddress(@Body() input: ChangeAddressDTO) {

    }
}