 import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout';
import UserLogin from './pages/UserLogin';
import Dashboard from './pages/Dashboard';
import { Toaster } from 'react-hot-toast';
import Payment from './pages/Payment';
import Message from './pages/Message';
import UserUpdate from './pages/User/UserUpdate';
import UserProfile from './pages/User/UserProfile';
import Bills from './pages/Bills';

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
        path:"bills",
        element: <Bills/>
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
        path:"edit/:id",
        element: <UserUpdate/>
      },
      {
        path:"/dashboard/userprofile/:id",
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
 
