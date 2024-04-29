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
import ProductDetails from "../Pages/ProductDetails";
import UpdatePage from "../Pages/UpdatePage";
import Category from "../Pages/Category";
import Errpage from "../Pages/Errpage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <>hi</>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/AddCraftItem',
                element: <RouterProtector>
                    <AddCraft></AddCraft>
                </RouterProtector>
            },
            {
                path: '/AllArt&craft',
                element: <Allcraft></Allcraft>
            },
            {
                path: '/MyArt&CraftList',
                element: <RouterProtector>
                    <MyCraft></MyCraft>
                </RouterProtector>

            },
            {
                path: '/productDetails/:id',
                element: <RouterProtector>
                    <ProductDetails></ProductDetails>
                </RouterProtector>,
            },
            {
                path:'/update/:id',
                element:<RouterProtector>
                    <UpdatePage></UpdatePage>
                </RouterProtector>
            },
            {

                path:'/category/:info',
                element:<Category></Category>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path:'*',
                element:<Errpage></Errpage>
            }
        ]
    },
])

export default router