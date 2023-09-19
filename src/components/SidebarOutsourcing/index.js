import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faUsersGear, faCircleQuestion, faLightbulb,faAddressCard } from '@fortawesome/free-solid-svg-icons'
import outsourcingImage from  "../../Image/Outsourcing/outsourcing.jpg"
import { NavLink } from 'react-router-dom';
const sidebar = () => {
    const navlist = [
        {to: 'Outsourcing',  name: 'OutsourcingPage', icon: faUsersGear },
        {to: 'Advantage',  name: 'AdvantageOutsourcing',icon : faFileCirclePlus },
        {to: 'Faqs',  name: 'Faqs', icon: faCircleQuestion},
        {to: 'Tips',  name: 'Tips', icon: faLightbulb},
        {to: '/contact', name: 'Contact', icon: faAddressCard}
        
    ]
    
    return (
        <>
            <img src={outsourcingImage} alt='Outsourcing' />
            <ul>
                {
                   navlist.map((navItem, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={navItem.to} ><FontAwesomeIcon icon={navItem.icon} />{navItem.name}</NavLink>
                            </li>
                        )
                   }) 
                }
            </ul>
            <div>
                <div>info@transcendpeople.com</div>
                <div>+1 (650) 472 2233 (USA)</div>
                <div>+ (84) 28 3948 4086 (Vietnam)</div>
            </div>
        </>
    )
}

export default sidebar;