import { IUser } from './../models/user.model';

export class AuthService {
    static beforeCreate(user: IUser): IUser {
        if (user.password) {
            user.password = AuthService.encryptPassword(user.password)
        }

        return user;
    }

    static encryptPassword(password: string): string {
        // Encrypt the password
        return password;
    }


}