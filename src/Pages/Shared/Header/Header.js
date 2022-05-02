import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import { BsFillPersonFill, } from 'react-icons/bs'
import { AiOutlineLogout } from 'react-icons/ai'

const Header = () => {
    return (
        <div className='-mb-20'>
            <div className=' px-[80px] h-20 flex items-center justify-between'>
                <div className='flex items-center gap-20'>
                    <Link to='/'>
                        <div className='flex items-center'>
                            <img src={logo} alt="" className="w-16 h-16" />
                            <h1 className='text-2xl'>Gadget Stock</h1>
                        </div>
                    </Link>
                    <div className='flex items-center gap-5'>
                        <Link to='/'>Home</Link>
                        <Link to='/Blogs'>Blogs</Link>
                        <Link to='/inventory'>Inventory</Link>
                    </div>
                </div>
                <div>
                    <div className='flex items-center gap-3'>
                        <button className='text-2xl'><BsFillPersonFill /></button>
                        <button className='flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-sm transition-all duration-100 active:bg-red-500'>Log Out<AiOutlineLogout className='text-lg' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;