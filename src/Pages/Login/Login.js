import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle } from 'react-icons/ai'
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { login, error, isLoading } = useAuth();

    const onSubmit = data => {
        const email = data.email;
        const pass = data.password;
        login(email, pass, reset);
    };


    return (
        <div className='flex justify-center items-center min-h-screen py-36'>
            <div className='w-4/12'>
                <h1 className='text-2xl font-semibold text-center py-4'>Please Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-white shadow-md rounded border border-gray-200 px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="mb-4">
                            <label className="block text-grey-darker text-sm font-bold mb-2">
                                Email
                            </label>
                            <input {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Email" />
                            {errors.email && <span className=' text-xs italic text-red-600'>This field is required</span>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-grey-darker text-sm font-bold mb-2">
                                Password
                            </label>
                            <input {...register("password", { required: true })} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="Password" />
                            {errors.password && <span className=' text-xs italic text-red-600'>This field is required</span>}
                            {/* <p className="text-red text-xs italic">Please choose a password.</p> */}
                            <button className="inline-block align-baseline text-sm text-blue hover:text-blue-800">
                                Forgot Password?
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                                {isLoading ? 'loading...' : 'Login'}
                            </button>
                            <Link className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" to='/register'>
                                Don't have an account?
                            </Link>
                        </div>
                    </div>
                </form>
                <button className='border border-gray-300 px-5 py-2 mx-auto flex items-center gap-2 rounded-full'><AiFillGoogleCircle className=' text-2xl text-red-500' />Login With Google</button>
            </div>
        </div >
    );
};

export default Login;