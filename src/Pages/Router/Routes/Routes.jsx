import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main";
import AddService from "../../AddService/AddService";
import Blog from "../../Blog/Blog";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home";
import Login from "../../Login/Login/Login";
import Register from "../../Login/Register/Register";
import MyReviews from "../../MyReviews/MyReviews";
import Reviews from "../../Reviews/Reviews";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Services from "../../Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        path: "/reviews/:id",
        element: <PrivateRoute><Reviews /></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://cloud-kitchen-server-pi.vercel.app/services/${params.id}`),
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`https://cloud-kitchen-server-pi.vercel.app/services/${params.id}`),
      },
      {
        path: "/addService",
        element: <PrivateRoute><AddService /></PrivateRoute>,
        loader: ({ params }) =>
          fetch('https://cloud-kitchen-server-pi.vercel.app/services'),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path:'/myReviews',
        element:<MyReviews/>
      },
    ],
  },
]);
