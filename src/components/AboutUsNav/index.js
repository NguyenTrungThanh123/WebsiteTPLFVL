import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import aboutusnavb from '../../components/AboutUsNav/aboutusnav.module.scss';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faPeopleRoof, faAward, faPeopleGroup, faUsersLine } from '@fortawesome/free-solid-svg-icons'
const AboutUsNav = () => {
    const navlist = [
        { to: 'OurCompanies', name: 'Our Companies', icon: faBuilding },
        { to: 'OurLeadershipTeam', name: 'Our Leadership Team', icon: faPeopleRoof },
        { to: 'OurAchievements', name: 'Our Achievements', icon: faAward },
        { to: 'OurActivities', name: 'Our Activities', icon: faPeopleGroup },
        { to: 'OurCustomers', name: 'Our Customers', icon: faUsersLine }]
    return (
        <>
            <div className={aboutusnavb.contentAbU}>
                <div className="container">
                    <div className={aboutusnavb.subContent}>
                        <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            {
                                navlist.map((navItem, index) => {
                                    return (
                                        <div className="col-lg-2" key={index}><NavLink to={navItem.to}><FontAwesomeIcon icon={navItem.icon} /> {navItem.name}</NavLink></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsNav;