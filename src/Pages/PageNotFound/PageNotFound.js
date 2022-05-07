import React from 'react';
import img404 from '../../images/—Pngtree—error 404 page not found_5768129.png'

const PageNotFound = () => {
    return (
        <div className=' w-full h-screen flex justify-center items-center border-b'>
            <img className='w-[400px]' src={img404} alt="" />
        </div>
    );
};

export default PageNotFound;