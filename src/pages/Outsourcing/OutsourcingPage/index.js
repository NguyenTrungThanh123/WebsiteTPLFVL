import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../../Home/home.module.scss';

import outsourcingImagebt from "../../../Image/Outsourcing/arrow.jpg"
import outsourcingStyle from './outsourcing.module.scss'
const OutsourcingPage = () => {

    const functionList = [
        {
            title: 'Outsource Non-Core Functions',
            paragraph1: 'Reduce Management Burden of Day-to-Day Tasks',
            paragraph2: 'Reduce Costs Related to Labor and Operations',
            paragraph3: 'Reduce Process Inefficiencies'
        },
        {
            title: 'Focus on Strategic Functions',
            paragraph1: 'Increase Capacity for Strategic Tasks',
            paragraph2: 'Focus Time and Resources on Customer Base',
            paragraph3: 'Improve Productivity and Quality'
        },
        {
            title: 'Achieve Business Objectives',
            paragraph1: 'Increase Sales and Customer Satisfaction',
            paragraph2: 'Increase Revenues and Profit Margins',
            paragraph3: 'Achieve Stronger, More Flexible Market Position'
        }
    ]

    return (
        <>
            <div className={`${home.titleContent}`}>
                <h2>OUTSOURCING</h2>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <div className={`${outsourcingStyle.contOurS}`}>
                            <div className={`${"d-flex"} ${outsourcingStyle.contItem}`}>
                                <div className={home.numberItem}>
                                    <h2>01</h2>
                                </div>
                                <div className={home.contentSub}>
                                    <p>
                                        Your business has many pressures. Staff recruitment and retention, costs related to labor and operations, and increasing administrative tasks that need to get done. With all this attention on the day-to-day, your capacity to focus on what's most important is limited.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${outsourcingStyle.contOurS}`}>
                            <div className={`${"d-flex"} ${outsourcingStyle.contItem}`}>
                                <div className={home.numberItem}>
                                    <h2>02</h2>
                                </div>
                                <div className={outsourcingStyle.contentSub}>
                                    <p>
                                        Instead, outsource your business processes to FVL & TPL. Unload management burden and reduce costs with a dedicated team that we manage for you. Improve productivity through our expertise and economies of scale. Most importantly, drive your business forward by concentrating on what's really critical - increasing your customer base, sales revenues, and profit margins.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${outsourcingStyle.contOurS}`}>
                            <div className={`${"d-flex"} ${outsourcingStyle.contItem}`}>
                                <div className={home.numberItem}>
                                    <h2>03</h2>
                                </div>
                                <div className={home.contentSub}>
                                    <p>
                                        How? Take a look at this process chart to understand how outsourcing can relieve your business pressures and allow you to achieve your maximum business objectives.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={outsourcingStyle.function}>
                <div className="col-lg-12">
                    <div className="row">
                        {
                            functionList.map((functionItem, index) => {
                                return (
                                    <div className="col-lg-4 d-flex" key={index}>
                                        {index > 0 && <img src={outsourcingImagebt} alt='Outsourcingbt' />}
                                        <div className={outsourcingStyle.contbottom}>
                                            <h6 className={home.titleContent}>{functionItem.title}</h6>
                                            <p>{functionItem.paragraph1}</p>
                                            <p>{functionItem.paragraph2}</p>
                                            <p>{functionItem.paragraph3}</p>
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

export default OutsourcingPage;