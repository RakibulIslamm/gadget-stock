import React, { useEffect, useState } from 'react';
import Single from './Single/Single';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    return (
        <div>
            <Single />
        </div>
    );
};

export default ManageInventory;