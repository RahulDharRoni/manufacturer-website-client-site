import React, { useEffect, useState } from 'react';

const useCommonReviews = () => {
    const [reviews, setReviews] = useState()
    useEffect(() => {
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReviews(data)
            })
    }, [])
    return [reviews, setReviews]
};

export default useCommonReviews;