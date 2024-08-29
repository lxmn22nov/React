// Created an button, implemented useState Hook.
// Here, we are passing bool value to the useState Hook. 
// declared a value false to useState, now with the help of button, I can change the value, using setValue(function).

import React, { useState } from 'react'

function UseState01() {
    const [value, setValue] = useState(false);

    return (
        <div className='w-full h-1/2 p-3 flex flex-col items-center justify-center'>
            <div className='w-1/5 p-3 flex flex-col items-center justify-center bg-zinc-300 rounded-lg'>
                <h1 className='text-xl'>{value.toString()}</h1>
                <button onClick={() => setValue(!value)} className='px-3 py-2 mt-3 bg-blue-600 rounded-lg text-zinc-100'>
                    Change Value
                </button>
            </div>
        </div>
    )
}

export default UseState01