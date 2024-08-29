
// Here, we are passing object to the useState Hook.


import React, { useState } from 'react'

function UseState03() {
    const [value, setValue] = useState({name: 'Damascus', professtion: 'General of Spatan Army'});

    return (
        <div className='p-3'>
            <h1>{value}</h1>
        </div>
    )
}

export default UseState03