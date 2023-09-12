'use client'
import {useState} from 'react'
import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner () {
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.webp','/img/cover4.jpg',]
    const [index, setIndex] = useState(0)
    return (
        <div className={styles.banner} onClick={()=>setIndex(index+1)}>
            <Image src={covers[index%4]} alt='cover' fill={true} objectFit='cover' priority/>
            <div className={styles.bannerText}>
                <h1 className='text-5xl font-semibold font-serif'>VacQ</h1>
                <h3 className='text-xl font-serif'>Online Vaccine Booking Application</h3>
            </div>
        </div>
    )
}
