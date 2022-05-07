import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    let { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ScaleLoader color='orange' height={25} speedMultiplier={2} />
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;