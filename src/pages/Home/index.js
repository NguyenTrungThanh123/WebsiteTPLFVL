import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from './home.module.scss';
import { NavLink } from 'react-router-dom';
import FAlogo from '../../Image/Home/FALogo.png';
import AccessNurses from '../../Image/Home/AccessNurses.png'
import bannerBPO from '../../Image/Home/BPO-service-Webdesign-1200x480-removebg.jpg'
import bannerHome from '../../Image/Home/Banner/Home_Banner.jpg'
const Home = () => {
    return (
        <>
            <div className={home.content}>
                <div className={home.bannerHome}>
                    <img src={bannerHome} alt="Homebn" />
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className={home.bannerBPO}>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img src={bannerBPO} alt="BPO" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className={home.titleContent}>
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
                                            <NavLink to='/Solutions'>Learn More</NavLink>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={home.experience}>
                    <div className="container-fluid text-center d-flex flex-column">
                        <div className={home.titleContent}>
                            <h2>
                                The First Virtue & Transcend People Advantage
                            </h2>
                        </div>
                        <div className={home.contentSub2}>
                            <p>When you get on the phone with us, you'll notice the difference immediately. With First Virtue & Transcend People, you'll experience professional, personalized, and responsive customer service - and our managers will ensure a smooth integration and ongoing deliverables.</p>
                            <p>Get to know the people you'll be working with directly - and you'll understand why we do it better.</p>
                        </div>
                        <div className={home.btnapply}><NavLink to='/AboutUs/OurCompanies'>About Us</NavLink></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className={home.titleContent}>
                        <h2>
                            What Our Clients Say
                        </h2>
                    </div>
                    <div className="col-lg-12">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className={home.detailClient}>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-3 d-flex align-items-center">
                                                <div className={home.imgClient}>
                                                    <img className="rounded mx-auto d-block" src={FAlogo} alt='FAlogo' />
                                                </div>
                                            </div>
                                            <div className="col-lg-9 d-flex align-items-center">
                                                <div className={home.detailSay}>
                                                    <p>
                                                        "We are building relationships with the First Virtue team through training sessions, conference calls and emails.
                                                    </p>
                                                    <br></br>
                                                    <p>
                                                        Their continuous professionalism and high quality standards have prompted the inclusion of additional counties to their range of knowledge."
                                                    </p>
                                                    <h5 className={home.author}>Cathy Bremer, DBS International Operations</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className={home.detailClient}>
                                    <div className="col-lg-12">
                                        <div className="row">
                                            <div className="col-lg-3 d-flex align-items-center">
                                                <div className={home.imgClient}>
                                                    <img className="rounded mx-auto d-block" src={AccessNurses} alt='FAlogo' />
                                                </div>
                                            </div>
                                            <div className="col-lg-9 d-flex align-items-center">
                                                <div className={home.detailSay}>
                                                    <p>
                                                        "By utilizing First Virtue & Transcend People, we were able to scale portions of our business much faster than if we were to have attempted the support work on our own. The First Virtue & Transcend People team provides efficient, consistent, and high-quality work. No matter what project we have thrown at them, the deliverable has always met the highest standards and results were produced in an exceedingly timely manner."
                                                    </p>
                                                    <h5 className={home.author}>Collin J. Tyler, Corporate Development Access Nurses, Inc.</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className={home.btnapply} type="button">
                                <NavLink to='/Solutions'>Learn More</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home; 