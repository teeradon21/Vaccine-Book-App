'use client'
import { useWindowListener } from "@/hooks/useWindowListener"
import { VideoPlayer } from "./VideoPlayer"
import { useState } from "react"

export function PromoteCard(){
    const [playing, setPlaying] = useState(true)
    useWindowListener('contextmenu', (e)=>e.preventDefault())

    return(
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row"> 
        <VideoPlayer isPlaying={playing} vdoSrc="/video/getvaccine.mp4"></VideoPlayer>
        <div className="m-5">Get Vaccine
        <button
        className='block rounded-md bg-teal-400 px-3 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-teal-500 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        onClick={()=>setPlaying(!playing)}> 
        {playing? 'Pause':'Play'}
        </button>
        </div>
        </div>
    )
}