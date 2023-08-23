import Image from 'next/image'
import styles from './page.module.css'
import Banner from '@/components/Banner'
import ProductCard from '@/components/ProductCard'

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <div style={{margin:"20px"}}>
        <ProductCard/>
      </div>
    </main>
  )
}
