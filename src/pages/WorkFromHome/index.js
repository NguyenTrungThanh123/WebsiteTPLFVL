 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import {faCalendarCheck,faUserShield,faGraduationCap,faGlobe,faCreditCard,faCheck} from "@fortawesome/free-solid-svg-icons";
 import MerryChrismateZoomImg from "../../Image/WorkFromHome/MerryChrismateZoom2.jpg";
const WorkFromHome = () => {
    const wfhList = [
        {icon : <FontAwesomeIcon icon={faCalendarCheck} /> , content: 'Work from your home. At your convenient time.'},
        {icon : <FontAwesomeIcon icon={faUserShield} /> , content: 'Avoid trafﬁc. Save Commuting time.'},
        {icon : <FontAwesomeIcon icon={faGraduationCap} /> , content: 'No experience. Free training.'},
        {icon : <FontAwesomeIcon icon={faCreditCard} /> , content: 'Guaranteed payment.'},
        {icon : <FontAwesomeIcon icon={faGlobe} /> , content: 'All you need is commitment, a computer at home, and internet connection.'},
        
    ]
    const covidList = [
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'In the first week of Mar 2020, we set Plan of attack to prepare for Work From Home (WFH).' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'After 2 weeks of planning, we have deployed 100% of our production team as WFH-able.' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'During the deployment, Employees were given the option to borrow company equipment.' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'All Operators agreed and signed the WFH Service Level Agreement Form.' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'Despite of the pandemic, we received more projects from customers.' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'Adapt to the changes due to COVID-19 restrictions, recruitment was 100% online.' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'Company procured 100% vaccine shots for employees sooner than anyone else.' },
        {icon : <FontAwesomeIcon icon={faCheck}  /> , content: 'Provided Support to the community for Medical equipment, Food and Medicine in our fight with COVID-19.' },

    ]
    return ( 
        <>
            <div>FIRST VIRTUE'S WORK FROM HOME IS A GREAT WAY FOR YOU TO EARN EXTRA INCOME</div>
            {
                wfhList.map((wfhItem,index) => {
                    return (
                        <div key={index}>
                            {wfhItem.icon}{wfhItem.content}
                        </div>
                    )
                })
            }
            <div>COVID-19 - GLOBAL PANDEMIC - HOW DID OUR TEAM SURVIVE?</div>
            {
                covidList.map((covidItem,index) => {
                        return (
                            <div key={index}>
                                {covidItem.icon}{covidItem.content}
                            </div>
                        )
                })
            }

            <div>APPLY YOUR CV TO OUR HR FOR A PROJECT SUITABLE FOR YOU</div>
            <a href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer">Apply Now</a>
            <img src={MerryChrismateZoomImg} alt="MerryChrismate Zoom" />
        </>
     );
}

export default WorkFromHome;