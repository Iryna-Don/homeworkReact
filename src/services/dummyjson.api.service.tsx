import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-type': 'application/json', 'charset': 'UTF-8'}

});
export const requests = {
    posts: {
        getAllPosts: () => {
            return axiosInstance.get('/posts?limit=0')
        }
    },
    users: {
        getAllUsers: () => {
            return axiosInstance.get('/users?limit=0')
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


