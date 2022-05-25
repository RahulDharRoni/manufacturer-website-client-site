import React, { useEffect, useState } from 'react';

const useCommonReviews = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return [reviews, setReviews]
};

export default useCommonReviews;