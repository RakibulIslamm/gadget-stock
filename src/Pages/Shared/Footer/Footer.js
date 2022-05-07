import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import payment from '../../../images/payment.png'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='bg-gray-100 mt-6'>
            <div className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto py-10'>
                <div className='mb-4 flex justify-between items-center xs:flex-col'>
                    <Link to='/'>
                        <div className='flex items-center'>
                            <img src={logo} alt="" className="w-16 h-16 xs:w-10 xs:h-10" />
                            <h1 className='text-2xl xs:text-lg'>Gadget Stock</h1>
                        </div>
                    </Link>
                    <div className='flex items-center gap-4'>
                        <Link to='https://facebook.com' target='_blank'><IoLogoFacebook className='text-2xl xs:text-lg text-orange-600' /></Link>
                        <Link to='https://twitter.com' target='_blank'><IoLogoTwitter className='text-2xl xs:text-lg text-orange-600' /></Link>
                        <Link to='https://instagram.com' target='_blank'><IoLogoInstagram className='text-2xl xs:text-lg text-orange-600' /></Link>
                        <Link to='https://linkedin.com' target='_blank'><IoLogoLinkedin className='text-2xl xs:text-lg text-orange-600' /></Link>
                    </div>
                </div>
                <div className='flex items-center xs:justify-center flex-wrap gap-3 xs:gap-2'>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Apple</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Apple Watch</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Apple TV</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>iMac</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Camera</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Game Controller</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>HD</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>HTC</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>HTC One</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>iPhone</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>iPod</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>iPad</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Mac</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Lenovo</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Mouse</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Samsung</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Smart TV</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Tablet</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Samsung Galaxy M11</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Samsung Galaxy S10</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Samsung Galaxy S10+</p>
                    <p className='px-4 xs:px-2 border-r xs:border-gray-600 cursor-pointer hover:text-black text-gray-700'>Wireless Speaker</p>
                </div>
            </div>
            <hr />
            <footer className='px-[80px] xs:px-4 sm:px-10 max-w-[1920px] mx-auto py-4 flex justify-between items-center xs:flex-col'>
                <p className='text-sm xs:text-xs'>Copyright 2022 &copy; Gadget Stock All right reserved</p>
                <img className='h-6 xs:w-full' src={payment} alt="" />
            </footer>
        </div>
    );
};

export default Footer;