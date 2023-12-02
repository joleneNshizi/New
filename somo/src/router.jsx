import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./core/DefaultLayout";
import GuestLayout from "./core/GuestLayout";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Surveys from "./views/Survey";
import CareerGuidance from "./components/careerguidance";
import Settings from "./views/Settings";
import Notification from "./views/notification";

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard" />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/courses",
        element: <Surveys />,
      },
      {
        path: "/guidance",
        element: <CareerGuidance />,
      },
      
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/setting",
        element: <Settings />,
      },
      {
        path: "/notification",
        element: <Notification/>,
      },
    ],
  },
]);

export default router;
