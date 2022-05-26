import React, { useEffect, useState } from 'react';

const useCommonTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-anchorage-69503.herokuapp.com/parts')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tools, setTools]
};

export default useCommonTools;

