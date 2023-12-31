import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import LeadershipStyle from './OurLeadership.module.scss'
import HueNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Hue Nguyen.jpg'
import JingHimImg from '../../../Image/AboutUs/Our_LeadershipTeam/Jing Him.jpg'
import ManiImg from '../../../Image/AboutUs/Our_LeadershipTeam/Mani2.jpg'
import MichelleNgoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Michelle Ngo.jpg'
import SenNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Sen Nguyen.jpg'
import TungDoImg from '../../../Image/AboutUs/Our_LeadershipTeam/Tung Do.jpg'
import VinNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Vin Nguyen2.jpg'
import KhanhTruongImg from '../../../Image/AboutUs/Our_LeadershipTeam/KhanhTruong.jpg'
import PhuongTranImg from '../../../Image/AboutUs/Our_LeadershipTeam/PhuongTran.jpg'
import ChauNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/ChauNguyen.jpg'
import TruongNguyenImg from '../../../Image/AboutUs/Our_LeadershipTeam/Truong Nguyen.jpg'
const OurLeadership = () => {

    const leadershipList = [
        { url: MichelleNgoImg, name: 'Michelle Ngo', jobTitle: 'Chief Executive Officer' },
        { url: JingHimImg, name: 'Jing Him', jobTitle: 'Operation Director' },
        { url: ManiImg, name: 'Mani Chinna', jobTitle: 'Senior Operation Manager' },
        { url: TungDoImg, name: 'Tung Do', jobTitle: 'Operation Manager' },
       
        { url: HueNguyenImg, name: 'Hue Nguyen', jobTitle: 'Accountant Manager' },
        { url: VinNguyenImg, name: 'Vin Nguyen', jobTitle: 'IT Manager' },
        { url: SenNguyenImg, name: 'Lianna Nguyen', jobTitle: 'HR Manager' },
        
        { url: KhanhTruongImg, name: 'Khanh Truong', jobTitle: 'Senior Team Leader' },
        { url: PhuongTranImg, name: 'Phuong Tran', jobTitle: 'Senior Team Leader' },
        { url: TruongNguyenImg, name: 'Truong Nguyen', jobTitle: 'Senior Team Leader' },
        { url: ChauNguyenImg, name: 'Chau Nguyen', jobTitle: 'Senior Team Leader' },
    ]
    return (
        <>
            <div className={home.content}>
                <div className='container'>
                    <div className="row">
                        <div className={LeadershipStyle.contLead}>
                            <div className={home.titleContent}>
                                <h2>Our Leadership</h2>
                            </div>
                            {
                                leadershipList.map((leadershipListItem, index) => {
                                    return (
                                        <div key={index}>
                                            {
                                                index === 0 &&
                                                <div className={`${LeadershipStyle.ceo} ${"col-md-4"}`}>
                                                    <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                                                    <h5 className={LeadershipStyle.name}>{leadershipListItem.name}</h5>
                                                    <p className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</p>
                                                </div>
                                            }
                                        </div>
                                    )
                                })
                            }
                            <div className="d-flex">
                                {
                                    leadershipList.map((leadershipListItem, index) => {
                                        return (
                                            <>
                                                {
                                                    index > 0 && index < 4 &&
                                                    <div className={`${LeadershipStyle.itemLead} ${"col-md-4"}`}>
                                                        <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                                                        <h5 className={LeadershipStyle.name}>{leadershipListItem.name}</h5>
                                                        <p className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</p>
                                                    </div>
                                                }
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <div className="d-flex">
                                    {
                                        leadershipList.map((leadershipListItem, index) => {
                                            return (
                                                <>
                                                    {
                                                        index > 6 && index < 11 &&
                                                        <div className={`${LeadershipStyle.itemLead} ${"col-md-3"}`}>
                                                            <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                                                            <h5 className={LeadershipStyle.name}>{leadershipListItem.name}</h5>
                                                            <p className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</p>
                                                        </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                            </div>
                            <div className="d-flex">
                                    {
                                        leadershipList.map((leadershipListItem, index) => {
                                            return (
                                                <>
                                                    {
                                                        index > 3 && index < 7 &&
                                                        <div className={`${LeadershipStyle.itemLead} ${"col-md-4"}`}>
                                                            <img src={leadershipListItem.url} alt={leadershipListItem.name} />
                                                            <h5 className={LeadershipStyle.name}>{leadershipListItem.name}</h5>
                                                            <p className={LeadershipStyle.jobTitle}>{leadershipListItem.jobTitle}</p>
                                                        </div>
                                                    }
                                                </>
                                            )
                                        })
                                    }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurLeadership;