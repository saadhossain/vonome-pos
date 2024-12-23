import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { DataContext } from '../context/DataContext';

const Button = ({ className, title }) => {
    const { setCartIems } = useContext(DataContext);
    const handleResetCart = () => {
        if (title === 'Reset') {
            localStorage.removeItem('cart');
            toast.success('Cart Reset Success.');
            setCartIems([]);
        }
    };
    return (
        <button
            onClick={() => handleResetCart()}
            className={`py-3 px-6 rounded-lg text-xl text-white font-semibold ${className}`}>
            {title}
        </button>
    );
};

export default Button;
