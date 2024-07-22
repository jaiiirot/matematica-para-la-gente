
export enum RolesTypes {
    ADMIN = 'admin',
    USER = 'user',
}

export class User {
    id?: string;
    name?: string;
    email: string;
    password: string;
    role?: RolesTypes;
}
