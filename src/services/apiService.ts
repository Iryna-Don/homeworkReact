import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

export const axiosInstance = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
        headers: {"Content-Type": "application/json"},
    }
)

const userService = {
    getUsers: async ()=>{
        return await axiosInstance.get<IUserModel[]>('/users')
    }
}
const postService = {
    getPosts:async ()=>{
        return await axiosInstance.get<IPostModel[]>('/posts')
    }
}
const commentService = {
    getComments:async ()=>{
        return await axiosInstance.get<ICommentModel[]>('/comments')
    }
}

export {userService, postService, commentService}