import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json', 'charset': 'UTF-8'}

});
export const requests = {

    users: {
        getAllUsers: (limitUsers: number, skipUsers: number) => {
            return axiosInstance.get('/users?limit=' + limitUsers + '&skip=' + skipUsers)
        }
    },
    posts: {
        getAllPosts: (limitPosts: number, skipPosts: number) => {
            return axiosInstance.get('/posts?limit=' + limitPosts + '&skip=' + skipPosts)
        }
    },
    comments: {
        getAllComments: (limitComments: number, skipComments: number) => {
            return axiosInstance.get('/comments?limit=' + limitComments + '&skip=' + skipComments)
        }
    },
    userById: {
        getUserById: (userId: number) => {
            return axiosInstance.get('/users/' + userId)
        }
    },
    postsByUserId: {
        getPostsByUserId: (userId: number) => {
            return axiosInstance.get('/posts?userId=' + userId)
        }
    },
    commentsByPostId: {
        getCommentsByPostId: (postId: number) => {
            return axiosInstance.get('/posts/' + postId + '/comments')
        }
    },
}
