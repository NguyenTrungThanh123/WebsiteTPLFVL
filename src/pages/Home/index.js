import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import stylepages from '../stylepages.module.scss';
import home from './home.module.scss';
import { NavLink } from 'react-router-dom';
import FAlogo from '../../Image/Home/FALogo.png';
import AccessNurses from '../../Image/Home/AccessNurses.jpg'
import bannerBPO from '../../Image/Home/BPO-service-Webdesign-1200x480.png'
const Home = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className="content">
                    <div className={home.content}>
                        <div className='row'>
                            <div className="col-lg-6">
                                <div className={home.bannerBPO}>
                                    <img src={bannerBPO} alt="BPO" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={home.titleBPO}>
                                    <h2>Business Process Outsourcing</h2>
                                </div>
                                <div className={home.contentdetail}>
                                    <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column">
                                        <div className={home.numberItem}>
                                            <h2>01</h2>
                                        </div>
                                        <div className={home.contentSub}>
                                            <h3>BPO Solutions</h3>
                                            <p>
                                                Optimize your business performance with our customized business process outsourcing (BPO) solutions.
                                                Reduce management burden, inefficiencies, and costs - and focus on taking your business to the next level.
                                                Today, outsourcing your day-to-day business processes is no longer just a viable option, it's a strategic business decision.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={home.contentdetail}>
                                    <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column">
                                        <div className={home.numberItem}>
                                            <h2>02</h2>
                                        </div>
                                        <div className={home.contentSub}>
                                            <h3>First Virtue & Transcend People</h3>
                                            <p>
                                                First Virtue & Transcend People offers your business a wide range of outsourcing solutions that will alleviate the ever-growing demands on your business, such as data entry services, e-commerce support, high-level document classification, pre-sales or market research outsourcing, and much more.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className={home.contentdetail}>
                                    <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column">
                                        <div className={home.numberItem}>
                                            <h2>03</h2>
                                        </div>
                                        <div className={home.contentSub}>
                                            <h3>Learn More</h3>
                                            <p>
                                            Learn more about how our BPO solutions can help you enhance your business.
                                            Please click on button below to get more information.
                                            </p>
                                            <button className={home.btnapply} type="button">
                                                <a>Learn More</a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={stylepages.container}>
                <div className={`${home.banner} ${stylepages.banner}`}>

                </div>
                <div className={`${stylepages.content} ${home.content}`}>
                    <div className={home.bannerAdvantage}>
                        <div className={home.titleAdvantage}>
                            The First Virtue & Transcend People Advantage
                        </div>
                        <div className={home.contentAdvantage}>
                            <p>When you get on the phone with us, you'll notice the difference immediately. With <span>First Virtue & Transcend People,</span>
                                you'll <span>experience professional, personalized, and responsive customer service</span> - and our managers will ensure a <span>smooth
                                    integration and ongoing deliverables.</span></p>
                            <p>Get to know the people you'll be working with directly - and you'll understand why we do it better.</p>
                        </div>
                        <div className={home.buttonAdvantage}><NavLink to='/AboutUs'>About Us</NavLink></div>
                    </div>
                    <div className={home.bannerClientSay}>
                        <div className={home.titleClientSay}>What Our Clients Say</div>
                        <div className={home.contentClientSay}>
                            <div className={home.contentSub}>
                                <div className={home.avatarClientSay}><img src={FAlogo} alt='FAlogo' /></div>
                                <div className={home.message}>
                                    "We are building relationships with the <span>First Virtue</span> team through training sessions, conference calls and emails.
                                    Their continuous <span>professionalism and high quality standards</span> have prompted the inclusion of additional counties to
                                    their <span>range of knowledge.</span>"
                                    <div className={home.author}>Cathy Bremer, DBS International Operations</div>
                                </div>
                            </div>
                            <div className={home.contentSub}>
                                <div className={home.avatarClientSay}><img src={AccessNurses} alt='FAlogo' /></div>
                                <div className={home.message}>
                                    "By utilizing <span>First Virtue & Transcend People</span>, we were able to <span>scale portions of our business</span> much faster than
                                    if we were to have attempted the support work on our own. The <span>First Virtue & Transcend People</span> team provides <span>efficient,
                                        consistent, and high-quality work.</span> No matter what project we have thrown at them, the deliverable has always met the highest
                                    standards and results were produced in an exceedingly timely manner."
                                    <div className={home.author}>Collin J. Tyler, Corporate Development Access Nurses, Inc.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home; 