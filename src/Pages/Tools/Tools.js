import React, { useEffect, useState } from 'react';
import Tool from './Tool';


const Tools = () => {
    const [tools, setTools] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    return (
        <div>
            <div>
                <div class="grid grid-cols-4 gap-4">
                    {
                        tools.map(tool => <Tool
                            key={tool.id}
                            tool={tool}>
                            console.log(tool)
                        </Tool>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Tools;