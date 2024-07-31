import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import AuthorizationPage from "./pages/AuthorizationPage";
import RegistrationPage from "./pages/RegistrationPage";
import CarsPage from "./pages/CarsPage";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let browserRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true, element: <AuthorizationPage/>
            },
            {
                path: 'users', element: <RegistrationPage/>
            },
            {
                path: 'cars', element: <CarsPage/>
            },
        ]
    }
]);

root.render(
    <RouterProvider router={browserRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
