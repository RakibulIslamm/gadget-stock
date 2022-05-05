import React from 'react';
import img404 from '../../images/212-2123989_404-png.png'

const PageNotFound = () => {
    return (
        <div className=' w-full h-screen flex justify-center items-center flex-col gap-5'>
            <img className=' w-[400px]' src={img404} alt="" />
            <h1 className='text-4xl font-bold'>Page Not Found</h1>
        </div>
    );
};

export default PageNotFound;