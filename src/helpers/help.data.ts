import {IUserResponseAuthModel} from "../models/IUserResponseAuthModel";

export const emptyTokenPair: IUserResponseAuthModel = {
    refresh: '',
    access: '',
}

export const typingHelpEmptyStringLocalStorage = <T, >(key: string) => {
    let jsonLocalStorageData = localStorage.getItem(key) || '';
    if (!jsonLocalStorageData) {
        return {} as T;
    }
    return JSON.parse(jsonLocalStorageData) as T;

}
