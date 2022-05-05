import React from 'react';
import brand1 from '../../images/Brand/1.png'
import brand2 from '../../images/Brand/2.png';
import brand3 from '../../images/Brand/3.png';
import brand4 from '../../images/Brand/4.png';
import brand5 from '../../images/Brand/5.png';
import brand6 from '../../images/Brand/6.png';

const images = [brand1, brand2, brand3, brand4, brand5, brand6];

const BrandSection = () => {
    return (
        <div className='px-[80px] max-w-[1920px] mx-auto py-20'>
            <div className='flex justify-between items-center'>
                {images.map(img => <img className=' w-36 opacity-60 hover:opacity-100 transition-all ease-in-out duration-200 cursor-pointer' src={img} alt="" />)}
            </div>
        </div>
    );
};

export default BrandSection;