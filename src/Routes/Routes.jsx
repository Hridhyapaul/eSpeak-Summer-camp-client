import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ClassContent from "../Pages/Classes/ClassContent/ClassContent";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/MySelectedClass/SelectedClass";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClasses from "../Pages/Dashboard/MyClasses/MyClasses";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: 'dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                children: [
                    {
                        path: 'selectedClass',
                        element: <SelectedClass></SelectedClass>
                    },
                    {
                        path: 'addClass',
                        element: <AddClass></AddClass>
                    },
                    {
                        path: 'myClasses',
                        element: <MyClasses></MyClasses>
                    },
                    {
                        path: 'updateClass/:_id',
                        element: <UpdateClass></UpdateClass>
                    },
                    {
                        path: 'manageClasses',
                        element: <ManageClasses></ManageClasses>
                    },
                    {
                        path: 'manageUsers',
                        element: <ManageUser></ManageUser>
                    },
                    {
                        path: 'payment',
                        element: <Payment></Payment>
                    },
                    {
                        path: 'enrolledClasses',
                        element: <EnrolledClass></EnrolledClass>
                    },
                    {
                        path: 'paymentHistory',
                        element: <PaymentHistory></PaymentHistory>
                    }
                ]
            }
        ]
    }
]);