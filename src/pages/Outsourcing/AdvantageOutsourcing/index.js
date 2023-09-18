import advantageStyle from './advantage.module.scss'
const Advantage = () => {
    
    const functionList = [
        { 
            title: 'Your Business Pressure:', 
            paragraph1 : "As my business grows, I'm spending more time on tedious, day-to-day business activities than thinking about long-term growth strategies.", 
            paragraph2 : "I really want to grow my business but we're too small and just don't have the capacity to do so right now to take on such a huge endeavor.",
            paragraph3 : "I'm constantly dealing with staff turnover and the resource expenditures related to hiring, training, and lost productivity.",
            paragraph4 : "The costs of hiring, training, and employing additional staff are getting more expensive every day and cutting into my profit margins.",
        },
        { 
            title: 'How Outsourcing Helps:', 
            paragraph1 : "Focus on strategic positioning and maintaining your competitive advantage. Offload the repetitive tasks that divert your attention from your customers and core business.", 
            paragraph2 : "Accomplish more with less people, time, and resources through streamlining and outsourcing your back-office processes. Let your managers focus on increasing sales margins and customer satisfaction to drive your business forward.",
            paragraph3 : "Rely on an integrated, specialized team that will learn your business processes inside out and provide after-hours coverage.",
            paragraph4 : "Focus on strategic positioning and maintaining your competitive advantage. Offload the repetitive tasks that divert your attention from your customers and core business.",
        }
        
    ]
    
    return (
        <> 
            <div className={advantageStyle.title}>Advantages of Outsourcing</div>
            <div className={advantageStyle.function}>    
                {
                    functionList.map((functionItem, index) => {
                        return (
                            <div key={index}>
                                <div >{functionItem.title}</div>
                                <div >{functionItem.paragraph1}</div>
                                <div >{functionItem.paragraph2}</div>
                                <div >{functionItem.paragraph3}</div>
                                <div >{functionItem.paragraph4}</div>
                            </div>
                            
                        )
                    })
                }
            </div>

        </>
    )

}

export default Advantage;