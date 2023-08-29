import Image from "next/image";
// import styles from "./productcard.module.css"

export default function ProductCard ({hospitalName, imgSrc} :{hospitalName:string, imgSrc:string}) {
    return (
        <div className="w-1/4 h-80 rounded-lg shadow-lg">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt="Hospital Picture"
                fill={true}
                className="object-cover rounded-t-lg" />
            </div>
            <div className='w-full h-[30%] p-[5%] font-serif'>
                {hospitalName} 
            </div>
        </div>
    )
}