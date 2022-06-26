import * as sails from 'sails';
import { ICagnotte } from '../models/cagnotte.model';


export const createCagnotte = async (userId: string): Promise<ICagnotte | undefined> => {
    const res = await sails.models.cagnotte.em.create({
        amount: 0,
        userId
    }, {
        raw: true
    })

    return res.dataValues;
}