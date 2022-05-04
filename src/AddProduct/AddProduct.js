import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useAuth from '../hooks/useAuth';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { user } = useAuth();

    const onSubmit = data => {
        const product = { ...data, email: user.email };
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    toast('Product Added');
                    reset();
                }
            })
            .catch(err => toast(err.message));
    };

    return (
        <div className='py-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-2xl mx-auto mt-5">
                <h1 className='text-2xl font-semibold pb-5'>Please Add A product</h1>
                <div className="w-full md:w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Title
                    </label>
                    <input {...register("name", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Title" />
                </div>
                <div className="w-full md:w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Short Description
                    </label>
                    <input {...register("shortDesc", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Short Description" />
                </div>
                <div className="w-full md:w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Description
                    </label>
                    <textarea {...register("desc", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Description" />
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Price
                        </label>
                        <input {...register("price", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Price" />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Model
                        </label>
                        <input {...register("Model", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Model" />
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Ratings
                        </label>
                        <div className="relative">
                            <select {...register("rating", { required: true })} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Quantity
                        </label>
                        <input {...register("quantity", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Quantity" />
                    </div>
                </div>

                <div className="w-full md:w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Image Link
                    </label>
                    <input {...register("img", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Image Link" />
                </div>


                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Features
                        </label>
                        <input {...register("features", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Features" />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Category
                        </label>
                        <input {...register("category", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Category" />
                    </div>
                </div>

                <div className="w-full md:w-full mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Supplier Name
                    </label>
                    <input {...register("supplierName", { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" value={user.displayName} name='displayName' readOnly />
                </div>
                <button className='py-2 text-center bg-yellow-400 relative block w-full' type='submit'>Add</button>
            </form>
        </div>
    );
};

export default AddProduct;