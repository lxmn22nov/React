// Here, we are passing object to the useState Hook.
// Now, In case of object data in useState hook, if we want to change the the state by clicking button using setValue function
// we have pass the object data again to the setValue function, using spread operator. 
// Now, still we can see the state of the values are still not changing, to change the particular variable data, we have
// to pass that variable different value again. 

import React, { useState } from 'react'

function UseState03() {
    const [value, setValue] = useState({name: 'Maximus Decimus Meridius', professtion: 'General of Spartan Army', isSparta: true});

    return (
        <div className='p-3'>
            <div className='w-full h-1/2 p-3 flex flex-col items-center justify-center'>
                <div className='w-1/4 p-3 flex flex-col justify-center bg-zinc-300 rounded-lg'>
                    <h1>Name: {value.name}</h1>
                    <h2>Rank: {value.professtion}</h2>
                    <h3>Can we call him sparta: {value.isSparta.toString()}</h3>
                    <button onClick={() => setValue({...value, isSparta: !value.isSparta})} className='px-3 py-2 mt-3 bg-blue-600 text-zinc-100 rounded-lg'>
                        Change
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UseState03