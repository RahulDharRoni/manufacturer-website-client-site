import React from 'react';
import Tool from './Tool';
import useCommonTools from './useCommonTools';


const Tools = () => {
    const [tools, useTools] = useCommonTools()

    return (
        <div>
            <div class="grid grid-cols-4 gap-2 mx-3 my-10">
                {
                    tools.map(tool => <Tool
                        key={tool.id}
                        tool={tool}>
                        console.log(tool)
                    </Tool>)
                }
            </div>


        </div>
    );
};

export default Tools;