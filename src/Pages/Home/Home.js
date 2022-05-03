import React from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from './Banner/Banner';
import Inventory from './Inventory/Inventory';

const Home = () => {

    const { user } = useAuth();

    console.log(user);

    return (
        <div className=''>
            <Banner />
            <Inventory />
        </div>
    );
};

export default Home;