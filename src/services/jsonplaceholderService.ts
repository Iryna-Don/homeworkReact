import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json', 'charset': 'UTF-8'}

});
export const requests = {

    users: {
        getAllUsers: (limitUsers: number, skipUsers: number) => {
            return axiosInstance.get('/users?&_limit=' + limitUsers + '&_start=' + skipUsers)
        }
    },
    posts: {
        getAllPosts: (limitPosts: number, skipPosts: number) => {
            return axiosInstance.get('/posts?_limit=' + limitPosts + '&_start=' + skipPosts)
        }
    },
    comments: {
        getAllComments: (limitComments: number, skipComments: number) => {
            return axiosInstance.get('/comments?_limit=' + limitComments + '&_start=' + skipComments)
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
