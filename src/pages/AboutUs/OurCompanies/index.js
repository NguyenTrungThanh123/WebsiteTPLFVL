import CompaniesStyle from './ourcompanies.module.scss'
import WhoWeAre from "../../../Image/AboutUs/Our_Companies/WhoWeAre_EN_updated20230704.jpg"
import fvlOffice1 from "../../../Image/AboutUs/Our_Companies/FVL-Office.jpg"
import fvlOffice2 from "../../../Image/AboutUs/Our_Companies/FVL-Office2.jpg"
import {Introduction} from "../../../components/EmbeddedGoogleDriveFile/DriveFilePage"
const OurCompanies = () => { 
    
    return (
        <>
            <div className="">
                <div className={CompaniesStyle.title}>
                    Who We Are
                </div>
                <img src={WhoWeAre} alt="Who We Are" />
            </div>
            <div className="">
                <div className={CompaniesStyle.title}>introduction</div>
                <div><Introduction /></div>
            </div>
            <div className="">
                <div className={CompaniesStyle.title}>Our Offices</div>
                <img src={fvlOffice1} alt="fvlOffice1" />
                <img src={fvlOffice2} alt="fvlOffice2" />

            </div>
        </>
    )
}

export default OurCompanies;

