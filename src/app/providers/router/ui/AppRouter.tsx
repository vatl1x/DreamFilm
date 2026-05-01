import { RouterProvider } from "react-router"
import { router } from "../config/routes"

export const AppRouter = ()=>{
    return <RouterProvider router={router}/>
}