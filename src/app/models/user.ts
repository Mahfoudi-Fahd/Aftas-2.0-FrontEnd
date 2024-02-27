export interface User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    nationality?: string;
    identityNumber?: string;
    identityDocumentTypeEnum?: string;
    password?: string;
}

export class CUser implements User {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
}