import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SingleInventory from './SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse());
            })
    }, []);

    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure you want to delete this item?');
        if (confirm) {
            fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(result => {
                    console.log(result);
                    if (result.deletedCount === 1) {
                        const restProducts = products.filter(product => product._id !== id);
                        setProducts(restProducts);
                        toast('Successfully Deleted');
                    }
                }
                );
        }
    }



    return (
        <div>
            <div className='px-[80px] max-w-[1920px] mx-auto'>
                <h2 className='my-5 text-2xl font-semibold'>Manage Inventory</h2>
                <div className='overflow-x-auto border'>
                    <table className='mx-auto w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300'>
                        <thead className="bg-gray-900">
                            <tr className="text-white text-left">
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Item </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> Email </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Action </th>
                                <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {products.map(product => <SingleInventory key={product._id} product={product} handleDelete={handleDelete} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;