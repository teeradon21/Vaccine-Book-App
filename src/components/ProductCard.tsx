import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
// import styles from "./productcard.module.css"

export default function ProductCard ({hospitalName, imgSrc} :{hospitalName:string, imgSrc:string}) {
    return (
        <InteractiveCard>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Hospital Picture"
                fill={true}
                className="object-cover rounded-t-lg" />
            </div>
            <div className='w-full h-[30%] p-[5%] font-serif'>
                {hospitalName} 
            </div>
        </InteractiveCard>
    )
}