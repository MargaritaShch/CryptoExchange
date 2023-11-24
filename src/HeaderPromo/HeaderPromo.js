import React from "react";
import styles from './HeaderPromo.module.css';
import arrow from './ImgHeaderPromo/arrow.png'

function HeaderPromo(){
    return(
        <div className={styles.containerPromo}>
         Buy, sell, & swap your favorite asset. No KYC. No added fees. Decentralized.
            <img src ={arrow} alt ='arrow' className={styles.arrow}/>
        </div>
    )
}

export default HeaderPromo;