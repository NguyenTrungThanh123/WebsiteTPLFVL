import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Hue Nguyen.jpg'
import JingHimImg from '../../../Image/AboutUs/Our_LeadershipTeam/Jing Him.jpg'
import ManiImg from '../../../Image/AboutUs/Our_LeadershipTeam/Mani.jpg'
import MichelleNgoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Michelle Ngo.jpg'
import SenNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Sen Nguyen.jpg'
import TungDoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Tung Do.jpg'
import VinNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Vin Nguyen.jpg'
import LeadershipStyle from './OurLeadership.module.scss'
const OurLeadership = () => {
    return (
        <>
            <div>
                <div className={LeadershipStyle.avatar}>
                    <img src={MichelleNgoImg} alt='Michelle Ngo' />
                    <div className={LeadershipStyle.name}>Michelle Ngo</div>
                    <div className={LeadershipStyle.jobTitle}>Chief Executive Officer</div>
                </div>
                <div className={LeadershipStyle.avatar}>
                    <img src={JingHimImg} alt='Jing Him' />
                    <div className={LeadershipStyle.name}>Jing Him</div>
                    <div className={LeadershipStyle.jobTitle}>Operation Director</div>
                </div>
                <div className={LeadershipStyle.avatar}>
                    <img src={ManiImg} alt='Mani Chinna' />
                    <div className={LeadershipStyle.name}>Mani Chinna</div>
                    <div className={LeadershipStyle.jobTitle}>Senior Operation Manager</div>
                </div>
                <div className={LeadershipStyle.avatar}>
                    <img src={SenNguyenImg} alt='Lianna Nguyen' />
                    <div className={LeadershipStyle.name}>Lianna Nguyen</div>
                    <div className={LeadershipStyle.jobTitle}>Operation Manager</div>
                </div>
                <div className={LeadershipStyle.avatar}>
                    <img src={VinNguyenImg} alt='Vin Nguyen' />
                    <div className={LeadershipStyle.name}>Vin Nguyen</div>
                    <div className={LeadershipStyle.jobTitle}>IT Manager</div>
                </div>
                <div className={LeadershipStyle.avatar}>
                    <img src={HueNguyenImg} alt='Hue Nguyen' />
                    <div className={LeadershipStyle.name}>Hue Nguyen</div>
                    <div className={LeadershipStyle.jobTitle}>Accountant Manager</div>
                </div>
                <div className={LeadershipStyle.avatar}>
                    <img src={TungDoImg} alt='Tung Do' />
                    <div className={LeadershipStyle.name}>Tung Do</div>
                    <div className={LeadershipStyle.jobTitle}>Senior Team Leader</div>
                </div>
            </div>
        </>
    )
}

export default OurLeadership;