"use client"
import { Icons } from '@/components/icons';
import React, { useState } from 'react';

function PlayerPage() {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div className='flex min-h-full items-center text-yellow-light'>
            <audio src="/forest.mp3" preload="metadata"></audio>
            <button className='flex items-center text-yellow-light'><Icons.stepBack className="h-10 w-10 hover:text-yellow"/></button>
            <button className='flex text-yellow px-6' onClick={togglePlayPause}>
                {isPlaying 
                ? <Icons.pauseCircle className="h-12 w-12 "/> 
                : <Icons.playCircle className="h-12 w-12 "/>  }
            </button>
            <button className='flex items-center text-yellow-light'> <Icons.stepForward className="h-10 w-10 hover:text-yellow "/> </button>

            {/* current time */}
            <div>0:00</div>

            {/* progress bar */}
            <div>
                <input type="range" className='w-full h-2 mb-6 bg-yellow rounded-lg appearance-none cursor-pointer '/>
            </div>

            {/* duration */}
            <div>2:30</div>
        </div>
    );
}

export default PlayerPage;