import portfolio from './portfolio.module.scss'
import partnerships from '../../../Image/Solution/logos_clients.jpg'
const Portfolio = () => {
    return (
        <>
            <div className={portfolio.titles}>Partnerships Built on Trust</div>
            <div className={portfolio.content}>
                <div className={portfolio.paragraph}>
                    We recognize that trust is the most important value in an outsourcing partnership. And that's why from day one, our clients experience superior customer service and results that enhance their business' performance.
                </div>
                <div className={portfolio.paragraph}>
                    Our current client list includes businesses representing a range of industries, sizes and requirements. Here's a sampling of our client list:
                </div>
                <img src={partnerships} alt="partnerships" />
            </div>
        </> 
    )
}

export default Portfolio;