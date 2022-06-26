import { IUser } from './../models/user.model';
import { User } from "../models/user.model";

// Simulation of the jwt package
const jwToken = {
    generateFor(user: object) {
        // Generate a token for the user;
        return user.toString()
    }
}

export const generateToken = (user: IUser) => {
    if (user.activationToken) {
        delete user.activationToken;
    }
    return jwToken.generateFor(user);
}