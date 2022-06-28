import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { SignInCredentialsDTO, SignInPayload, SignUpCredentialsDTO, SignUpPayload } from './auth.dto';

@Injectable()
export class AuthService {
    constructor(private readonly http: HttpService) { }

    signIn(input: SignInCredentialsDTO) {
        return this.http.post<SignInPayload>('/loginuser', input)
    }

    signUp(input: SignUpCredentialsDTO) {
        return this.http.post<SignUpPayload>('/registeruser', input)
    }
}
