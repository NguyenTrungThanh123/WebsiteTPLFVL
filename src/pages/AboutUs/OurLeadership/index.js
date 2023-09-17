import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Hue Nguyen.jpg'
import JingHimImg from '../../../Image/AboutUs/Our_LeadershipTeam/Jing Him.jpg'
import ManiImg from '../../../Image/AboutUs/Our_LeadershipTeam/Mani.jpg'
import MichelleNgoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Michelle Ngo.jpg'
import SenNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Sen Nguyen.jpg'
import TungDoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Tung Do.jpg'
import VinNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Vin Nguyen.jpg'
import LeadershipStyle from './OurLeadership.module.scss'
const OurLeadership = () => {
    
    const leadershipList = [
        { url : MichelleNgoImg, name : 'Michelle Ngo', jobTitle : 'Chief Executive Officer'},
        { url : JingHimImg, name : 'Jing Him', jobTitle : 'Operation Director'},
        { url : ManiImg, name : 'Mani Chinna', jobTitle : 'Senior Operation Manager'},
        { url : SenNguyenImg, name : 'Lianna Nguyen', jobTitle : 'Operation Manager'},
        { url : VinNguyenImg, name : 'Vin Nguyen', jobTitle : 'IT Manager'},
        { url : HueNguyenImg, name : 'Hue Nguyen', jobTitle : 'Accountant Manager'},
        { url : TungDoImg, name : 'Tung Do', jobTitle : 'Senior Team Leader'},
    ]
    return (
        <>
            {
                leadershipList.map((leadershipListItem,index) => {
                    return (
                       <>
                        { index === 0 && <div className={LeadershipStyle.ceo}>
                            <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                            <div className={LeadershipStyle.name}>{leadershipListItem.name}</div>
                            <div className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</div>
                        </div>}
                       {
                         index > 0 && index < 4 && <div className={LeadershipStyle.group1}>
                         <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                         <div className={LeadershipStyle.name}>{leadershipListItem.name}</div>
                         <div className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</div>
                         </div>
                       }
                       {
                        index > 3 && index < 7 && <div className={LeadershipStyle.group2}>
                        <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                        <div className={LeadershipStyle.name}>{leadershipListItem.name}</div>
                        <div className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</div>
                        </div>
                       }
                       </>
                    )
                })
            }
           
        </>
    )
}

export default OurLeadership;