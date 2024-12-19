import React, { useContext, useState } from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { FaPlus, FaUser } from 'react-icons/fa';
import { DataContext } from '../../context/DataContext';
import CartCalculation from './CartCalculation';
import CartTable from './CartTable';

const Cart = () => {
    const { cartItems } = useContext(DataContext);
    const [searchText, setSearchText] = useState('');
    const filteredCart = cartItems.filter((med) => searchText ? med.title.toLowerCase().includes(searchText) || med.generics.toLowerCase().includes(searchText) : cartItems);
    return (
        <div className='bg-white px-2 pt-5 cart'>
            {/* User Selection */}
            <div className='sticky top-[86px] mb-2'>
                <div className='flex items-center justify-between'>
                    <select
                        className='w-4/6 focus:outline-none pl-8 border border-gray-400 rounded-l-lg text-secondary p-2 font-medium'
                    >
                        <option value="">Walking Customer</option>
                    </select>
                    <FaUser className='absolute top-2 left-1 w-6 h-6 text-secondary' />
                    <button className='w-2/6 flex items-center gap-2 bg-primary text-white py-2 px-5 rounded-r-lg'><FaPlus /> Add Customer</button>
                </div>
            </div>
            {/* Search Input */}
            <div className='border border-secondary rounded-lg p-2 relative'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Scan barcode, product code or title...'
                    className='w-full focus:outline-none pl-6'
                />
                <AiOutlineScan className='absolute top-2 left-1 w-6 h-6' />
            </div>
            <CartTable filteredCart={filteredCart} />
            <CartCalculation />
        </div>
    );
};

export default Cart;