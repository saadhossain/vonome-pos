import React, { useEffect, useState } from 'react';
import { FaKeyboard, FaRegClock } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";
import { TbDotsVertical, TbReceiptFilled, TbScreenShare } from "react-icons/tb";
import { formatDateTime } from '../utils/formatDateTime';

const Header = () => {
    const menus = [
        {
            id: 1,
            title: 'Report',
            url: '/',
            icon: TbReceiptFilled
        },
        {
            id: 2,
            title: 'Return',
            url: '/',
            icon: IoReturnDownBackOutline
        },
        {
            id: 3,
            title: 'Recent',
            url: '/',
            icon: FaRegClock
        },
        {
            id: 4,
            title: 'Draft',
            url: '/',
            icon: RiDraftLine
        }
    ];
    const [liveTime, setLiveTime] = useState('');
    const [liveDate, setLiveDate] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const { time, date } = formatDateTime();
            setLiveTime(time);
            setLiveDate(date);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='border-b border-secondary sticky top-0 bg-background z-50'>
            <div className='w-11/12 ml-auto flex items-center justify-between py-4'>
                <div className='flex items-center gap-2'>
                    <button className='headerBtn'>
                        <FaKeyboard />
                    </button>
                    {
                        !liveDate && !liveTime ? <div className='w-40 h-2 bg-secondary rounded-lg animate-pulse'></div> : <p className='w-44 text-primary font-medium'>{liveTime} || {liveDate}</p>
                    }
                </div>
                {/* Menu Middle */}
                <div className='flex items-center gap-4'>
                    {
                        menus.map((menu) => <button
                            key={menu.id}
                            className={`headerBtn ${menu.title === 'Draft' && 'headerWarnBtn'}`}
                        ><menu.icon />{menu.title}</button>)
                    }
                </div>
                {/* Menu Right */}
                <div className='flex items-center gap-4'>
                    <button className='headerBtn'>
                        <TbScreenShare />
                        Screen
                    </button>
                    <button className='bg-primary text-white font-bold py-1 px-[10px] rounded-full'>
                        R
                    </button>
                    <button className='headerBtn headerDangerBtn'>
                        <IoMdLogOut />
                        Exit
                    </button>
                    <button>
                        <TbDotsVertical className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;