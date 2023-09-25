import BaseLayout from "@/components/layout/BaseLayout";
import Home from "../pages/Home";
import { Outlet, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";

export const router = createBrowserRouter([
     {
          element: <BaseLayout />,
          errorElement: <ErrorPage />,
          children: [
               {
                    path: "/",
                    element: <Home />,
               },
               {
                    path: "/signup",
                    element: <SignUp />,
               },
               {
                    path: "/login",
                    element: <Login />,
               },
          ],
     },
]);
