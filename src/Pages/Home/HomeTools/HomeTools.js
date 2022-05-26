import React from 'react';
import Tool from '../../Tools/Tool';
import Tools from '../../Tools/Tools';
import useCommonTools from '../../Tools/useCommonTools';

const HomeTools = () => {
    const [tools, useTools] = useCommonTools()
    return (
        <div>
            <h1 className='text-center font-3xl font-bold my-6 text-3xl font-serif'>Tool</h1>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-2">
                {
                    tools.slice(0, 6).reverse().map(tool => <Tool
                        key={tool.id}
                        tool={tool}>

                    </Tool>)
                }
            </div>

        </div>

    );
};

export default HomeTools;