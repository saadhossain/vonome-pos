import React, { useContext } from 'react';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import { menuItems } from '../../utils/menuItems';
import Loading from '../Loading';
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

    return (
        <div className="listings bg-white px-2 pt-5 pb-5 md:pb-0">
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
                {/* Desktop Menus */}
                <div className='w-3/12 hidden md:block'>
                    <div className='bg-white sticky top-0 h-[60vh] overflow-y-auto'>
                        <div className='flex flex-col'>
                            {
                                menuItems.map(item => <Link
                                    key={item.id}
                                    to={item.url}
                                    className={`p-2 border-b border-r text-base font-medium ${item.id === 1 ? 'bg-primary text-white border-primary' : 'bg-transparent text-typo border-typo'} hover:border-primary hover:bg-primary hover:text-white`}
                                >{item.title}</Link>)
                            }
                        </div>
                    </div>
                </div>
                {/* Medicine Cards */}
                <div className='w-full md:w-9/12'>
                    <div className='sticky top-36 bg-white h-[60vh] overflow-y-auto'>
                        <div className='flex items-center justify-between gap-2 pb-2 sticky top-0 bg-white'>
                            <h3 className='w-2/5 text-base md:text-lg font-semibold'>Total Medicine ({filteredMedicines.length})</h3>
                            <select className='w-3/5 text-right text-lg font-medium bg-white text-primary focus:outline-none'>
                                <option value=''>Select Brand</option>
                                {brands.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item}
                                    >{item}</option>
                                ))}
                            </select>
                        </div>
                        {
                            filteredMedicines.length < 1 ? <Loading /> : <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                                {filteredMedicines.map((med) => (
                                    <MedicineCard key={med.id} med={med} />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListings;