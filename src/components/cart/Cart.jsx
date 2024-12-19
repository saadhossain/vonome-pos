import React, { useContext, useState } from 'react';
import { AiOutlineScan } from 'react-icons/ai';
import { DataContext } from '../../context/DataContext';
import CartTable from './CartTable';

const Cart = () => {
    const { cartItems } = useContext(DataContext);
    const [searchText, setSearchText] = useState('');
    const filteredCart = cartItems.filter((med) => searchText ? med.title.toLowerCase().includes(searchText) || med.generics.toLowerCase().includes(searchText) : cartItems);
    return (
        <div className='bg-white px-2 pt-5 cart'>
            <div className='border border-secondary rounded-lg p-2 sticky top-[86px]'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Scan barcode, product code or title...'
                    className='w-full focus:outline-none pl-6'
                />
                <AiOutlineScan className='absolute top-2 left-1 w-6 h-6' />
            </div>
            <CartTable filteredCart={filteredCart} />
        </div>
    );
};

export default Cart;