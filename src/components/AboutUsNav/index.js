import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuilding, faPeopleRoof, faAward,faPeopleGroup, faUsersLine} from '@fortawesome/free-solid-svg-icons'
const AboutUsNav = () => {
    const navlist = [ 
        {to: 'OurCompanies', name: 'Our Companies', icon : faBuilding},
        {to: 'OurLeadershipTeam', name: 'Our Leadership Team', icon: faPeopleRoof},
        {to: 'OurAchievements', name: 'Our Achievements', icon: faAward },
        {to: 'OurActivities', name: 'Our Activities', icon: faPeopleGroup},
        {to: 'OurCustomers', name: 'Our Customers',icon: faUsersLine}]    
    return (
            <>
                <ul>
                    {
                        navlist.map((navItem, index) => {
                            return(
                                <li key={index}><NavLink to={navItem.to}><FontAwesomeIcon icon={navItem.icon} /> {navItem.name}</NavLink></li>
                            )
                        })
                    }
                </ul>
            </>
        )
}

export default AboutUsNav;