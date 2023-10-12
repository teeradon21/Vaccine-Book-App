import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import {Rating, Typography} from "@mui/material"

export default function ProductCard ({hospitalName, imgSrc, score, onRating} :{hospitalName:string, imgSrc:string, score?:number, onRating?:Function}) {
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Hospital Picture"
                fill={true}
                className="object-cover rounded-t-lg" />
            </div>
            <div className='w-full h-[10%] p-[5%] font-serif'>
                {hospitalName} 
            </div>
            {
                onRating? <Rating className='w-full m-[5%]' value={score} 
                onClick={(e)=>e.stopPropagation()}
                onChange={(event, newValue) => {
                    event.preventDefault()
                    onRating(hospitalName, newValue)
                  }} /> : ''
            }
            
        </InteractiveCard>
    )
}