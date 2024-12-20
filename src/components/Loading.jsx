import React from 'react';

const Loading = () => {
    return (
        <div>
            <div className="flex items-center justify-center space-x-2 h-[50vh]">
                <div className="w-4 h-4 rounded-full animate-pulse bg-primary"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-success"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-info"></div>
            </div>
        </div>
    );
};

export default Loading;