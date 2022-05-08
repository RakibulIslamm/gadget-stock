import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { BsFillPersonFill, } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'
import useAuth from '../../../hooks/useAuth';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className=' bg-blue-100'>
            <div className='px-[80px] xs:px-4 sm:px-10 md:px-10 h-20 xs:h-16 max-w-[1920px] mx-auto flex items-center justify-between'>
                <Link to='/'>
                    <div className='flex items-center'>
                        <img src={logo} alt="" className="w-16 h-16 xs:w-10 xs:h-10" />
                        <h1 className='text-2xl xs:text-lg'>Gadget Stock</h1>
                    </div>
                </Link>
                <div className='flex items-center gap-10'>
                    <div className='flex items-center gap-5 text-sm xs:hidden sm:hidden'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/Blogs'>Blogs</CustomLink>
                        {user && <CustomLink to='/my-product'>My Product</CustomLink>}
                        {user && <CustomLink to='/add-product'>Add A Product</CustomLink>}
                        {user && <CustomLink to='/manage-inventory'>Manage Inventory</CustomLink>}
                        {!user && <CustomLink to='/login'>Login</CustomLink>}
                        {!user && <CustomLink to='/register'>Register</CustomLink>}
                    </div>
                    <div className='hidden xs:block'>
                        {!user && <CustomLink to='/login'>Login</CustomLink>}
                    </div>
                    {
                        user &&
                        <div className='flex items-center gap-3'>
                            <button className='flex items-center gap-1 xs:hidden'><BsFillPersonFill className='text-2xl' />{user?.displayName}</button>
                            <button onClick={logOut} className='flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-sm transition-all duration-100 active:bg-red-500'>Log Out<AiOutlineLogout className='text-lg' /></button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;