 import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './MainLayout';
import UserLogin from './components/User/UserLogin';
import Dashboard from './pages/Dashboard';
import Clients from './components/Clients';
import Payment from './components/User/Payment';
import Message from './components/User/Message';
import UserProfile from './components/User/UserProfile';
import UserUpdate from './components/User/UserUpdate';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <MainLayout/> ,
    children: [
      
      {
        path:"/dashboard",
        element: <Dashboard/> 
      },
      {
        path:"clients",
        element: <Clients/> 
      },
      {
        path:"messege",
        element: <Message/>
      },
      {
        path:"payments",
        element: <Payment/> 
      },
      {
        path:"userprofile/edit",
        element: <UserUpdate/>
      },
      {
        path:"userprofile",
        element: <UserProfile/> 
      }
    ]
  },
  {
    path:"/",
    element: <UserLogin/> 
  },
  {
    path: "*",
    element: "NoT FOUND"
  }
]); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
      <Toaster />
  </React.StrictMode>,
)
 
