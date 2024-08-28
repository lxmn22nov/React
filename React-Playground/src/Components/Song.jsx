import React from 'react'

function Song() {

    const data = [
        {songName: 'Sunflower', genre: 'Genre: Pop', artist: 'Artist: Post Malone'},
        {songName: 'Haan ke Haan', genre: 'Genre: Romantic', artist: 'Artist: Monali Thakur'},
        {songName: 'One Kiss', genre: 'Genre: Pop', artist: 'Artist: Dua Lipa'}
    ]

    return (
        <div className='w-full h-screen bg-zinc-200 flex flex-col gap-6 justify-center items-center'>
            {data.map((element, index) => (
                <div key={index} className='w-1/5 px-3 py-3 bg-zinc-100 rounded'>
                <h3 className='font-semibold text-xl'>{element.songName}</h3>
                <p className='text-sm mt-2'>{element.genre}</p>
                <p className='text-sm mt-2'>{element.artist}</p>
                <button onClick={() => {alert("Download Karu?")}} className='px-2 py-1 bg-blue-500 text-xs font-semibold text-zinc-100 rounded mt-3'>
                    Download
                </button>
                <button onClick={() => {alert("Lyrics Chahiye?")}} className='px-3 py-1 bg-green-600 text-xs font-semibold text-zinc-100 justify-between rounded mt-3 ml-4'>
                    Lyrics
                </button>
            </div>
            ))}
        </div>
    )
}

export default Song