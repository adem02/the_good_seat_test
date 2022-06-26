import { IUser } from './../models/user.model';
import * as sails from 'sails';


export const createUser = async (user: IUser): Promise<IUser | undefined> => {
    const res = await sails.models.user.em.create(user, {
        raw: true,
    });
    return res?.dataValues
}

export const updateUser = async (user: IUser): Promise<IUser> => {
    const res = await sails.models.user.em.update(user, {
        where: {
            _id: user._id,
        },
    });

    return res.dataValues;
}

export const updateUserById = (id: string, user: IUser): Promise<void> => {
    return sails.models.user.em.unifiedUpdate({ _id: id }, user);
}

export const findUserByEmail = (email: string): Promise<IUser | undefined> => {
    return sails.models.user.em.findOne({
        where: {
            email,
        },
    });
}
