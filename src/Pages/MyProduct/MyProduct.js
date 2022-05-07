import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Alert from '../../Alert/Alert';
import useAuth from '../../hooks/useAuth';
import SingleProduct from './SingleProduct/SingleProduct';
import { confirmAlert } from 'react-confirm-alert'; // Import

const MyProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user, isLoading } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/my-products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse());
            })
            .finally(() => {
                setLoading(false);
            })
    }, [user]);

    if (!user) {
        return;
    }

    // Delete Product
    const handleDelete = (id) => {
        const handleAlert = (close, confirmation) => {
            if (confirmation) {
                fetch(`http://localhost:5000/products/${id}`, {
                    method: 'DELETE'
                }).then(res => res.json())
                    .then(result => {
                        if (result.deletedCount === 1) {
                            const restProducts = products.filter(product => product._id !== id);
                            setProducts(restProducts);
                            toast('Successfully Deleted');
                        }
                        else { console.log('error') }
                    });
            }
            else {

                close();
            }
            close();
        }
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <Alert onClose={onClose} handleAlert={handleAlert} />
                )
            }
        });
    }

    console.log(isLoading);

    return (
        <div className='min-h-screen'>
            {
                isLoading ? 'Loading...' :
                    <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
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
                                {loading ? <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-500 text-xl font-semibold tracking-wide"> Loading... </p>
                                        </td>
                                    </tr>
                                </tbody> : !products.length ? <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4">
                                            <p className="text-gray-500 text-xl font-semibold tracking-wide"> You Have No Product</p>
                                        </td>
                                    </tr>
                                </tbody> : <tbody className="divide-y divide-gray-200">
                                    {products.map(product => <SingleProduct key={product._id} product={product} handleDelete={handleDelete} />)}
                                </tbody>}
                            </table>
                        </div>
                    </div>}
        </div>
    );
};

export default MyProduct;