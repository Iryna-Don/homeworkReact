import {IUser} from "./IUser";

export interface IAxiosUsers {
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}