import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";

import {
    createBrowserRouter,

  } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root></Root>,
        errorElement:<>hi</>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/AddCraftItem',
                element:<h1>add craft</h1>
            },
            {
                path:'/MyArt&CraftList',
                element:<h3>my craft5</h3>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            }
        ]
    },
])

export default router