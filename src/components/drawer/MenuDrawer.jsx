import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Drawer } from 'vaul';
import { menuItems } from '../../utils/menuItems';
import logo from '/vonome-icon.png';

const MenuDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer.Root direction="left" dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Trigger>
                <IoMenu className='w-8 h-8 text-typo' />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                    className="left-2 top-2 bottom-2 fixed z-[99999] outline-none w-72 flex"
                    style={{ '--initial-transform': 'calc(100% + 8px)' }}
                >
                    <div className="bg-white h-full w-full px-5 py-1 flex flex-col rounded-lg border-4 border-info">
                        {/* Logo and Close Icon */}
                        <div className="max-w-md flex items-center justify-between border-b border-secondary mb-5 pb-2">
                            <Link to='/'><img src={logo} alt='Vonome' className='w-10 h-10' /></Link>
                            <FaWindowClose
                                onClick={() => setIsOpen(false)}
                                className='w-7 h-7 text-danger' />
                        </div>
                        {/* Content Here */}
                        <div className='bg-white sticky top-0 h-full overflow-y-auto'>
                            <div className='flex flex-col'>
                                {
                                    menuItems.map(item => <Link
                                        key={item.id}
                                        to={item.url}
                                        className={`p-2 border-b text-base font-medium ${item.id === 1 ? 'bg-primary text-white border-primary' : 'bg-transparent text-typo border-typo'} hover:border-primary hover:bg-primary hover:text-white`}
                                    >{item.title}</Link>)
                                }
                            </div>
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default MenuDrawer;