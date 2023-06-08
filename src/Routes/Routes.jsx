import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ClassContent from "../Pages/Classes/ClassContent/ClassContent";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/classes",
                element: <ClassContent></ClassContent>
            }
        ]
    },
]);