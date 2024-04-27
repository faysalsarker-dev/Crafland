import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Root from "../Root/Root";

import {
    createBrowserRouter,

  } from "react-router-dom";
import RouterProtector from "../component/RouterProtector";
import AddCraft from "../Pages/AddCraft";
import MyCraft from "../Pages/MyCraft";
import Allcraft from "../Pages/Allcraft";

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
                element:<RouterProtector>
                    <AddCraft></AddCraft>
                    </RouterProtector>
            },
            {
                path:'/AllArt&craft',
                element:<Allcraft></Allcraft>
            },
            {
                path:'/MyArt&CraftList',
                element:<RouterProtector>
                    <MyCraft></MyCraft>
                    </RouterProtector>
               
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