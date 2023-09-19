import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChartLine, faIdCard, faGlobe, faCalculator } from '@fortawesome/free-solid-svg-icons'
import SolutionsStyle from "./solutionStyle.module.scss"

const SolutionPage = () => {
    const serviceList = [
        {
            icon :  faCartShopping ,  title : 'Data Services:', content : ['Data Entry', 'Data Processing', 'Data Abstracting', 'Document Coding', 'List Management']                                           
        },
        {
            icon :  faChartLine,  title : 'Sales and Marketing:', content : ['Lead Generation', 'Market Research', 'Business Intelligence']                                           
        },
        {
            icon :  faIdCard,  title : 'Human Resources:', content : ['Recruitment Support', 'Candidate Sourcing', 'Human Resources Administration']                                           
        },
        {
            icon :  faGlobe ,  title : 'Web Services:', content : ['Content Management', 'Photo Editing', 'Order Processing', 'Search Engine Marketing (SEM)', 'Link Building']                                           
        },
        {
            icon :  faCalculator,  title : 'Accounting:', content : ['Book Keeping', 'Journal Entries', 'Billing and Invoicing']                                           
        },
    ]
    

    return (
        <>
            <div className={SolutionsStyle.title}>Our BPO Solutions</div>
            <div className={SolutionsStyle.content}>
                <div className={SolutionsStyle.paragraph}>
                    Whether you are a private enterprise or a large publicly listed company, FVL & TPL has a solution tailored to suit your need.
                </div>
                <div className={SolutionsStyle.paragraph}>
                    At FVL & TPL, we support you by creating and implementing new services to sharpen your competitive edge and we offer flexibility to help you respond better to cyclical troughs and peaks.
                </div>
                <div className={SolutionsStyle.paragraph}>
                    Our commitment comes in the form of long-term partnerships built on trust, open communication and transparency, giving you a smooth and seamless transition from day one.
                </div>
            </div>
            <div className={SolutionsStyle.serviceList}>
                {
                    serviceList.map((serviceItem, index) => {
                        return (
                            <>
                                <FontAwesomeIcon icon={serviceItem.icon} />
                                <div className={SolutionsStyle.subTitle}>{serviceItem.title}</div>
                                <div className={SolutionsStyle.subcontent}>
                                    {
                                        serviceItem.content.map((subcontent, index) => {
                                            return (
                                                <>
                                                    {subcontent}
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}


export default SolutionPage
