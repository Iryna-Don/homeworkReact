import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IUserResponseAuthModel} from "../models/IUserResponseAuthModel";
import {IUserResponseRegistrModel} from "../models/IUserResponseRegistrModel";
import {ICarsPaginated} from "../models/ICarsPaginated";
import {typingHelpEmptyStringLocalStorage} from "../helpers/help.data";
// ===================================================== впровадження "милиці" *інший варіант, ніж у лекції №10 ============================================
// import {emptyTokenPair} from "../helpers/help.data";
// ======================================================================================================================================================

let axiosInstance = axios.create({
        baseURL: 'http://owu.linkpc.net/carsAPI/v2/',
        headers: {'Content-Type': 'application/json'},
    }
)
// ===================================================== впровадження "милиці" *інший варіант, ніж у лекції №10 ============================================
// axiosInstance.interceptors.request.use(requestObject => {
//     if (localStorage.getItem('tokenPair') && requestObject.url !== '/auth' && requestObject.url !== '/auth/refresh') {
//         let jsonTokenPair = localStorage.getItem('tokenPair') || JSON.stringify(emptyTokenPair);
//         let parseJSONTokenPair = JSON.parse(jsonTokenPair);
//         let accessToken = parseJSONTokenPair.access;
//         requestObject.headers.set('Authorization', `Bearer ${accessToken}`)
//     }
//     console.log(requestObject);
//     return requestObject;
// })
// ==========================================================================================================================================================
axiosInstance.interceptors.request.use(requestObject => {
    if (localStorage.getItem('tokenPair') && requestObject.url !== 'auth' && requestObject.url !== 'auth/refresh') {
        // requestObject.headers.set('Authorization', 'Bearer ' + typingHelpEmptyStringLocalStorage<IUserResponseAuthModel>('tokenPair').access)
        requestObject.headers.Authorization = 'Bearer ' + typingHelpEmptyStringLocalStorage<IUserResponseAuthModel>('tokenPair').access;
    }

    // ==== або у AuthorizationFormComponent при формуванні localStorage.setItem('tokenAccess', data.access) ============
    // requestObject.headers.set('Authorization', 'Bearer ' + localStorage.getItem('tokenAccess'))
    // ===================================================================================================================


    console.log(requestObject);
    return requestObject;
})


export const apiService = {
    saveUser: async (firstUserInfo: IUserModel): Promise<string> => {
        let response = await axiosInstance.post<IUserResponseRegistrModel>('users', firstUserInfo);
        console.log(response.statusText);
        return (response.statusText + ' #ID: ' + response.data.id) || "Your registration failed";
    },

    authUser: (authUserInfo: IUserModel): Promise<AxiosResponse<IUserResponseAuthModel>> => {
        return axiosInstance.post('auth', authUserInfo);
    },

    getCars: async (): Promise<ICarsPaginated> => {
        let response = await axiosInstance.get<ICarsPaginated>('cars');
        return response.data;
    },


    refresh: (): Promise<AxiosResponse<IUserResponseAuthModel>> => {
        let refreshToken = typingHelpEmptyStringLocalStorage<IUserResponseAuthModel>('tokenPair').refresh;
        return axiosInstance.post('auth/refresh', {refresh: refreshToken});
    },

}