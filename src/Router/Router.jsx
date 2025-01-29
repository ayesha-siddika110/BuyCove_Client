import { createBrowserRouter } from "react-router"
import Home from "../Pages/Home/Home"
import MainLayout from "../Layout/MainLayout/MainLayout"
import Shop from "../Pages/Shop/Shop"
import ErrorPage from "../Componants/ErrorPage/ErrorPage"


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

        ]
    }
])
export default router