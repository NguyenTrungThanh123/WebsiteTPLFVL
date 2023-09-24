import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import fvlLogo from '../../Image/Home/FVL_Logo.png';
import tplLogo from '../../Image/Home/TPL_Logo.png';
import sbOurS from './SidebarOutsourcing.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus, faUsersGear, faCircleQuestion, faLightbulb, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
const sidebar = () => {
    const navlist = [
        { to: '', name: 'Outsourcing', icon: faUsersGear },
        { to: 'Advantage', name: 'Advantage Outsourcing', icon: faFileCirclePlus },
        { to: 'Faqs', name: 'Faqs', icon: faCircleQuestion },
        { to: 'Tips', name: 'Tips', icon: faLightbulb },
        { to: '/contact', name: 'Contact', icon: faAddressCard }

    ]

    return (
        <>
            <div className={sbOurS.navOurS}>
                <div className={sbOurS.oursImg}>
                    <img src={fvlLogo} />
                    <img src={tplLogo} />
                </div>
                <div className={sbOurS.oursLink}>
                    {
                        navlist.map((navItem, index) => {
                            return (
                                <div className="col-lg-12">
                                    <div className="row" key={index}>
                                        <div className="col-lg-1">
                                            <FontAwesomeIcon icon={navItem.icon} />
                                        </div>
                                        <div className="col-lg-11">
                                            <NavLink to={navItem.to} >{navItem.name}</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default sidebar;