import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerStyle from './BannerAboutUs.module.scss'


const BannerAboutUs = () => {
    return (
        <div className={bannerStyle.backgroundImage}>
            About Us
        </div>
    )
}

export default BannerAboutUs