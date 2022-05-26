import React from 'react';
import Tool from '../../Tools/Tool';
import useCommonTools from '../../Tools/useCommonTools';

const HomeTools = () => {
    const [tools] = useCommonTools()
    return (
        <div>
            <h1 className='text-center font-3xl font-bold my-6 text-3xl font-serif'>Tool</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
                {
                    tools.slice(0, 6).reverse().map(tool => <Tool
                        key={tool._id}
                        tool={tool}>

                    </Tool>)
                }
            </div>

        </div>

    );
};

export default HomeTools;