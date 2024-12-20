import { createContext, useEffect, useState } from 'react';

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [cartItems, setCartIems] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [takenAmount, setTakenAmount] = useState(0);
    const [adjustment, setAdjustment] = useState(0);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartIems(savedItems);
    }, []);

    //Serve the data to the provider
    const data = { isOpen, setIsOpen, searchText, setSearchText, cartItems, setCartIems, subTotal, setSubTotal, grandTotal, setGrandTotal, takenAmount, setTakenAmount, adjustment, setAdjustment };
    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;