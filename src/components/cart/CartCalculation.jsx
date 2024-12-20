import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../context/DataContext';

const CartCalculation = () => {
    const { subTotal, setGrandTotal, adjustment, setAdjustment } = useContext(DataContext);

    const vatTaxAmount = subTotal * (5 / 100);
    const adjustmentAmount = parseFloat(adjustment);

    const finalAmount = (parseFloat(subTotal) + vatTaxAmount + adjustmentAmount).toFixed(2);

    //Set the grandtotal amount
    useEffect(() => {
        setGrandTotal(finalAmount);
    }, [subTotal, vatTaxAmount, adjustment]);
    return (
        <div className='cartCalculation flex items-center justify-between font-semibold mt-2 absolute bottom-2'>
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
                    <input
                        onChange={(e) => setAdjustment(e.target.value)}
                        type='number'
                        className='w-16 py-1 px-2 rounded-lg border-2 border-typo' value={adjustment}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartCalculation;