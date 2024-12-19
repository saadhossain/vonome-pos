import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header />
            <Outlet />
        </div>
    );
};

export default MainLayout;