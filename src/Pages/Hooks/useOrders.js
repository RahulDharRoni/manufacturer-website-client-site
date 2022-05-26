import React, { useEffect, useState } from 'react';

const useOrders = () => {
    const [showAllOrder, setShowAllOrder] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setShowAllOrder(data))
    }, [])
    return [showAllOrder]
};

export default useOrders;