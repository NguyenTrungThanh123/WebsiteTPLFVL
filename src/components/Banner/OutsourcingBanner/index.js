import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bannerHomeStyle from './bannerHome.module.scss'

const HomeBanner = () => {
    return (
        <div className={bannerHomeStyle.backgroundImage}>
            Outsourcing
        </div>
    )
}

export default HomeBanner