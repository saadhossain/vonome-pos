import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { CiCalculator2 } from "react-icons/ci";
import { GrPowerReset } from "react-icons/gr";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { DataContext } from '../context/DataContext';
import Button from './Button';
import PayDrawer from './drawer/PayDrawer';

const Footer = () => {
    const { grandTotal, cartItems, setCartIems } = useContext(DataContext);

    const location = useLocation();
    const pathName = location.pathname;

    const handleResetCart = () => {
        localStorage.removeItem('cart');
        toast.success('Cart Reset Success.');
        setCartIems([]);
    };
    return (
        <footer className='bg-primary md:bg-white md:border-t md:border-secondary md:pt-2 mt-1 md:px-5'>
            <div className='hidden md:flex items-center justify-between'>
                <Button className='bg-danger' title={'Reset'} />
                <Button className='bg-info' title={'Add Info'} />
                <Button className='bg-pink' title={'Discount'} />
                <Button className='bg-warning' title={'Draft'} />
                <Button className='bg-background totalBtn' title={`Total:${grandTotal}`} />
                <button className='bg-secondary py-2 px-4 rounded-lg text-xl'>
                    <CiCalculator2 className='w-10 h-10 border-2 border-white text-white rounded-lg' />
                </button>
                {/* Payment Drawer */}
                <PayDrawer />
            </div>

            {/* Footer Buttons for mobile device home page*/}
            {
                pathName === '/' &&
                <div className='flex md:hidden items-center justify-between'>
                    <button
                        onClick={() => handleResetCart()}
                        className='w-1/6 bg-white text-danger py-4 px-5'>
                        <GrPowerReset className='w-6 h-6 mx-auto' />
                    </button>
                    <Link to='/cart' className='w-5/6 flex items-center gap-4 justify-between mx-5 font-semibold text-white'>
                        <span>{cartItems?.length} Items</span>
                        <span className='flex items-center gap-3'>Tk. {grandTotal} <IoIosArrowForward className='w-6 h-6' /></span>
                    </Link>
                </div>
            }
            {/* Footer Buttons for mobile device cart page*/}
            {
                pathName === '/cart' && <div className='flex md:hidden items-center justify-between font-semibold text-white px-5'>
                    <Link to='/' className='w-1/3 flex items-center gap-2'>
                        <IoIosArrowBack className='w-6 h-6' />
                        Back
                    </Link>
                    <p className='w-1/3 bg-[#f5fafa] text-typo px-5 text-center'>
                        Total:<br />
                        <span className='text-lg font-bold'>Tk. {grandTotal}</span>
                    </p>
                    <div className='w-1/3'>
                        <PayDrawer />
                    </div>
                </div>
            }
        </footer>
    );
};

export default Footer;