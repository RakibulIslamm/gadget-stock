import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import SingleProduct from './SingleProduct/SingleProduct';

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/my-products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, [user]);

    if (!user) {
        return;
    }

    console.log(products);


    return (
        <div>
            <div className='px-[80px] max-w-[1920px] mx-auto'>
                <h2 className='my-5 text-2xl font-semibold'>My Product</h2>
                <div className='overflow-x-auto border'>
                    <table className='mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300'>
                        <thead className="bg-gray-900">
                            <tr className="text-white text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Item </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Price </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Quantity </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Action </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map(product => <SingleProduct key={product._id} product={product} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;