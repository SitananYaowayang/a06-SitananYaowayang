import styles from './banner.module.css';
import Image from 'next/image';
export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'/img/banner1.jpg'} 
                alt = 'banner1'
                fill= { true }
                objectFit='cover'/>

                <div className={styles.bannerText}>
                    <h1 className="text-5xl font-bold font-serif drop-shadow-lg text-white">where every event finds its venue</h1>
                    <h3 className="text-2xl font-light font-poppins mt-2 text-white">Book the perfect space for your wedding, conference, or special event.</h3>
                </div>
                
        </div>
    );
}