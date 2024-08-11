import {createBrowserRouter} from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import UsersPage from "../pages/UsersPage";
import UserWithPostsPage from "../pages/UserWithPostsPage";
import PostsPage from "../pages/PostsPage";
import PostWithCommentsPage from "../pages/PostWithCommentsPage";
import CommentsPage from "../pages/CommentsPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";

const routers = [{
    path: '', element: <BaseLayout/>, errorElement: <ErrorPage/>, children: [
        {
            index: true, element: <HomePage/>
        },
        {
            path: 'users', element: <UsersPage/>
        },
        {
            path: 'userWithPosts', element: <UserWithPostsPage/>
        },
        {
            path: 'posts', element: <PostsPage/>
        },
        {
            path: 'postWithComments', element: <PostWithCommentsPage/>
        },
        {
            path: 'comments', element: <CommentsPage/>
        },
    ]
}];
export const router = createBrowserRouter(routers);