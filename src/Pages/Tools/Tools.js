import React from 'react';
import Tool from './Tool';
import useCommonTools from './useCommonTools';


const Tools = () => {
    const [tools, useTools] = useCommonTools()

    return (
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
    );
};

export default Tools;