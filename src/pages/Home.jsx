import React, { useContext, useEffect, useState } from 'react';
import Cart from '../components/cart/Cart';
import ProductListings from '../components/products/ProductListings';
import { DataContext } from '../context/DataContext';
const Home = () => {
    const [medicines, setMedicines] = useState([]);
    const { searchText } = useContext(DataContext);
    useEffect(() => {
        const getData = async () => {
            const res = await fetch('/medicines.json');
            const data = await res.json();
            setMedicines(data);
        };
        getData();
    }, []);
    const filteredMedicines = medicines.filter((med) => searchText ? med.title.toLowerCase().includes(searchText) || med.generics.toLowerCase().includes(searchText) : medicines);
    return (
        <div className='flex'>
            {/* Product Listing and Menu */}
            <ProductListings filteredMedicines={filteredMedicines} />
            <Cart />
        </div>
    );
};

export default Home;