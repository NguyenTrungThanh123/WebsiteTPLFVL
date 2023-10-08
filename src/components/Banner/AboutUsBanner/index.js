import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerGeneral from '../banner.module.scss';
import bannerStyle from './BannerAboutUs.module.scss';


const BannerAboutUs = () => {
    return (
        <div className={bannerStyle.backgroundImage}>
            <div className={bannerGeneral.titlePage}>
                <h1>ABOUT US</h1>
            </div>

        </div>
    )
}

export default BannerAboutUs