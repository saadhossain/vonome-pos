import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';

const PayCalc = () => {
    const { subTotal, grandTotal, takenAmount, adjustment } = useContext(DataContext);

    const vatTaxAmount = subTotal * (5 / 100);
    const returnAmount = (takenAmount - grandTotal);
    return (
        <div className='flex items-start gap-5 mt-4 mb-3'>
            {/* Calculaton left table */}
            <table className='w-2/4 bg-[#f5fafa] border border-secondary border-opacity-50'>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Subtotal</td>
                    <td className='text-right p-1 font-medium'>Tk. {grandTotal}</td>
                </tr>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Vat/Tax</td>
                    <td className='text-right p-1 font-medium'>Tk. {vatTaxAmount.toFixed(2)}</td>
                </tr>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Discount</td>
                    <td className='text-right p-1 font-medium'>Tk. 00.00</td>
                </tr>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Adjustment</td>
                    <td className='text-right p-1 font-medium'>Tk. {adjustment}</td>
                </tr>
                <tr className="bg-info text-white">
                    <td className='p-1'>Total</td>
                    <td className='text-right p-1 font-medium'>Tk. {grandTotal}</td>
                </tr>
            </table>
            {/* Calculaton right table */}
            <table className='w-2/4 bg-[#f5fafa] border border-secondary border-opacity-50'>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Taken</td>
                    <td className='text-right p-1 font-medium'>Tk. {takenAmount}</td>
                </tr>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Return</td>
                    <td className='text-right p-1 font-medium'>Tk. {takenAmount > grandTotal ? returnAmount : '00.00'}</td>
                </tr>
                <tr className="bg-success text-white">
                    <td className='p-1'>Paid</td>
                    <td className='text-right p-1 font-medium'>Tk. {takenAmount > grandTotal ? grandTotal : takenAmount}</td>
                </tr>
                <tr className="bg-danger text-white">
                    <td className='p-1'>Due</td>
                    <td className='text-right p-1 font-medium'>Tk. {takenAmount > grandTotal ? '00.00' : grandTotal - takenAmount}</td>
                </tr>
                <tr className="border-b border-secondary border-opacity-50">
                    <td className='p-1'>Status</td>
                    <td className='text-right p-1 font-medium'>{takenAmount > grandTotal ? 'Paid' : 'Unpaid'}</td>
                </tr>
            </table>
        </div>
    );
};

export default PayCalc;