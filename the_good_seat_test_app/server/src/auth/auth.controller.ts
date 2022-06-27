import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { SignInInput, SignUpInput } from "./auth.dto";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {

    }

    @Post('signin')
    @HttpCode(HttpStatus.OK)
    signIn(@Body() input: SignInInput) {
        return this.authService.signIn(input)
    }

    @Post('signup')
    signUp(@Body() input: SignUpInput) {
        return this.authService.signUp(input)
    }
}