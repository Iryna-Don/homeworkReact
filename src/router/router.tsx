import {createBrowserRouter} from "react-router-dom";
import BaseLayout from "../layouts/BaseLayout";
import UsersPage from "../pages/UsersPage";
import UsersWithPostsPage from "../pages/UsersWithPostsPage";
import PostsPage from "../pages/PostsPage";
import PostsWithCommentsPage from "../pages/PostsWithCommentsPage";
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
            path: 'usersWithPosts', element: <UsersWithPostsPage/>
        },
        {
            path: 'posts', element: <PostsPage/>
        },
        {
            path: 'postsWithComments', element: <PostsWithCommentsPage/>
        },
        {
            path: 'comments', element: <CommentsPage/>
        },
    ]
}];
export const router = createBrowserRouter(routers);