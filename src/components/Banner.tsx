import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/cover.jpg'} alt='cover' fill={true} objectFit='cover' priority/>
            <div className={styles.bannerText}>
                <h1>ขอเชิญรับบริการฉีดวัคซีน COVID-19</h1>
                <h3>ลงทะเบียนจองคิวผ่านระบบออนไลน์</h3>
            </div>
        </div>
    )
}