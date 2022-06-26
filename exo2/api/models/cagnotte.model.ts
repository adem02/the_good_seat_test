export interface ICagnotte {
    _id: string
    amount: number
    userId: string
}

export const Cagnotte = {
    attributes: {
        amount: { type: 'number' },
        userId: { type: 'string' } //Reference to the User table Id
    }
}