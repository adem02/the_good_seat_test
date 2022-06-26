import { IUser } from "../models/user.model";

export class ResponseTransformer {
    static user(user: IUser): any {
        return user;
    }
}