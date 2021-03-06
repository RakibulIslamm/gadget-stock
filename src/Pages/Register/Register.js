import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillGoogleCircle } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';

const Register = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signUp, googleSignIn, setUser, error, setError, isLoading } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        setError('');
    }, [setError])

    const onSubmit = data => {
        const name = data.name;
        const email = data.email;
        const pass = data.password;
        signUp(email, pass, name, reset, navigate)
    };

    // Handled Google SignIn
    const googleLogin = async () => {
        await googleSignIn()
            .then((result) => {
                setUser(result.user)
                fetch('https://gadget-stock.herokuapp.com/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: result.user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(result.user.email);
                        localStorage.setItem('token', data.token);
                        navigate('/');
                    })
            })
            .catch(err => {
                setError(err.message);
            })
    }

    return (
        <div>
            <div className='flex justify-center items-center min-h-screen py-36 xs:py-10 xs:px-4 sm:px-10'>
                <div className='w-4/12 xs:w-full sm:w-full'>
                    <h1 className='text-2xl font-semibold text-center py-4'>Please Register An Account</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="bg-white shadow-md rounded border border-gray-200 px-8 xs:px-4 py-6 xs:py-4 mb-4 flex flex-col">
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2">
                                    Full Name
                                </label>
                                <input {...register("name", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Email" />
                                {errors.name && <span className=' text-xs italic text-red-600'>This field is required</span>}
                            </div>
                            {/* =========================================== */}
                            <div className="mb-4">
                                <label className="block text-grey-darker text-sm font-bold mb-2">
                                    Email
                                </label>
                                <input {...register("email", { required: true })} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Email" />
                                {errors.email && <span className=' text-xs italic text-red-600'>This field is required</span>}
                            </div>
                            {/* ============================================ */}
                            <div className="mb-6">
                                <label className="block text-grey-darker text-sm font-bold mb-2">
                                    Password
                                </label>
                                <input {...register("password", { required: true })} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="Password" />
                                {errors.password && <span className=' text-xs italic text-red-600'>This field is required</span>}
                                <p className="text-red text-xs italic text-red-600">{error}</p>
                            </div>
                            {/* =============================================== */}
                            <div className="flex items-center justify-between gap-4">
                                <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                                    {isLoading ? <ScaleLoader color='#fff' height={10} /> : 'Register'}
                                </button>
                                <Link className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" to='/login'>
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </form>
                    <button onClick={googleLogin} className='border border-gray-300 px-5 py-2 mx-auto flex items-center gap-2 rounded-full'><AiFillGoogleCircle className=' text-2xl text-red-500' />Login With Google</button>
                </div>
            </div >
        </div>
    );
};

export default Register;