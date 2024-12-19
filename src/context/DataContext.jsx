import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [cartItems, setCartIems] = useState([]);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartIems(savedItems);
    }, []);

    //Serve the data to the provider
    const data = { isOpen, setIsOpen, searchText, setSearchText, cartItems, setCartIems };
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;