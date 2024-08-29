// Created two buttons, implemented useState Hook.
// Here, we are passing Integer value to the useState Hook.
// declared a value 0 to useState, now with the buttons, I can increase/decrease the value, using setValue(function).

import React, { useState } from 'react'

function UseState02() {
    const [value, setValue] = useState(0);

    return (
        <div className='w-full h-1/2 p-3 flex flex-col items-center justify-center'>
            <div className='w-1/5 p-3 flex flex-col items-center justify-center bg-zinc-300 rounded-lg'>
                <h1>{value}</h1>
                <div className='w-1/2 p-1 flex items-center justify-center'>
                    <button onClick={() => setValue(previous => previous - 1)} className='px-3 py-2 mt-3 mr-4 bg-blue-600 rounded text-zinc-100'>
                        -
                    </button>
                    <button onClick={() => setValue(previous => previous + 1)} className='px-3 py-2 mt-3 bg-blue-600 rounded text-zinc-100'>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseState02