import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [showAllOrder, setShowAllOrder] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setShowAllOrder(data))
    }, [])
    return [showAllOrder]
};

export default useOrders;