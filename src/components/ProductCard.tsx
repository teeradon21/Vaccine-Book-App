import Image from "next/image";
import styles from "./productcard.module.css"

export default function ProductCard () {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/pfizer.jpeg'}
                alt="Pfizer Picture"
                fill={true}
                objectFit="cover" />
            </div>
            <div className={styles.cardtext}>
                <h3>Pfizer</h3>
                <p className={styles.text}>วัคซีนไฟเซอร์ (Pfizer Vaccine Covid) หรือวัคซีนป้องกันโควิด-19 จากบริษัทไฟเซอร์นั้น เป็นวัคซีนชนิด mRNA 
                    ซึ่งมีประสิทธิผลป้องกันความรุนแรงของการติดเชื้อในทุกกลุ่มอายุได้ตั้งแต่ 92.9 - 95.1%</p>
                </div>
        </div>
    )
}