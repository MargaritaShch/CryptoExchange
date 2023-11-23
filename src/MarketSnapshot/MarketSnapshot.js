import React from "react";
import styles from './MarketSnapshot.module.css';

function MarketSnapshot(){
    return(
        <div className={styles.cantainerMarket}>
            <ul className={styles.market}>
                <li className={styles.li}>MARKET CAP<br/><p className={styles.p}>$1.38T</p></li>
                <li className={styles.li}>EXCHANGE VOL<br/><p className={styles.p}>$41.66B</p></li>
                <li className={styles.li}>ASSETS<br/><p className={styles.p}>2,296</p></li>
                <li className={styles.li}>EXCHANGES<br/><p className={styles.p}>73</p></li>
                <li className={styles.li}>MARKETS9 <br/><p className={styles.p}>354</p></li>
                <li className={styles.li}>BTC DOM INDEX<br/><p className={styles.p}>51.6%</p></li>
            </ul>
        </div>
    )
}

export default MarketSnapshot;