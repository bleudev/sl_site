import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import MainPage from "./pages/MainPage/MainPage";

const router = createBrowserRouter([{
    path: '/',
    element: <Layout/>,
    children: [
        { path: "/", element: <MainPage/> }
    ]
}]);

export default function App() {
    return <RouterProvider router={router}/>;
}