import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";

import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Admin/Dashboard";
import Bills from "./pages/Admin/Bills";
import Message from "./pages/Admin/Message";
import Payment from "./pages/Admin/Payment";
import UserLogin from "./pages/Admin/UserLogin";
import UserUpdate from "./pages/User/UserUpdate";
import UserProfile from "./pages/User/UserProfile";

import AddUser from "./pages/User/AddUser";


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard/>
      },
      {
        path: "bills",
        element: <Bills />,
      },
      {
        path: "messege",
        element: <Message />,
      },
      {
        path: "payments",
        element: <Payment />,
      },
      {
        path: "edit/:id",
        element: <UserUpdate />,
      },
      {
        path: "/dashboard/userprofile/:id",
        element: <UserProfile />,
      },
      {
        path: "adduser",
        element: <AddUser/>,
      }
    ],
  },

  {
    path: "/",
    element: <UserLogin />,
  },
  {
    path: "*",
    element: "NoT FOUND",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </React.StrictMode>
);
