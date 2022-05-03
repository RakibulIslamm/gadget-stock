import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
    }, [id]);
    const { _id, name, img, desc, shortDesc, category, quantity, price, supplierName } = product

    // Handled Restock
    const handleRestock = (e) => {
        e.preventDefault();
        const stockQuantity = e.target.quantity.value;
        const totalStock = parseInt(quantity) + parseInt(stockQuantity);
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: totalStock })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount === 1) {
                    toast('Stock Added');
                    setProduct({ ...product, quantity: totalStock });
                    e.target.reset();
                }
            });
    };

    // Handled Delivery
    const handleDelivered = () => {
        const totalStock = parseInt(quantity) - 1;
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: totalStock })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.modifiedCount === 1) {
                    toast('Successfully Delivered');
                    setProduct({ ...product, quantity: totalStock });
                }
            });
    }



    return (
        <div className='px-[80px] max-w-[1920px] mx-auto'>
            <div className='flex items-start mt-20 gap-10 relative'>
                <img className='w-[400px] border' src={img} alt="" />
                <p className=' absolute top-5 left-0 bg-red-500 text-white px-3 py-1 text-sm font-light'>{category}</p>
                <div className='text-sm space-y-3'>
                    <h1 className='text-2xl'>{name}</h1>
                    <p className='text-xs font-semibold'>by {supplierName}</p>
                    <p className='font-semibold'>{shortDesc}</p>
                    <p><b>Details: </b>{desc}</p>
                    <div className='flex items-center'>
                        <p className='text-xl font-bold border-r pr-5'>Price: ${price}</p>
                        <p className={`text-lg font-semibold px-5 border-r ${quantity <= 3 ? 'text-red-600' : 'text-green-600'}`}>{quantity === 0 ? 'Sold Out' : quantity === 1 ? quantity + ' Item Left' : quantity + ' Items Left'}</p>
                        <button onClick={handleDelivered} className='px-5 py-2 text-center bg-yellow-400 mx-5'>Delivered</button>
                    </div>
                    <form onSubmit={handleRestock}>
                        <label htmlFor="quantity" className='font-semibold'>Restock Item</label><br />
                        <input className='border py-2 px-3 my-2' type="text" name='quantity' placeholder='Add Quantity' required />
                        <button className='px-5 py-2 text-center bg-yellow-400' type='submit'>stock</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;