import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaPlus } from "react-icons/fa";
import { DataContext } from '../context/DataContext';

const MedicineCard = ({ med }) => {
    const { setCartIems } = useContext(DataContext);
    const handleAddToCart = (med) => {
        const savedItems = JSON.parse(localStorage.getItem('cart')) || [];
        //Check if the item already in the Cart
        const existing = savedItems.find(item => item.id === med.id);
        if (existing) {
            toast.error('Already Exists');
            return;
        }
        localStorage.setItem('cart', JSON.stringify([...savedItems, med]));
        setCartIems([...savedItems, med]);
        toast.success('Added to Cart.');
    };
    return (
        <div className='border border-secondary rounded-lg p-2'>
            <div className='flex gap-2'>
                <img src={med.image} alt={med.title} className='w-20 border border-secondary rounded-lg p-2' />
                <p className={`${med.stock > 0 ? 'text-success' : 'text-danger'}`}>{med.stock > 0 ? `In Stock: ${med.stock}` : 'Out of Stock'}</p>
            </div>
            <h5 className='font-semibold'>{med.title}</h5>
            <div className='flex items-start justify-between'>
                <h4 className='text-lg font-bold'>Tk. {(med.unitPrice * med.quantity)}</h4>
                <button
                    onClick={() => handleAddToCart(med)}
                    className='bg-primary py-2 px-4 rounded text-white'>
                    <FaPlus className='w-2 h-2' />
                </button>
            </div>
        </div>
    );
};

export default MedicineCard;