import React, { useEffect, useState } from 'react';
import { ScaleLoader } from 'react-spinners';
import useAuth from '../../../hooks/useAuth';
import SingleItem from './SingleItem/SingleItem';

const Inventory = () => {

    const [products, setProducts] = useState([]);
    const { isLoading, setIsLoading } = useAuth();

    useEffect(() => {
        setIsLoading(true);
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse());
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, []);

    return (
        <div className='mt-5'>
            <h1 className='text-4xl font-bold text-center py-5'>Inventory</h1>
            {
                isLoading ? <div className='flex justify-center items-center h-[200px]'>
                    <ScaleLoader color='orange' size={100} />
                </div> : <div className='px-[80px] xs:px-4 sm:px-10 grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1920px] mx-auto'>
                    {products.slice(0, 6).map(product => <SingleItem key={product._id} product={product} />)}
                </div>
            }
        </div>
    );
};

export default Inventory;