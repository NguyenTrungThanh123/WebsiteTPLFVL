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

    const stepList =  [
        { title: 'Step 1: Project Proposal', content: ['Identify Objectives and Deliverables','Map Procedures and Metrics','Project Review and Education']},
        { title: 'Step 2: Project Launch', content: ['Environmental Set-Up','Resource Allocation','Client-Team Training']},
        { title: 'Step 3: Project Implementation', content: ['Service and Performance Monitoring','Quality Control','Time and Production Reporting']},
        
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
                            <div key={index}>
                                <FontAwesomeIcon icon={serviceItem.icon} />
                                <div className={SolutionsStyle.subTitle}>{serviceItem.title}</div>
                                <div className={SolutionsStyle.subcontent}>
                                    {
                                        serviceItem.content.map((subcontent, subindex) => {
                                            return (
                                                <div key={subindex}>
                                                    {subcontent}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className={SolutionsStyle.title}>Our Process</div>
            <div className={SolutionsStyle.content}>
                <div className={SolutionsStyle.paragraph}>
                    From proposal to implementation to follow-up of your BPO project, we are committed to providing superior ease of integration and friendly and responsive customer service. 
                    Our managers will work closely with your team to ensure timely and accurate results are delivered each and every time.
                </div>
                {
                    stepList.map((stepItem,index) => {
                        return  (
                            <div key={index}>
                                 <div className={SolutionsStyle.subTitle}>{stepItem.title}</div>
                                 <div className={SolutionsStyle.subcontent}>{
                                        stepItem.content.map((content,subindex) => <div key={subindex}>{content}</div> )
                                 }</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default SolutionPage
