import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';
import outsourcingImagebt from "../../../Image/Outsourcing/arrow.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChartLine, faIdCard, faGlobe, faCalculator } from '@fortawesome/free-solid-svg-icons'
import SolutionsStyle from "./solutionStyle.module.scss"
const SolutionPage = () => {
    const serviceList = [
        {
            icon: faCartShopping, title: 'Data Services:', content: ['Data Entry', 'Data Processing', 'Data Abstracting', 'Document Coding', 'List Management']
        },
        {
            icon: faChartLine, title: 'Sales and Marketing:', content: ['Lead Generation', 'Market Research', 'Business Intelligence']
        },
        {
            icon: faIdCard, title: 'Human Resources:', content: ['Recruitment Support', 'Candidate Sourcing', 'Human Resources Administration']
        },
        {
            icon: faGlobe, title: 'Web Services:', content: ['Content Management', 'Photo Editing', 'Order Processing', 'Search Engine Marketing (SEM)', 'Link Building']
        },
        {
            icon: faCalculator, title: 'Accounting:', content: ['Book Keeping', 'Journal Entries', 'Billing and Invoicing']
        },
    ]

    const stepList = [
        { content: ['Step 1: Project Proposal', 'Identify Objectives and Deliverables', 'Map Procedures and Metrics', 'Project Review and Education'] },
        { content: ['Step 2: Project Launch', 'Environmental Set-Up', 'Resource Allocation', 'Client-Team Training'] },
        { content: ['Step 3: Project Implementation', 'Service and Performance Monitoring', 'Quality Control', 'Time and Production Reporting'] },

    ]


    return (
        <>
            <div className={`${SolutionsStyle.title} ${home.titleContent}`}>
                <h2>Our BPO Solutions</h2>
            </div>
            <div className={SolutionsStyle.content}>
                <div className={SolutionsStyle.paragraph}>
                    <p>
                        Whether you are a private enterprise or a large publicly listed company, FVL & TPL has a solution tailored to suit your need.
                        At FVL & TPL, we support you by creating and implementing new services to sharpen your competitive edge and we offer flexibility to help you respond better to cyclical troughs and peaks.
                        Our commitment comes in the form of long-term partnerships built on trust, open communication and transparency, giving you a smooth and seamless transition from day one.
                    </p>
                </div>
            </div>
            <div className="d-flex">
                {
                    serviceList.map((serviceItem, index) => {
                        return (
                            <div className={`${SolutionsStyle.contSolut}`}>
                                <div className="px-5" key={index}>
                                    <div className={SolutionsStyle.iconSolut}>
                                        <FontAwesomeIcon icon={serviceItem.icon} />
                                    </div>
                                    <div className={home.contentSub}>
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
                            </div>
                        )
                    })
                }
            </div>
            <div className={`${SolutionsStyle.title} ${home.titleContent}`}>
                <h2>Our Process</h2>
            </div>
            <div className={SolutionsStyle.content}>
                <div className={SolutionsStyle.paragraph}>
                    <p>
                        From proposal to implementation to follow-up of your BPO project, we are committed to providing superior ease of integration and friendly and responsive customer service.
                        Our managers will work closely with your team to ensure timely and accurate results are delivered each and every time.
                    </p>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        {
                            stepList.map((stepItem, index) => {
                                return (
                                    <div className="col-md-4 d-flex" key={index}>
                                        <div className={SolutionsStyle.imgStep}>
                                            {index > 0 && <img src={outsourcingImagebt} alt='Outsourcingbt' />}
                                        </div>
                                        <div className={SolutionsStyle.contStep}>
                                            {stepItem.content.map((content, subindex) => <p key={subindex}>{content}</p>)}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default SolutionPage
