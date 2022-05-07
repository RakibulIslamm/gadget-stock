import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = ({ product }) => {
    const { _id, name, img, shortDesc, category, price, quantity, supplierName } = product
    return (
        <div className='flex justify-between items-center flex-col border shadow-lg relative'>
            <div className='px-10 pt-10'>
                <img src={img} alt="" />
            </div>
            <div>
                <div className='px-10 pt-10'>
                    <h2 className='text-xl font-semibold pb-2'>{name}</h2>
                    <p className=' text-sm py-2'>{shortDesc.slice(0, 70)} ...</p>
                    <p className=' absolute top-5 left-0 bg-red-500 text-white px-3 py-1 text-sm font-light'>{category}</p>
                    <p className='text-xs font-semibold'>by {supplierName}</p>
                    <div className='flex justify-between items-center py-3'>
                        <p>${price}</p>
                        <p>{quantity} Item Left</p>
                    </div>
                </div>
            </div>
            <Link to={`/inventory-details/${_id}`} className='block py-2 text-center bg-orange-600 text-white w-full'>Update Inventory</Link>
        </div>
    );
};

export default SingleItem;