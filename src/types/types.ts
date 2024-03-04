export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    position_id: number;
    photo: string;
}


export interface FormInputProps {
    name: string;
    control: any;
    label: string;
    setValue?: any;
    helperText?: string
}

export enum Fields {
    NAME = 'name',
    EMAIL = 'email',
    PHONE = 'phone',
    POSITION = 'position',
    PHOTO = 'photo',
    POSITION_ID = 'position_id'
}


export interface ISinglePosition {
    id: number,
    name: string
}

export type FormData = Pick<IUser, 'id' | 'email' | 'name' | 'phone' | 'photo' | 'position_id'>