import React from 'react';

const Button = ({ className, title }) => {
    return (
        <button className={`py-3 px-6 rounded-lg text-xl text-white font-semibold ${className}`}>
            {title}
        </button>
    );
};

export default Button;
