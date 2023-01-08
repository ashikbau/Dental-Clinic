import {createBrowserRouter} from "react-router-dom"
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main"
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../Pages/Dashboard/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ManageDoctors from "../../Pages/Dashboard/Dashboard/ManageDoctors/ManageDoctors";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import Home from "../../Pages/Home/Home/Home"
import LogIn from "../../Pages/LogIn/LogIn";
import Review from "../../Pages/Review/Review";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";

 const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element: <LogIn></LogIn>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:"/appointment",
                element: <Appointment></Appointment>
            },
            {
                path:"/review",
                element:<Review></Review>
            }
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            
            {
                path:'/dashboard/adddoctor',
                element:<AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path:'/dashboard/managedoctors',
                element:<AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader:({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])

export default router;