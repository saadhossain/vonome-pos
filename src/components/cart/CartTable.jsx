import React, { useState } from 'react';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { MdRadioButtonChecked } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";

const CartTable = ({ filteredCart }) => {
    const [units, setUnits] = useState({});
    const [quantities, setQuantities] = useState({});

    // Function to handle unit change for a specific item
    const handleUnitChange = (itemId, value) => {
        setUnits((prevUnits) => ({
            ...prevUnits,
            [itemId]: parseInt(value, 10),
        }));
    };

    // Function to handle quantity increment
    const handleIncrement = (itemId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: (prevQuantities[itemId] || 1) + 1,
        }));
    };

    // Function to handle quantity decrement
    const handleDecrement = (itemId) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [itemId]: Math.max(1, (prevQuantities[itemId] || 1) - 1),
        }));
    };

    // Function to calculate subtotal
    const calculateSubtotal = (item) => {
        const unit = units[item.id] || 10;
        const quantity = quantities[item.id] || 1;
        const discount = item.discountPercentage || 0;

        const subtotal = unit * item.unitPrice * quantity * (1 - discount / 100);
        return subtotal.toFixed(2);
    };

    return (
        <div className="text-typo bg-background border border-gray-500 rounded-lg max-h-[400px] overflow-y-auto mt-4 sticky top-36">
            <table className="min-w-full font-medium">
                <thead className="sticky top-0 bg-background">
                    <tr className="text-left border-b border-gray-400">
                        <th className="p-3 border-l-0 border-gray-400">Item</th>
                        <th className="p-3 border-l border-gray-400">Unit</th>
                        <th className="p-3 border-l border-gray-400">Price</th>
                        <th className="p-3 border-l border-gray-400">Qty</th>
                        <th className="p-3 border-l border-gray-400">Disc%</th>
                        <th className="p-3 border-l border-gray-400">Subtotal</th>
                        <th className="p-3 border-l border-gray-400">
                            <MdRadioButtonChecked />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCart.map((item) => (
                        <tr
                            key={item.id}
                            className="border-b border-opacity-20 border-typo last-of-type:border-b-0"
                        >
                            <td className="p-3 border-l-0 border-gray-400">
                                <p>{item.title}</p>
                            </td>
                            <td className="p-3 border-l border-gray-400">
                                <select
                                    value={units[item.id] || ''}
                                    onChange={(e) => handleUnitChange(item.id, e.target.value)}
                                >
                                    <option value="10" selected>10</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="40">40</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="150">150</option>
                                    <option value="200">200</option>
                                </select>
                            </td>
                            <td className="p-3 border-l border-gray-400">
                                <p>{item.unitPrice}</p>
                            </td>
                            <td className="flex items-center gap-2 p-3 border-l border-gray-400">
                                <FaMinusCircle
                                    onClick={() => handleDecrement(item.id)}
                                    className="text-danger"
                                />
                                <p>{quantities[item.id] || 1}</p>
                                <FaPlusCircle
                                    onClick={() => handleIncrement(item.id)}
                                    className="text-success"
                                />
                            </td>
                            <td className="p-3 border-l border-gray-400">
                                <p>{item.discountPercentage}%</p>
                            </td>
                            <td className="p-3 border-l border-gray-400">
                                <p>{calculateSubtotal(item)}</p>
                            </td>
                            <td className="p-3 border-l border-gray-400">
                                <RiDeleteBinLine />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CartTable;