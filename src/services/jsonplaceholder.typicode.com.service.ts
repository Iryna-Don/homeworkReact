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

//Створити сторінки та роутери на них users, posts, comments
    {
        getAllUsers: (): Promise<AxiosResponse<IUser[]>> => {
            return axiosInstance.get('users')
        },
        getUserByUserId: (userId: number): Promise<AxiosResponse<IUser>> => {
            return axiosInstance.get('users/' + userId)
        },

        getAllPosts: (skip:number, limit:number): Promise<AxiosResponse<IPost[]>> => {
            return axiosInstance.get('posts?_start='+skip+'&_limit='+limit)
        },
        getPostsByUserId: (userId: number): Promise<AxiosResponse<IPost[]>> => {
            return axiosInstance.get('users/' + userId + '/posts')
        },
        getAllComments: (): Promise<AxiosResponse<IComment[]>> => {
            return axiosInstance.get('comments')
        },
        getCommentsByPostId: (postId:number): Promise<AxiosResponse<IComment[]>> => {
            return axiosInstance.get('posts/'+postId+'/comments')
        },
    }
// =======================================================================================================

// Приклад: https://jsonplaceholder.typicode.com/users?_limit=5&_start=3 - return axiosInstance.get('users?_limit='+limit+'&_start='+skip
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/comments
// https://jsonplaceholder.typicode.com/users