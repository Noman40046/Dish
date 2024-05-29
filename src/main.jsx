import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './MainLayout';
import Home from './components/Home';
import Clients from './components/Clients';
import Payments from './components/Payments';
import Payment from './components/User/Payment';


/* const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path:"",
        element: <Home/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"gallery",
        element: <Gallery/>
      },
      {
        path:"contact",
        element: <Contact/>
      },
    ]
  },
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='clients' element={<Clients/>}/>
      <Route path='payments' element={<Payments/>}/>
      <Route path='paybill' element={<Payment/>}/>
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
