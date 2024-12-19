import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const CartCalculation = () => {
    const { subTotal } = useContext(DataContext);
    const vatTax = 5;

    const vatTaxAmount = subTotal * (1 + vatTax / 100);
    return (
        <div className='flex items-center justify-between font-semibold mt-2'>
            <div className='flex flex-col items-end gap-2'>
                {/* Subtotal */}
                <div className='flex items-center gap-2 text-right'>
                    <p>Subtotal</p>
                    <button className='bg-gray-200 py-1 px-2 rounded-lg'>Tk. {subTotal}</button>
                </div>
                {/* VAT and Tax */}
                <div className='flex items-center gap-2 text-right'>
                    <p>Vat/Tax</p>
                    <button className='bg-gray-200 py-1 px-2 rounded-lg'>Tk. {vatTaxAmount.toFixed(2)}</button>
                </div>
            </div>
            <div className='flex flex-col items-end gap-2'>
                {/* Discount*/}
                <div className='flex items-center gap-2 text-right'>
                    <p>Discount</p>
                    <button className='bg-gray-200 py-1 px-2 rounded-lg'>Tk. 00.00</button>
                </div>
                {/* Adjustment */}
                <div className='flex items-center gap-2 text-right'>
                    <p>Adjustment</p>
                    <input type='text' className='w-16 py-1 px-2 rounded-lg border-2 border-typo' value={0} />
                </div>
            </div>
        </div>
    );
};

export default CartCalculation;