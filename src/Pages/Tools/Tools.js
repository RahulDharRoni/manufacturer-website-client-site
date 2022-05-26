import React from 'react';
import Tool from './Tool';
import useCommonTools from './useCommonTools';


const Tools = () => {
    const [tools, useTools] = useCommonTools()

    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 my-10 bg-gray-200 p-10">
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}>
                    </Tool>)
                }
            </div>


        </div>
    );
};

export default Tools;