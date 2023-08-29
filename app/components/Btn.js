import React from 'react';

const Btn = (props) => {
    return (
        <div>
            <button className='bg-[#ffc107] font-bold  rounded-md px-8 py-5 text-black'>{props.title}</button>
        </div>
    );
};

export default Btn;