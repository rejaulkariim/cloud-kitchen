import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import Blog from "../../Blog/Blog";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import Reviews from "../../Reviews/Reviews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path:'/reviews',
        element:<Reviews/>
      },
    ],
  },
]);
