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
            <nav className={`${aboutusnavb.navContent} ${"navbar navbar-expand-lg bg-light sticky-top"}`}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class={`${aboutusnavb.subContent} ${"collapse navbar-collapse"}`} id="navbarScroll">
                        <ul class="navbar-nav mx-auto navbar-nav-scroll">
                            {
                                navlist.map((navItem, index) => {
                                    return (
                                        <li className="px-5" key={index}><NavLink to={navItem.to}><FontAwesomeIcon icon={navItem.icon} /> {navItem.name}</NavLink></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AboutUsNav;