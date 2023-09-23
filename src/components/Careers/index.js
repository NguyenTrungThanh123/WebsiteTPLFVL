import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircle} from "@fortawesome/free-solid-svg-icons";
const CareersList = [
    {
        ID: 2,
        jobName: 'DATA PROCESSING STAFF 2', 
        datePublish: 'March 30, 2023',
        title: 'Job Mission:',
        iconCircle : <FontAwesomeIcon icon={faCircle} />,
        jobMission: [
            "Receive records, photos, documents, and requests from customers.",
            "Processing information, Key/VR/RS/Preqc and accurately extracting information according to customer requirements.",
            "Enter the extracted information on the customer's system.",
            "Report work at the request of the Team Leader.",
            "Perform other jobs as assigned by the Team Leader."
        ]
    },
    {
        ID: 1,
        jobName: 'DATA PROCESSING STAFF', 
        datePublish: 'March 30, 2023',
        title: 'Job Mission:',
        iconCircle : <FontAwesomeIcon icon={faCircle} />,
        jobMission: [
            "Receive records, photos, documents, and requests from customers.",
            "Processing information, Key/VR/RS/Preqc and accurately extracting information according to customer requirements.",
            "Enter the extracted information on the customer's system.",
            "Report work at the request of the Team Leader.",
            "Perform other jobs as assigned by the Team Leader."
        ]
    },
]
export  {CareersList};