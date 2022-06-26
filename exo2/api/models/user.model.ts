export interface IUser {
    _id: string
    username: string
    email: string
    password: string
    cagnotteId: string,
    roles: string,
    isActive?: boolean,
    actionToken?: string,
    country: string,
    mangoPayUserId: number | string,
    activationToken: string
}

export const User = {
    attributes: {
        username: { type: 'string', required: true },
        email: { type: 'string', required: true },
        password: { type: 'string', required: true },
        cagnotteId: { type: 'string' }, //Reference to the cagnotte table Id
        roles: [{ type: 'string' }],
        isActive: { type: 'boolean' },
        actionToken: { type: 'string' },
        country: { type: 'string' },
        mangoPayUserId: { type: 'number' }
    }
}