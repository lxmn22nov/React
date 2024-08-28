import React from 'react'

function Weapon() {
    const arms = [
        {image: 'https://img.freepik.com/free-vector/bullets-different-calibers-stand-row_107791-12085.jpg?t=st=1724840711~exp=1724844311~hmac=402167c6243939dc1cb703739bd676717716503b26a668402c806a1eb2c917cc&w=1480', name: 'Ammunition', description: 'Ammunition consists of bullets, shells, or projectiles used in firearms and weapons, designed to inflict damage or incapacitate targets.', inStock: true},
        {image: 'https://img.freepik.com/free-photo/close-up-gun-black-background_23-2150803746.jpg?t=st=1724839050~exp=1724842650~hmac=93e9baa135fca5dc721a889476c779ea2d8be63e26d0f038292baf1e4fd76500&w=1060', name: 'Pistol', description: 'Pistols are small, handheld firearms designed for short-range shooting, offering portability and ease of use for self-defense.', inStock: false},
        {image: 'https://img.freepik.com/free-photo/close-up-ak-47-showcased-black-background_23-2150803626.jpg?t=st=1724839360~exp=1724842960~hmac=66e15e2e01cc8a0dc58d274e46edd1681e71e0487fa0844d26d786b52cb07020&w=1480', name: 'Assault Rifles', description: 'Assault rifles are military firearms designed for rapid fire, featuring selective fire options and capable of firing intermediate cartridges.', inStock: false}
    ]

    return (
        <div className='w-full h-screen flex items-center justify-center gap-10 bg-zinc-200'>
            {/* absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] */}
            {arms.map((weapon, index1) => (
                <div key={index1} className='w-60 bg-zinc-100  rounded-md overflow-hidden'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover' src= {weapon.image} />
                </div>
                <div className='w-full px-3 py-3'>
                    <h1>{weapon.name}</h1>
                    <p className='text-xs mt-2'>{weapon.description}</p>
                    <button className='px-3 py-2 bg-blue-500 text-xs rounded text-zinc-100 mt-3 mr-px'>Know More</button>
                    <button className={`px-3 py-2 ${weapon.inStock ? "bg-green-600" : "bg-red-600"} text-xs rounded text-zinc-100 p-0.5 mt-3`}>
                        {weapon.inStock ? "In Stock" : "Out of Stock"}
                    </button>
                </div>
            </div>
            ))}
        </div>
    )
}
export default Weapon;