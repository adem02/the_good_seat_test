import * as sails from 'sails';
import { Request, Response } from "express";
import { ErrorResponse } from "../errors/errors";
import { generateToken } from '../utils/token.utils';
import { AuthService } from '../services/auth.service';
import { createUser, findUserByEmail, updateUserById, updateUser } from '../services/user.service';
import { PaymentService } from '../services/payment.service';
import { sendEmailConfirmation, sendEmailForUserCreated } from '../services/mail.service';
import { ResponseTransformer } from './../dto/response.transformer';
import { Tools } from '../utils/tools';
import { IUser } from '../models/user.model';
import { createCagnotte } from '../services/cagnotte.service';

async function create(req: Request, res: Response) {
    const { email, username, password } = req.body;

    if (!email) {
        return res.status(400).json(new ErrorResponse(['error_missing_email'], 'error_missing_email'))
    }

    if (!password) {
        return res.status(400).json(new ErrorResponse(['error_missing_password'], 'error_missing_password'))
    }

    if (!username) {
        if (sails.config.enyo.username) {
            return res.status(400).json(new ErrorResponse(['error_missing_username'], 'error_missing_username'))
        }
        req.body.username = email;
    }

    try {

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            if (req.body.fromBo === true) {
                return res.status(400).json(
                    new ErrorResponse(['user_already_exists'], 'user_already_exists')
                )
            }

            existingUser.roles = JSON.stringify(['USER']);
            existingUser.isActive = true;

            if (!existingUser.country) {
                existingUser.country = 'France'
            }

            try {
                await updateUserById(existingUser._id, existingUser);
            } catch (error) {
                throw new ErrorResponse(['error_updating_user'])
            }

            return res.status(203).json({
                user: ResponseTransformer.user(existingUser),
                token: generateToken(existingUser),
                update: true
            })
        }

        let newUser = {
            ...(req.body as IUser),
            email: email.toLowerCase(),
            username: username.toLowerCase()
        };

        if (newUser.roles.toString() && typeof newUser.roles === 'string') {
            try {
                newUser.roles = JSON.parse(newUser.roles);
            } catch (e) {
                sails.tracer.warn(e);
            }
        } else {
            newUser.roles = JSON.stringify(['USER'])
        }

        !newUser.country && (newUser.country = 'France');

        const userWithEncodedPwd = AuthService.beforeCreate(newUser); //We could also create a fonction or a static method (in a class) named encodeUserpassword

        newUser = await createUser(userWithEncodedPwd)

        if (!newUser) {
            return res.status(400).json(
                new ErrorResponse(['user_not_created'], 'user_not_created')
            )
        }

        const newCagnotte = await createCagnotte(newUser._id)

        if (!newCagnotte) {
            throw new Error('error_cagnotte_creation');
        }

        // Update the newUser with the cagnotteId and a mangoPayUserId
        try {
            newUser = {
                ...newUser,
                cagnotteId: newCagnotte._id,
                mangoPayUserId: sails.config.environment === 'test'
                    ? 111111 :
                    PaymentService.getMangoPayUserId(newUser)
            }

            await updateUserById(newUser._id, newUser);
        } catch (error) {
            throw new ErrorResponse(['error_updating_user'])
        }

        try {
            sendEmailConfirmation(newUser)
            sendEmailForUserCreated(newUser)
        } catch (error) {
            throw new ErrorResponse(['error_sending_email'], 'error_sending_email')
        }


        return res.status(201).json({
            user: ResponseTransformer.user(newUser),
            token: generateToken(newUser)
        })
    } catch (err) {
        sails.tracer.warn(err && err.message ? err.message : err);
        Tools.errorCallback(err, res);
    }
}