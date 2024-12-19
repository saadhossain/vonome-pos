import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;