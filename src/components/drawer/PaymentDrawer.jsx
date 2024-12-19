import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Drawer } from 'vaul';
const PaymentDrawer = () => {
    return (
        <Drawer.Root direction="right">
            <Drawer.Trigger className="flex items-center py-3 px-6 rounded-lg text-xl text-white font-semibold bg-primary">
                Payment
                <IoIosArrowForward />
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                    className="right-2 top-2 bottom-2 fixed z-[99999] outline-none w-96 flex"
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
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default PaymentDrawer;