import { IUser } from './../models/user.model';


export class PaymentService {
    static getMangoPayUserId(user: IUser): string {
        // Put logic here 

        const getMangoPayUserId: string | number = 'someId';
        return getMangoPayUserId;
    }
}