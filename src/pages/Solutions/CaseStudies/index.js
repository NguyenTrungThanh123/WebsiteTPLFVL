import CaseStudiesStyle from './casestudies.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CaseStudies = () => {
    return (
        <>
            <div className={CaseStudiesStyle.title}>Case Studies</div>
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faFolderOpen} />
            <FontAwesomeIcon icon={faChartSimple} />
        </>
    )
}

export default CaseStudies