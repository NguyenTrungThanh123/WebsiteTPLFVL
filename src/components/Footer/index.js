import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import footer from './footer.module.scss'
import { Link } from 'react-router-dom'
import turkeydash from '../../Image/Footer/turkeydash.jpg'
import isoLogo from '../../Image/Footer/iso27001.png'
const Footer = () => {
    return (
        <>
            <div className={footer.inforfooter}>
                <div className='container-fluid'>
                    <div className="row">
                        <div className='col-lg-4'>
                            <div className={footer.namesubject}>First Virtue LLC & Transcend People LLC</div>
                            <div className={footer.infodetail}><FontAwesomeIcon icon={faLocationDot} className={footer.inforIcon} />Address: 78/2A Binh Loi, Ward 13, Binh Thanh District, HCMC, Vietnam. </div>
                            <div className={footer.infodetail}><FontAwesomeIcon icon={faPhoneVolume} className={footer.inforIcon} />VoIP: +1 (650) 472 2233 (USA)</div>
                            <div className={footer.infodetail}><FontAwesomeIcon icon={faPhone} className={footer.inforIcon} />Phone: + (84) 28 3948 4086 (Vietnam)</div>
                        </div>
                        <div className='col-lg-3'>
                            <div className={footer.namesubject}>Our Careers</div>
                            <div className={footer.infodetail}>You can click button to apply your information for our jobs</div>
                            <div className={footer.btnapply}><Link to='/careers' className={footer.linkApplyJob} >Apply Now</Link></div>
                        </div>
                        <div className='col-lg-3'>
                            <div className={footer.namesubject}>Social Network Link</div>
                            <div className={footer.linkFbFVL}>
                                <a href="https://www.facebook.com/1stvirtue.company/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className={footer.fbFVLicon} />First Virtue Limited
                                </a>
                            </div>
                            <div className={footer.linkFbTPL}>
                                <a href="https://www.facebook.com/FVLTPL" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className={footer.fbTPLicon} />Transcend People Limited
                                </a>
                            </div>
                            <div className={footer.turkeyDashLink}><a href="https://www.facebook.com/turkeydashvietnam" target="_blank" rel="noopener noreferrer"><img src={turkeydash} alt="turkeydash" /> Turkey Dash VietNam</a></div>
                        </div>
                        <div className='col-lg-2'>
                            <div className={footer.isoLogo}>
                                <img src={isoLogo} alt="ISO 27001" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className={footer.copyRight}>
                        <span>First Virtue Limited Liability Company & Transcend People Limited Liability Company Copyright © 2008 - 2023 •</span><Link to='/PrivacyPolicy'><span>Privacy Policy</span></Link>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer