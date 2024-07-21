import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import CustomErrorLayout from "./layouts/CustomErrorLayout";
import HomePage from "./pages/HomePage";
import PostsByUserId from "./components/PostsByUserId";
import Posts from "./components/Posts";
import CommentsByPostId from "./components/CommentsByPostId";
import Comments from "./components/Comments";
import Users from "./components/Users";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

let router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, errorElement: <CustomErrorLayout/>, children: [
            {index: true, element: <HomePage/>},
            {
                path: 'users', element: <Users/>
            },
            {
                path: 'posts', element: <Posts/>
            },
            {
                path: 'userIdPosts', element: <PostsByUserId/>
            },
            {
                path: 'comments', element: <Comments/>
            },
            {
                path: 'postIdComments', element: <CommentsByPostId/>
            },

        ]
    },
    {path: '/vesna', element: <p><i>Весна прийде</i></p>}
])
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
