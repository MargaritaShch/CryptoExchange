import React from "react";
import './Header.css';
import search from './ImgHeader/search.png'
import logo from './ImgHeader/logo.svg'
import settings from './ImgHeader/settings.png'

function Header(){
    return(
        <div className="container-header">
            <div className="block1">
                <ul className="menu-left">
                    <li>Coins</li>
                    <li>Exchange</li>
                    <li>Swap</li>
                </ul>
            </div>

            <div className="block2">
                <img src={logo} alt='logo' className="logo"/>
            </div>

            <div className="block3">
                <ul className="menu-right">
                    <li>USD</li>
                    <li>English</li>
                    <li><img src={search} alt='search' className="search"/></li>
                    <li><img src={settings} alt='settings' className="settings"/></li>
                </ul> 
            </div>
        </div>
    )
}

export default Header;