export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    registration_timestamp: number;
    photo: string;
}


export interface ISinglePosition {
    id: number,
    name: string
}