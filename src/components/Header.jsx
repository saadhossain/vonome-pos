import React, { useEffect, useState } from 'react';
import { BsHandbag } from "react-icons/bs";
import { FaKeyboard, FaRegClock } from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { RiDraftLine } from "react-icons/ri";
import { TbDotsVertical, TbReceiptFilled, TbScreenShare } from "react-icons/tb";
import { Link, useLocation } from 'react-router-dom';
import { formatDateTime } from '../utils/formatDateTime';
import MenuDrawer from './drawer/MenuDrawer';
import logo from '/vonome-icon.png';

const Header = () => {
    const location = useLocation();
    const pathName = location.pathname;
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
            <div className='w-11/12 mx-auto md:ml-auto flex items-center justify-between py-2'>
                <div className='md:flex hidden items-center gap-2'>
                    <Link to='/'><img src={logo} alt='Vonome' className='min-w-12 h-10' /></Link>
                    <button className='headerBtn'>
                        <FaKeyboard />
                    </button>
                    {
                        !liveDate && !liveTime ? <div className='w-40 h-2 bg-secondary rounded-lg animate-pulse'></div> : <p className='w-44 text-primary font-medium'>{liveTime} || {liveDate}</p>
                    }
                </div>
                {/* Menu Middle */}
                <div className='md:flex hidden items-center gap-4'>
                    {
                        menus.map((menu) => <button
                            key={menu.id}
                            className={`headerBtn ${menu.title === 'Draft' && 'headerWarnBtn'}`}
                        ><menu.icon />{menu.title}</button>)
                    }
                </div>
                {/* Menu Right */}
                <div className='md:flex hidden items-center gap-4'>
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
                {/* Buttons and Tiggers for mobile */}
                <div className='w-full md:hidden flex items-center justify-between gap-2'>
                    <div className='flex items-center gap-8'>
                        <div className='flex items-center gap-2'>
                            <MenuDrawer />
                            <Link to='/'><img src={logo} alt='Vonome' className='min-w-12 h-10' /></Link>
                        </div>
                        <div className='flex items-center bg-success/30 rounded-3xl'>
                            <Link to='/' className={`flex items-center gap-1 font-medium py-1 px-4 rounded-3xl ${pathName === '/' && 'bg-success/60 text-white'}`}><FaListCheck /> Products</Link>
                            <Link to='/cart' className={`flex items-center gap-1 font-medium py-1 px-4 rounded-3xl ${pathName === '/cart' && 'bg-success/60 text-white'}`}><BsHandbag /> Cart</Link>
                        </div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <button className='headerBtn headerWarnBtn'>
                            <RiDraftLine />
                            Draft
                        </button>
                        <button>
                            <TbDotsVertical className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;