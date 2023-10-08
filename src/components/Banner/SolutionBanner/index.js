import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerHomeStyle from './bannerHome.module.scss'
import OclockBanner from '../OclockBanner';

const HomeBanner = () => {
    return (
        <div className={bannerHomeStyle.backgroundImage}>
            Solutions
        </div>
    )
}

export default HomeBanner