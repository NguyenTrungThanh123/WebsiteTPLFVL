import CaseStudiesStyle from './casestudies.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDesktop,faCartShopping, faFolderOpen, faChartSimple } from '@fortawesome/free-solid-svg-icons'

const CaseStudies = () => {
    const caseList  = [
        {icon: faDesktop,  title: "Data Entry:", content: "How FVL & TPL helped a U.S.-based internet advertising firm strengthen data entry operations to accommodate a business expansion.", },
        {icon: faFolderOpen,  title: "Document Coding and Research:", content: "How FVL & TPL helped an industry specific consulting company execute a successful changover plan and expand to new markets by outsourcing non-core tasks.", },
        {icon: faChartSimple,  title: "Lead Generation:", content: "How FVL & TPL helped an industry leader of specialty education and content solutions streamline contact database management and lead generation.", },
        {icon: faCartShopping,  title: "e-Commerce Auction:", content: "How FVL & TPL helped an online merchant prepare for increased volume during the holiday season.", },
    ] 
    return (
        <>
            <div className={CaseStudiesStyle.title}>Case Studies</div>
            {
                caseList.map((caseItem, index) => {
                    return (
                        <div key={index}>
                             <FontAwesomeIcon icon={caseItem.icon} />
                             <div className={CaseStudiesStyle.subtitle}>
                                    {caseItem.title}
                             </div>
                             <div className={CaseStudiesStyle.subcontent}>
                                    {caseItem.content}
                             </div>
                             <button>Read more</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CaseStudies