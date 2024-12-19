import React, { useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import MedicineCard from '../MedicineCard';

const ProductListings = ({ filteredMedicines }) => {
    const { setSearchText } = useContext(DataContext);
    const brands = [
        'Aristopharma Ltd',
        'Beximco Pharmaceuticals Ltd',
        'Square Pharmaceuticals PLC',
        'Renata Limited',
        'Healthcare Pharmaceuticals Ltd'
    ];
    const menuItems = [
        {
            id: 1,
            title: 'All Medicine',
            url: '/'
        },
        {
            id: 2,
            title: 'Grocery',
            url: '/'
        },
        {
            id: 3,
            title: 'Cosmetics',
            url: '/'
        },
        {
            id: 4,
            title: 'Baby Foods',
            url: '/'
        },
        {
            id: 5,
            title: 'Discount %',
            url: '/'
        },
        {
            id: 6,
            title: 'New Arrivals',
            url: '/'
        },
        {
            id: 7,
            title: 'Promotions',
            url: '/'
        },
        {
            id: 8,
            title: 'Hot Deals',
            url: '/'
        },
        {
            id: 9,
            title: 'Client Choice',
            url: '/'
        },
        {
            id: 10,
            title: 'Family Mart',
            url: '/'
        }
    ];
    return (
        <div className="w-7/12 bg-white px-2 pt-5">
            <div className='border border-secondary rounded-lg p-2 mx-5 sticky top-[86px]'>
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    placeholder='Search By Product Name, Generic, Barcode no...'
                    className='w-full focus:outline-none pl-6'
                />
                <IoSearch className='absolute top-2 left-1 w-6 h-6' />
            </div>
            {/* Menu Sidebar and Medicine List */}
            <div className='w-full flex gap-2 mt-4 sticky top-40'>
                <div className='w-3/12'>
                    <div className='p-4 bg-white sticky top-36 h-full'>
                        <div className='flex flex-col'>
                            {
                                menuItems.map(item => <Link
                                    key={item.id}
                                    to={item.url}
                                    className='p-2 border-b border-r text-base font-medium text-typo border-typo hover:border-primary hover:bg-primary hover:text-white'
                                >{item.title}</Link>)
                            }
                        </div>
                    </div>
                </div>
                <div className='w-9/12'>
                    <div className='sticky top-36 bg-white h-[70vh] overflow-y-auto'>
                        <div className='flex items-center justify-between pb-2 sticky top-0 bg-white'>
                            <h3 className='text-lg font-semibold'>Total Medicine ({filteredMedicines.length})</h3>
                            <select className='text-right text-lg font-medium text-primary focus:outline-none'>
                                <option value=''>Select Brand</option>
                                {brands.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item}
                                    >{item}</option>
                                ))}
                            </select>
                        </div>
                        <div className='grid grid-cols-3 gap-3'>
                            {filteredMedicines.map((med) => (
                                <MedicineCard key={med.id} med={med} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListings;