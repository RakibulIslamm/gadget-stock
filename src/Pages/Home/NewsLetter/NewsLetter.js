import React from 'react';

const NewsLetter = () => {
    return (
        <div className=' bg-orange-100 py-5 mt-10'>
            <div className="px-[80px] xs:px-4 sm:px-10 md:px-10 flex justify-between items-center xs:flex-col">
                <div className="xl:w-1/2 xs:w-full sm:w-full md:mb-14 xl:mb-0 relative flex items-center justify-center">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" className="xl:w-full lg:w-1/2 w-full " />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28 ">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-gray-600 text-center xl:text-left">Subscribe Our newsletter for future update</p>
                    <div className="flex items-stretch mt-6">
                        <input className="bg-gray-200 focus:bg-white rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;