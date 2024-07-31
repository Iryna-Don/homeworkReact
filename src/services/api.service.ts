import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../models/IUserModel";
import {IUserResponseRegistrModel} from "../models/IUserResponseRegistrModel";
import {IUserResponseAuthModel} from "../models/IUserResponseAuthModel";


let axiosInstance = axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v2/',
    headers: {'Content-Type': 'application/json'},
    }
)
export const apiService = {
    saveUser: (data:IUserModel): Promise<AxiosResponse<IUserResponseRegistrModel>> =>{
        return axiosInstance.post('users', data)
    },
    authUser: (data:IUserModel): Promise<AxiosResponse<IUserResponseAuthModel>> => {
        return axiosInstance.post('auth', data)
    },
}
