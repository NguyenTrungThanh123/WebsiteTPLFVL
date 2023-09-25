import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bnAb from './BannerAboutUs.module.scss'
import bannerImg from '../../../Image/AboutUs/Banner/FVL-Office.jpg'

const BannerAboutUs = () => {
    return (
        <div className={bnAb.bnAbU}>
            <img src={bannerImg} alt='' />
        </div>
    )
}

export default BannerAboutUs