import React from 'react'

function Card() {

    const data = [
    {image: 'https://images.unsplash.com/photo-1718313900144-ae5f5a640f4b?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Military Tank', description: 'Military tanks are armored combat vehicles equipped with powerful guns, designed for frontline combat and ground support.'},
    {image: 'https://images.unsplash.com/photo-1698658546066-94f4f951246c?q=80&w=2538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Fighter Jet', description: 'Fighter jets are fast, agile military aircraft designed for air combat, equipped with advanced weaponry and radar systems.'},
    {image: 'https://images.unsplash.com/photo-1508530786855-dfea35260b8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Aircraft Carrier', description: 'Aircraft carriers are large naval ships that serve as floating airbases, launching and recovering aircraft in combat operations.'}
  ]

    return (
        <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            {/* absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] */}
            {data.map((element, index) => (
                <div key={index} className='w-60 bg-zinc-100  rounded-md overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover' src= {element.image} />
                </div>
                <div className='w-full px-4 py-4'>
                    <h1>{element.name}</h1>
                    <p className='text-xs mt-2'>{element.description}</p>
                    <button className='px-4 py-2 bg-blue-500 text-xs rounded text-zinc-100 mt-3'>Know More</button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Card;