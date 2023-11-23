import React from "react";
import './HeaderPromo.css';
import arrow from './ImgHeaderPromo/arrow.png'

function HeaderPromo(){
    return(
        <div className="container-promo">
            {/* <img/> */}
         Buy, sell, & swap your favorite asset. No KYC. No added fees. Decentralized.
            <img src ={arrow} alt ='arrow' className="arrow"/>
        </div>
    )
}

export default HeaderPromo;