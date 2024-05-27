import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-type': 'application/json', 'charset': 'UTF-8'}

});
export const requests = {

    posts: {
        getAllPosts: (limitPosts: number, skipPosts: number) => {
            return axiosInstance.get('/posts?limit=' + limitPosts + '&skip=' + skipPosts)
        }
    },
    users: {
        getAllUsers: (limitUsers: number, skipUsers: number) => {
            return axiosInstance.get('/users?limit=' + limitUsers + '&skip=' + skipUsers)
        }
    },

    usersById: {
        getAllPostsById: (userId: number) => {
            return axiosInstance.get('/posts/user/' + userId)
        }
    }

}

//==================================================
// export const getAllPosts = ():Promise<AxiosResponse<IPostModel[]>> => {
//     return axiosInstance.get('/posts')
// }
// export const getAllUsers = ():Promise<AxiosResponse<IUserModel[]>> => {
//     return axiosInstance.get('/users')
// }
//========================OR==========================


