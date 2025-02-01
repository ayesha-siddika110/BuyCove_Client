import { createBrowserRouter } from "react-router"
import Home from "../Pages/Home/Home"
import MainLayout from "../Layout/MainLayout/MainLayout"
import Shop from "../Pages/Shop/Shop"
import ErrorPage from "../Componants/ErrorPage/ErrorPage"
import Blogs from "../Pages/Blogs/Blogs"
import AboutUs from "../Pages/AboutUs/AboutUs"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        // error page
        children: [
           {
            path: "/",
            element: <Home></Home>
           },
           {
            path: "/shop",
            element: <Shop></Shop>
           },
           {
            path: "/blogs",
            element: <Blogs></Blogs>
           },
           {
            path: "/aboutUs",
            element: <AboutUs></AboutUs>
           },
           {
            path: "/login",
            element: <Login></Login>
           },
           {
            path: "/register",
            element: <Register></Register>
           },

        ]
    }
])
export default router