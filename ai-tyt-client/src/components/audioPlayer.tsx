"use client"
import { Icons } from '@/components/icons';
import React, { useState, useRef, useEffect } from 'react';
import {cn} from "@/app/utils";
import styles from './audioPlayer.module.css';

interface AudioPlayerProps {
    style?: string
}

function AudioPlayer({style}: AudioPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef<HTMLAudioElement>(null);
    const progressBar = useRef<HTMLInputElement>(null);
    const animationRef = useRef(0);

    useEffect(() => {
        if (audioPlayer.current && progressBar.current) {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
            progressBar.current.max = seconds.toString();
        }

    }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState])

    const caluculateTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs & 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        
        if (audioPlayer.current) {
            if (!prevValue) {
                audioPlayer.current.play();
                animationRef.current = requestAnimationFrame(playAudio);
            }
            else {
                audioPlayer.current.pause();
                cancelAnimationFrame(animationRef.current);
            }
        }
    }

    const handleProgressBarChange = () => {
        if (progressBar.current && audioPlayer.current) {
            audioPlayer.current.currentTime = Number(progressBar.current.value);
            updateCurrentTime();
        }
    }

    const playAudio = () => {
        if (progressBar.current && audioPlayer.current) {
            progressBar.current.value = audioPlayer.current.currentTime.toString();
            updateCurrentTime();
            animationRef.current = requestAnimationFrame(playAudio);
        }

        
    }

    const updateCurrentTime = () => {
        if (progressBar.current) {
            const progressBarValue = Number(progressBar.current.value);
            progressBar.current.style.setProperty('--seek-before-width', `${progressBarValue / duration * 100}%`);
            setCurrentTime(progressBarValue);
        }
    }

    return (
        <div className={cn(style, 'flex flex-col justify-center items-center ')}>
            <audio 
            src="/forest.mp3" 
            ref={audioPlayer}  
            preload="metadata">
                Your browser does not support the
                <code>audio</code> element.
            </audio>

            <div className='flex mb-10'>
                <button className='flex items-center text-yellow-light'>
                    <Icons.skipBack className="h-10 w-10 hover:text-yellow"/>
                </button>
                <button className='flex text-yellow px-8' onClick={togglePlayPause}>
                    {isPlaying 
                    ? <Icons.pauseCircle className="h-12 w-12 "/> 
                    : <Icons.playCircle className="h-12 w-12 "/>  }
                </button>
                <button className='flex items-center text-yellow-light'>
                    <Icons.skipForward className="h-10 w-10 hover:text-yellow "/>
                </button>
            </div>
           
           <div className="flex w-full justify-center items-center ">
                <div className='text-xs'>{caluculateTime(currentTime)}</div>
                <input 
                type="range" 
                defaultValue="0" 
                ref={progressBar} 
                onChange={handleProgressBarChange}
                className={styles.progressBar}/>
                <div className='text-xs'>{(duration && !isNaN(duration)) && caluculateTime(duration)}</div>
           </div>
            
        </div>
    );
}

export default AudioPlayer;