import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { SignInCredentialsDTO, SignInPayload, SignUpCredentialsDTO, SignUpPayload } from "./auth.dto";
import { AuthService } from "./auth.service";
import { ApiResponse, ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger'
import { firstValueFrom } from "rxjs";

@ApiBearerAuth()
@ApiTags('authentication')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Sign In User' })
    @ApiResponse({
        status: HttpStatus.OK,
        type: SignInPayload,
        description: "Sign in response"
    })
    signIn(@Body() input: SignInCredentialsDTO) {
        return firstValueFrom(this.authService.signIn(input)).then(res => res.data)
            .catch(err => err.response.data)
    }

    @Post('signup')
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Sign Up User' })
    @ApiResponse({
        status: HttpStatus.CREATED,
        type: SignUpPayload,
        description: "Sign up response"
    })
    signUp(@Body() input: SignUpCredentialsDTO) {
        return firstValueFrom(this.authService.signUp(input)).then(res => res.data)
            .catch(err => err)
    }
}