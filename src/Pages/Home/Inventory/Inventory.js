import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleItem from './SingleItem/SingleItem';

const Inventory = () => {

    const [products, setProducts] = useState([]);
    const { isLoading } = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse());
            })
    }, []);

    console.log(products);

    return (
        <div className='mt-5'>
            <h1 className=' text-4xl font-bold text-center py-5'>Inventory</h1>
            <div className='px-[80px] grid grid-cols-3 gap-6 max-w-[1920px] mx-auto'>
                {products.slice(0, 6).map(product => <SingleItem key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default Inventory;