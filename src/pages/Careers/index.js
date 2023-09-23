import { useState } from 'react';
import Modal from 'react-modal';
import hiringDataProcessing from '../../Image/Careers/hiring_dataProcessing.png'
import { CareersList } from '../../components/Careers';
import careersStyle from  './careers.module.scss'

const Careers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState();
    
    const openModal = (content) => {
        setModalContent(content);
        setModalIsOpen(true);
    } 
    const closeModal = () =>{
        setModalIsOpen(false);
    }
    return ( 
       <>
            
                <div>
                    {CareersList.map((job) => (
                        <div key={job.ID}>
                            
                        <h2>{job.jobName}</h2>
                        <h3>Date Published: {job.datePublish}</h3>
                        <h3>title: {Object.keys(job.title).map((titleKey, index) => { return (<div key={index}>{titleKey}</div>) } )}</h3>
                        <ul>
                            {job.title && job.title.jobMission && job.title.jobMission.map((mission, missionIndex) => (
                            <li key={missionIndex}>{mission}</li>
                            ))}
                        </ul>
                        </div>
                    ))}
            </div>
            <Modal  isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel = 'MOdal Example'
            >
                <h2>Content</h2>
                <p>{modalContent}</p>
                <button onClick={closeModal}>Close</button>
            </Modal>           
        
       </>
    )
}

export default Careers;