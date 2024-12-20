import React, { useContext } from 'react';
import { CiCalculator2 } from "react-icons/ci";
import { DataContext } from '../context/DataContext';
import Button from './Button';
import PayDrawer from './drawer/PayDrawer';

const Footer = () => {
    const { grandTotal } = useContext(DataContext);
    return (
        <footer className='bg-white border-t border-secondary pt-2 mt-1 px-5'>
            <div className='flex items-center justify-between'>
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
        </footer>
    );
};

export default Footer;