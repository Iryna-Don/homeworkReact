import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthorizationPage from "../pages/AuthorizationPage";
import RegistrationPage from "../pages/RegistrationPage";
import CarsPage from "../pages/CarsPage";

export let browserRouter = createBrowserRouter([
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
