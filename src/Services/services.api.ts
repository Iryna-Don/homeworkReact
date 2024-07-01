import axios, {AxiosResponse} from "axios";
import {IAxiosUsers} from "../Interfaces/IAxiosUsers";
import {IAxiosPosts} from "../Interfaces/IAxiosPosts";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'},
});
export const requests =
    {
        getAllUsers: (limit: number, skip: number): Promise<AxiosResponse<IAxiosUsers>> => {
            return axiosInstance.get('/users?limit=' + limit + '&skip=' + skip)
        },

        getAllPosts: (): Promise<AxiosResponse<IAxiosPosts>> => {
            return axiosInstance.get('/posts')
        },

        getAllPostsByUserId: (id: number): Promise<AxiosResponse<IAxiosPosts>> => {
            return axiosInstance.get('/posts/user/' + id)
        },
    }
