// 1.
// Створити сторінки та роутери на них
// users
// posts
// comments
// При переході на кожну з них отримувати відповідні відповіді від джейсонплейсхолдеру та виводити всі об'єкти
// 2. Беремо сторінку з юзерами.
//     При натисканні на конкретного юзера переходимо на нову сторінку, передавши туди
//     всі дані про юзера через state.
// 3. При переході на сторінку юзера зробити запит на сервер і вивести всі пости цього юзера.
// 4. На сторінці зі всіма постами зробити те саме, тільки виводити коменти цього поста
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import CommentsPage from "./pages/CommentsPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let router = createBrowserRouter(
    [
        {
            path: '/', element: <MainLayout/>, errorElement:<ErrorPage/>, children: [
                {index: true, element: <HomePage/>},
                {path: 'users', element: <UsersPage/>},
                {path: 'posts', element: <PostsPage/>},
                {path: 'comments', element: <CommentsPage/>},
            ]
        }
    ]
)
root.render(<RouterProvider router={router}/>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
