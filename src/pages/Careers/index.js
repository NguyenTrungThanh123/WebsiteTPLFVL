import { NavLink } from 'react-router-dom';
import hiringDataProcessing from '../../Image/Careers/hiring_dataProcessing.png'
import { CareersList } from '../../components/Careers';
import careersStyle from  './careers.module.scss'

const Careers = () => {
    return ( 
        <div>
            <img src={hiringDataProcessing} alt='Hiring Data Processing' />
            <div className={careersStyle.content}>
                {
                    CareersList.map((careersItem, index) => {
                        return (
                           <div key={index}>
                                <div className={careersStyle.jobName} >{careersItem.jobName}</div>
                                <div className={careersStyle.datePublish} >{careersItem.datePublish}</div>
                                <div className={careersStyle.title} >{careersItem.title}</div>
                                {careersItem.jobMission.map((jobMissionDetail, index)=>{
                                    return (
                                        <div key={index}>
                                            <div className={careersStyle.jobMission}>{careersItem.iconCircle}{jobMissionDetail}</div>
                                        </div>
                                    )
                                })}
                                <NavLink to="/CareerDetails" >Job Details</NavLink>
                                <a href='https://forms.gle/61BoPx74zQTUhxRH6' target='_blank' rel="noopener noreferrer">Apply Now</a>
                               
                           </div>
                        )
                    })
                }
            </div>            
        </div>
     );

}

export default Careers;