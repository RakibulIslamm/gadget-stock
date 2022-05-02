import React from 'react';
import useAuth from '../../hooks/useAuth';
import Banner from './Banner/Banner';

const Home = () => {

    const { user, googleSignIn } = useAuth();

    console.log(user);

    return (
        <div className='pt-20'>
            <Banner />
            <button onClick={googleSignIn}>Google Signin</button>
        </div>
    );
};

export default Home;