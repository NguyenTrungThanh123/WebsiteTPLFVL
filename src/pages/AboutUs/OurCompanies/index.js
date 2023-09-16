import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import CompaniesStyle from './ourcompanies.module.scss'
import WhoWeAre from "../../../Image/AboutUs/Our_Companies/WhoWeAre_EN_updated20230704.jpg"
import fvlOffice1 from "../../../Image/AboutUs/Our_Companies/FVL-Office.jpg"
import fvlOffice2 from "../../../Image/AboutUs/Our_Companies/FVL-Office2.jpg"
import { Introduction } from "../../../components/EmbeddedGoogleDriveFile/DriveFilePage"
const OurCompanies = () => {

    return (
        <>
            <div className={home.content}>
                <div className='container'>
                    <div className={`${CompaniesStyle.companyContent} ${home.titleContent}`}>
                        <h2>Who We Are</h2>
                        <div className={home.bannerHome}>
                            <img src={WhoWeAre} alt="Who We Are" />
                        </div>
                    </div>
                    <div className={`${CompaniesStyle.companyContent} ${home.titleContent}`}>
                        <h2>Introduction</h2>
                        <div className="container embed-responsive embed-responsive-21by9">
                            <Introduction />
                        </div>
                    </div>
                    <div className={`${CompaniesStyle.companyContent} ${home.titleContent}`}>
                        <h2>Our Offices</h2>
                        <div className={home.bannerHome}>
                            <img src={fvlOffice1} alt="fvlOffice1" />
                            <img src={fvlOffice2} alt="fvlOffice2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurCompanies;

