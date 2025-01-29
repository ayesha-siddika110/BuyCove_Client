import React from 'react';

const CardButton = ({text}) => {
    return (
        <button className="border border-orange-600 hover:border-black hover:text-orange-600 hover:bg-black mt-2 p-1 px-4 ">{text}</button>
    );
};

export default CardButton;