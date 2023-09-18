import outsourcingStyle from './outsourcing.module.scss'
const OutsourcingPage = () => {
    
    const functionList = [
        { 
            title: 'Outsource Non-Core Functions', 
            paragraph1 : 'Reduce Management Burden of Day-to-Day Tasks', 
            paragraph2 : 'Reduce Costs Related to Labor and Operations',
            paragraph3 : 'Reduce Process Inefficiencies'
        },
        { 
            title: 'Focus on Strategic Functions', 
            paragraph1 : 'Increase Capacity for Strategic Tasks', 
            paragraph2 : 'Focus Time and Resources on Customer Base',
            paragraph3 : 'Improve Productivity and Quality'
        },
        { 
            title: 'Achieve Business Objectives', 
            paragraph1 : 'Increase Sales and Customer Satisfaction', 
            paragraph2 : 'Increase Revenues and Profit Margins',
            paragraph3 : 'Achieve Stronger, More Flexible Market Position'
        }
    ]
    
    return (
        <> 
            <div className={outsourcingStyle.title}>Your Business Can Do More</div>
            <div className={outsourcingStyle.content}>
                Your business has many pressures. Staff recruitment and retention, costs related to labor and operations, 
                and increasing administrative tasks that need to get done. With all this attention on the day-to-day, 
                your capacity to focus on <span>what's most important</span> is limited.
            </div>
            <div className={outsourcingStyle.content}>
                Instead, outsource your business processes to FVL & TPL. <span>Unload management burden</span> and reduce costs with a dedicated team that we manage for you. 
                <span>Improve productivity</span> through our expertise and economies of scale. Most importantly, drive your business forward by concentrating on what's 
                really critical - <span>increasing your customer base, sales revenues, and profit margins.</span>
            </div>
            <div className={outsourcingStyle.content}>
                How? Take a look at this process chart to understand how outsourcing can relieve your business pressures and 
                allow you to achieve your maximum business objectives.
            </div>
            <div className={outsourcingStyle.function}>    
                {
                    functionList.map((functionItem, index) => {
                        return (
                            <div key={index}>
                                <div >{functionItem.title}</div>
                                <div >{functionItem.paragraph1}</div>
                                <div >{functionItem.paragraph2}</div>
                                <div >{functionItem.paragraph3}</div>
                            </div>
                            
                        )
                    })
                }
            </div>

        </>
    )

}

export default OutsourcingPage;