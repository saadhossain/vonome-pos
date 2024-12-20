import React from 'react';

const PayFootBtns = ({ setIsOpen }) => {
    return (
        <div className='flex items-center gap-3 justify-between'>
            <button
                onClick={() => setIsOpen(false)}
                className='font-semibold py-2 px-6 rounded-lg text-danger border-2 border-danger hover:bg-danger hover:text-white'>Close</button>
            <button className='font-semibold py-2 px-6 rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-white'>Receipt</button>
            <button className='font-semibold py-2 px-6 rounded-lg text-primary border-2 border-primary hover:bg-primary hover:text-white'>Mark as Piad</button>
        </div>
    );
};

export default PayFootBtns;