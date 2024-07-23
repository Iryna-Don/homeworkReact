import axios from "axios";
import {AxiosResponse} from "axios";
import {IUser} from "../interfaces/IUser";
import {IPost} from "../interfaces/IPost";
import {IComment} from "../interfaces/IComment";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-Type': 'application/json'},
});
export const jsonplaceholderService =
    {
        getAllUsers: (): Promise<AxiosResponse<IUser[]>> => {
            return axiosInstance.get('users')
        },

        getAllPosts: (): Promise<AxiosResponse<IPost[]>> => {
            return axiosInstance.get('posts')
        },

        getAllComments: (): Promise<AxiosResponse<IComment[]>> => {
            return axiosInstance.get('comments')
        },
    }


// Приклад: https://jsonplaceholder.typicode.com/users?_limit=5&_start=3 - return axiosInstance.get('users?_limit='+limit+'&_start='+skip
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/users