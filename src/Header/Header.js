import React from "react";
import styles from  './Header.module.css';
import search from './ImgHeader/search.png'
import logo from './ImgHeader/logo.svg'
import settings from './ImgHeader/settings.png'
import HeaderPromo from "../HeaderPromo/HeaderPromo";

function Header(){
    return(
    <div>
        <HeaderPromo/>
        <div className={styles.containerHeader}>
            <div className={styles.block1}>
                <ul className={styles.menuLeft}>
                    <li>Coins</li>
                    <li>Exchange</li>
                    <li>Swap</li>
                </ul>
            </div>

            <div className={styles.block2}>
                <img src={logo} alt='logo' className={styles.logo}/>
            </div>

            <div className={styles.block3}>
                <ul className={styles.menuRight}>
                    <li>USD</li>
                    <li>English</li>
                    <li><img src={search} alt='search' className={styles.search}/></li>
                    <li><img src={settings} alt='settings' className={styles.settings}/></li>
                </ul> 
            </div>
        </div>
    </div>
    )
}

export default Header;