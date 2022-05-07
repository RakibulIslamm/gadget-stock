import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SingleInventory from './SingleInventory/SingleInventory';
import { confirmAlert } from 'react-confirm-alert';
import { BiPlus } from 'react-icons/bi'
import Alert from '../Alert/Alert';
import { Link } from 'react-router-dom';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.reverse());
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

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



    return (
        <div className='min-h-screen'>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
                <div className='my-5 flex items-center gap-5'>
                    <h2 className='text-2xl font-semibold'>Manage Inventory</h2>
                    <Link to='/add-product' className='px-5 py-1 bg-blue-500 text-white rounded-full flex items-center'>Add New Item <BiPlus /></Link>
                </div>
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
                        {
                            loading ? <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> Loading... </p>
                                    </td>
                                </tr>
                            </tbody> : !products.length ? <tbody className="divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4">
                                        <p className="text-gray-500 text-xl font-semibold tracking-wide"> Product Not Found </p>
                                    </td>
                                </tr>
                            </tbody> : <tbody className="divide-y divide-gray-200">
                                {products.map(product => <SingleInventory key={product._id} product={product} handleDelete={handleDelete} />)}
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;