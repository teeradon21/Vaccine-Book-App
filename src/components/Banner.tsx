'use client'
import {useState} from 'react'
import styles from './banner.module.css'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Banner () {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.webp','/img/cover4.jpg',]
    const [index, setIndex] = useState(0)
    const router = useRouter()
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} alt='cover' fill={true} objectFit='cover' priority/>
            <div className={styles.bannerText}>
                <h1 className='text-5xl font-semibold font-serif'>VacQ</h1>
                <h3 className='text-xl font-serif'>Online Vaccine Booking Application</h3>
            </div>
            <button className='bg-white text-cyan-600 border boarder-cyan-600 font-semibold 
            p-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent' 
            onClick={(e)=>{e.stopPropagation(); router.push('/hospital')}}>
                Select Hospital
            </button>
        </div>
    )
}
