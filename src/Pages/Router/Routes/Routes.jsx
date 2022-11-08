import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element: <Home/>
            }
        ]
    }
])


