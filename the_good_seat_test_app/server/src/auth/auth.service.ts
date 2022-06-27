import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { SignInInput, SignInPayload, SignUpInput, SignUpPayload } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly http: HttpService) { }

    signIn(input: SignInInput) {
        return firstValueFrom(this.http.post<SignInPayload>('/loginuser', input))
    }

    signUp(input: SignUpInput) {
        return firstValueFrom(this.http.post<SignUpPayload>('/registeruser', input))
    }
}
