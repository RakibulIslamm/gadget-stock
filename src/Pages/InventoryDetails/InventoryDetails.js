import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const InventoryDetails = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://gadget-stock.herokuapp.com/products/${id}`)
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
        fetch(`https://gadget-stock.herokuapp.com/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: totalStock })
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount === 1) {
                    toast(stockQuantity + ' Items Added');
                    setProduct({ ...product, quantity: totalStock });
                    e.target.reset();
                }
            });
    };

    // Handled Delivery
    const handleDelivered = () => {
        const totalStock = parseInt(quantity) - 1;
        fetch(`https://gadget-stock.herokuapp.com/products/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ quantity: totalStock })
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount === 1) {
                    toast('Successfully Delivered');
                    setProduct({ ...product, quantity: totalStock });
                }
            });
    }



    return (
        <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto'>
            <div className='flex items-start xs:flex-col mt-20 gap-10 relative'>
                <img className='w-[400px] border' src={img} alt="" />
                <p className=' absolute top-5 left-0 bg-red-500 text-white px-3 py-1 text-sm font-light'>{category}</p>
                <div className='text-sm space-y-3'>
                    <h1 className='text-2xl xs:text-lg'>{name}</h1>
                    <p className='text-xs font-semibold'>by {supplierName}</p>
                    <p className='font-semibold'>{shortDesc}</p>
                    <p><b>Details: </b>{desc}</p>
                    <div className='flex items-center xs:flex-col xs:items-start xs:gap-1'>
                        <p className='text-xl font-bold border-r xs:border-0 pr-5'>Price: ${price}</p>
                        <p className={`text-lg font-semibold px-5 xs:p-0 border-r xs:border-0 ${quantity <= 3 ? 'text-red-600' : 'text-green-600'}`}>{quantity === 0 ? 'Sold Out' : quantity === 1 ? quantity + ' Item Left' : quantity + ' Items Left'}</p>
                        {
                            quantity <= 0 ? <button className='px-5 py-2 text-center bg-gray-300 mx-5 xs:mx-0 cursor-not-allowed' disabled>Delivered</button> : <button onClick={handleDelivered} className='px-5 py-2 text-center bg-orange-600 text-white active:bg-orange-300 mx-5 xs:mx-0'>Delivered</button>
                        }
                    </div>
                    <form onSubmit={handleRestock}>
                        <label htmlFor="quantity" className='font-semibold'>Restock Item</label><br />
                        <input className='border py-2 px-3 my-2' type="text" name='quantity' placeholder='Add Quantity' required />
                        <button className='px-5 py-2 text-center bg-orange-600 text-white' type='submit'>stock</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;