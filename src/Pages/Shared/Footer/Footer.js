import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import payment from '../../../images/payment.png'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <div className='mt-10'>
            <div className='px-[80px] max-w-[1920px] mx-auto py-10'>
                <div className='mb-4 flex justify-between items-center'>
                    <Link to='/'>
                        <div className='flex items-center p'>
                            <img src={logo} alt="" className="w-16 h-16" />
                            <h1 className='text-2xl'>Gadget Stock</h1>
                        </div>
                    </Link>
                    <div className='flex items-center gap-4'>
                        <Link to='https://facebook.com' target='_blank'><IoLogoFacebook className='text-2xl text-orange-600' /></Link>
                        <Link to='https://twitter.com' target='_blank'><IoLogoTwitter className='text-2xl text-orange-600' /></Link>
                        <Link to='https://instagram.com' target='_blank'><IoLogoInstagram className='text-2xl text-orange-600' /></Link>
                        <Link to='https://linkedin.com' target='_blank'><IoLogoLinkedin className='text-2xl text-orange-600' /></Link>
                    </div>
                </div>
                <div className='flex items-center flex-wrap gap-3'>
                    <p className='px-4 border-r'>Apple</p>
                    <p className='px-4 border-r'>Apple Watch</p>
                    <p className='px-4 border-r'>Apple TV</p>
                    <p className='px-4 border-r'>iMac</p>
                    <p className='px-4 border-r'>Camera</p>
                    <p className='px-4 border-r'>Game Controller</p>
                    <p className='px-4 border-r'>HD</p>
                    <p className='px-4 border-r'>HTC</p>
                    <p className='px-4 border-r'>HTC One</p>
                    <p className='px-4 border-r'>iPhone</p>
                    <p className='px-4 border-r'>iPod</p>
                    <p className='px-4 border-r'>iPad</p>
                    <p className='px-4 border-r'>Mac</p>
                    <p className='px-4 border-r'>Lenovo</p>
                    <p className='px-4 border-r'>Mouse</p>
                    <p className='px-4 border-r'>Samsung</p>
                    <p className='px-4 border-r'>Smart TV</p>
                    <p className='px-4 border-r'>Tablet</p>
                    <p className='px-4 border-r'>Samsung Galaxy M11</p>
                    <p className='px-4 border-r'>Samsung Galaxy S10</p>
                    <p className='px-4 border-r'>Samsung Galaxy S10+</p>
                    <p className='px-4 border-r'>Wireless Speaker</p>
                </div>
            </div>
            <hr />
            <footer className='px-[80px] max-w-[1920px] mx-auto py-4 flex justify-between items-center'>
                <p className='text-sm'>Copyright 2022 &copy; Gadget Stock All right reserved</p>
                <img className=' h-6' src={payment} alt="" />
            </footer>
        </div>
    );
};

export default Footer;