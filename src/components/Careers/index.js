import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle,faCalendar,faLocationDot,faEnvelope,faPen} from "@fortawesome/free-solid-svg-icons";
import hiringDataProcessingImage from '../../Image/Careers/hiring_dataProcessing.png'
const CareersList = [
    {
        image: <img src={hiringDataProcessingImage} alt='Hiring Data Processing' />,
        jobName: 'DATA PROCESSING STAFF 2', 
        datePublish: 'March 30, 2023',
        description: [
            {
                title: "Job Mission", 
                content: ["Receive records, photos, documents, and requests from customers.",
                "Processing information, Key/VR/RS/Preqc and accurately extracting information according to customer requirements.",
                "Enter the extracted information on the customer's system.",
                "Report work at the request of the Team Leader.",
                "Perform other jobs as assigned by the Team Leader."],
                
            },
            {
                title: "Responsibility",
                content: [
                    "Collaborate with colleagues and Team Leader to complete Team tasks.",
                    "Properly and fully implement the duties as prescribed by the Company to ensure timely, efficient, and professional.",
                    "Sign information security agreements before accessing the information systems of the Company, which specifically provide for information security.",
                    "All company policies/standards/regulations must be followed.",
                    "Complete reports as required by the Team Leader."
               ],
            },
            {
                title : "Benefits",
                content: [
                    "Pay social insurance, unemployment insurance, health insurance and the benefits in accordance with the Labor Law.",
                    "Opportunity to learn and improve ENGLISH skills.",
                    "Professional, young and friendly working environment.",
                    "Be trained and guided enthusiasm in order to be prompt to work effectively."
                ],
            },
            {
                title : "Required Knowledge and Skills",
                content: [
                    "No experience is required, staff will receive training at the start of the job.",
                    "Graduated from high school / vocational school, no specialization required.",
                    "Basic computer skills, fast typing skills.",
                    "Basic English skills in listening, speaking, reading, and writing.",
                    "Hard-working, careful, and have the spirit of learning and progress at work."
                ]
            },
        ],
       
    
        workAddress: [
                     "78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.",
                     "hr@1stvirtue.com - hr@transcendpeople.com"
                ],
        iconContent: <FontAwesomeIcon icon={faCircle} />,
        icontitle: <FontAwesomeIcon icon={faPen} />,
        iconCalendar : <FontAwesomeIcon icon={faCalendar} />,
        iconAddress : <FontAwesomeIcon icon={faLocationDot} />,
        iconEmail : <FontAwesomeIcon icon={faEnvelope} />
    },
    
   
]
export  {CareersList};