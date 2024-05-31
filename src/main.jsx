 import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './MainLayout';
import UserLogin from './components/User/UserLogin';
import Dashboard from './components/Dashboard';
import Clients from './components/Clients';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/> ,
    children: [
      {
        path:"",
        element: <UserLogin/> 
      },
      {
        path:"dashboard",
        element: <Dashboard/> 
      },
      {
        path:"clients",
        element: <Clients/> 
      }
    ]
  },
]); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
 
