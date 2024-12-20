import React, { useContext, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Drawer } from 'vaul';
import { DataContext } from '../../context/DataContext';
import PayCalc from './PayCalc';
import PayFootBtns from './PayFootBtns';
import cardIcon from '/icons/card.png';
import cashIcon from '/icons/cash.png';
import mfsIcon from '/icons/mfs.png';

const PayDrawer = () => {
    const { grandTotal, takenAmount, setTakenAmount } = useContext(DataContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Drawer.Root direction="right" dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger className="flex items-center py-3 px-6 rounded-lg text-xl text-white font-semibold bg-primary">
                Payment
                <IoIosArrowForward />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                    className="right-2 top-2 bottom-2 fixed z-[99999] outline-none w-[450px] flex"
                    style={{ '--initial-transform': 'calc(100% + 8px)' }}
                >
                    <div className="bg-white h-full w-full px-5 py-1 flex flex-col rounded-lg border-4 border-info">
                        {/* Title and Close Icon */}
                        <div className="max-w-md flex items-center justify-between border-b-2 border-secondary">
                            <div>
                                <Drawer.Title className="font-semibold text-typo">Order Payment</Drawer.Title>
                                <Drawer.Description className="text-zinc-600 mb-2">
                                    Order <span className='font-semibold'>#893</span>
                                </Drawer.Description>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className='font-2xl font-semibold'
                            >X</button>
                        </div>
                        {/* Total Amount */}
                        <div className='flex items-center justify-between my-3 bg-[#F5FAFA] py-2 px-5'>
                            <h5 className='text-lg text-typo font-medium'>Total Amount</h5>
                            <h2 className='text-2xl font-semibold text-success'>Tk. {grandTotal}</h2>
                        </div>
                        {/* Payment Method section */}
                        <div>
                            <p className='font-medium'>Payment Method</p>
                            <div className='flex items-center gap-5 py-2'>
                                <button className='border border-secondary rounded-lg py-1 px-4'>
                                    <img src={cashIcon} alt='Cash' className='w-6' />
                                    Cash
                                </button>
                                <button className='border border-secondary rounded-lg py-1 px-4'>
                                    <img src={cardIcon} alt='Card' className='w-6' />
                                    Card
                                </button>
                                <button className='border border-secondary rounded-lg py-1 px-4'>
                                    <img src={mfsIcon} alt='Mfs' className='w-6' />
                                    MFS
                                </button>
                            </div>
                        </div>
                        {/* Taken Amount Input */}
                        <input
                            type="number"
                            value={takenAmount}
                            onChange={(e) => setTakenAmount(parseFloat(e.target.value))}
                            className='w-full p-3 rounded-lg border border-secondary focus:outline-none text-center font-semibold text-typo' />
                        {/* Payment Calculation section */}
                        <PayCalc />
                        {/* Footer Buttons  */}
                        <PayFootBtns setIsOpen={setIsOpen} />
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default PayDrawer;