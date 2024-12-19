import React, { useContext } from 'react';
import { Drawer } from 'vaul';
import { DataContext } from '../../context/DataContext';
const PaymentDrawer = ({ children }) => {
    const { isOpen, setIsOpen } = useContext(DataContext);
    return (
        <Drawer.Root direction="right" dismissible={false} open={isOpen} onOpenChange={setIsOpen}>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                    className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
                    // The gap between the edge of the screen and the drawer is 8px in this case.
                    style={{ '--initial-transform': 'calc(100% + 8px)' }}
                >
                    <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
                        <div className="max-w-md mx-auto">
                            <Drawer.Title className="font-medium mb-2 text-zinc-900">It supports all directions.</Drawer.Title>
                            <Drawer.Description className="text-zinc-600 mb-2">
                                This one specifically is not touching the edge of the screen, but that&apos;s not required for a side
                                drawer.
                            </Drawer.Description>
                            {children}
                        </div>
                    </div>
                    <button
                        className="rounded-md mt-4 w-full bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-typo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                        onClick={() => setIsOpen(false)}
                    >
                        Close Drawer
                    </button>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default PaymentDrawer;