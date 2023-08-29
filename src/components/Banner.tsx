import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'} alt='cover' fill={true} objectFit='cover' priority/>
            <div className={styles.bannerText}>
                <h1 className='text-5xl font-semibold font-serif'>VacQ</h1>
                <h3 className='text-xl font-serif'>Online Vaccine Booking Application</h3>
            </div>
        </div>
    )
}