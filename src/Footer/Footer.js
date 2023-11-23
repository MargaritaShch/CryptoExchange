import React from "react";
import './Footer.css'

function Footer(){
    return (
        <div className='container-footer'>
            <div>
                <h3>COINAPI.IO</h3>
                <ul className="footer-menu">
                    <li>Methodology</li>
                    <li>Support</li>
                    <li>Our API</li>
                    <li>Rate Comparison</li>
                    <li>Careers</li>
                </ul>
            </div>

            <div className="legals">
                <div>
                <h3>LEGALS</h3>
                <ul className="footer-menu2">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>

                <div className="disclamer">
                <h3>DISCLAIMER</h3>
                <p>Neither ShapeShift AG nor CoinCap are in any way associated with CoinMarketCap, LLC or any of its goods and services.</p>
                </div>
            </div>

            <div>
            <h3>FOLLOW US</h3>
                <ul className="footer-menu">
                    <li><img alt='twitter'/></li>
                    <li><img alt='facebook'/></li>
                </ul>
            </div>

            <div>
            <h3>FCOINCAP APP AVAILABLE ON</h3>
                <ul className="footer-menu">
                    <li><img alt='google-pay'/></li>
                    <li><img alt='app-store'/></li>
                </ul>
            </div> 
        </div>
      
    )
}

export default Footer;