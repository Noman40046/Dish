import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Sidebar/>
        </div>
    );
};

export default MainLayout;