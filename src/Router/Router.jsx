import { createBrowserRouter } from "react-router"
import Home from "../Pages/Home/Home"
import MainLayout from "../Layout/MainLayout/MainLayout"


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // error page
        children: [
           {
            path: "/",
            element: <Home></Home>
           }
        ]
    }
])
export default router