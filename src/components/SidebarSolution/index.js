import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightDots,faLightbulb, faBars,faStamp, faBook} from '@fortawesome/free-solid-svg-icons'
import solutionImage from  "../../Image/Solution/solution-vector-colored-banner_104589-69.jpg"
import { NavLink } from 'react-router-dom';
const sidebarSolution = () => {
    const navlist = [
        {to: 'Solutions',  name: 'Solutions', icon: faLightbulb },
        {to: 'Advantage',  name: 'The FVL & TPL Advantage', icon: faArrowUpRightDots },
        {to: 'Portfolio',  name: 'Portfolio',icon : faBars },
        {to: 'Testimonials',  name: 'Testimonials', icon: faStamp},
        {to: 'CaseStudies',  name: 'Case Studies', icon: faLightbulb},
        {to: '/contact', name: 'Contact', icon: faBook}
    ]
    return (
        <>
            <img src={solutionImage} alt='Solution' />
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

export default sidebarSolution;