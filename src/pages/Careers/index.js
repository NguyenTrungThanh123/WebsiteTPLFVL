import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from 'react';
import Modal from 'react-modal';
import { CareersList } from '../../components/Careers';

const Careers = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalID, setModalID] = useState(0);
    
    const openModal = (ID) => {
        setModalIsOpen(true);
        setModalID(ID);
    } 
    const closeModal = () =>{
        setModalIsOpen(false);
    }
    return (  
        <>
            <div>
                {
                    CareersList.map((career, index) =>{
                        return (
                            <>
                                <div key={index}>
                                    <div>{career.image}</div>
                                    <div>{career.jobName}</div>
                                    <div>{career.iconCalendar}{career.datePublish}</div>
                                    {
                                        career.description.map((descItem,index) => {
                                            return (
                                                index === 0 && <div key={index} > 
                                                    <div>{career.icontitle}{descItem.title}</div>
                                                    {
                                                        descItem.content.map((contentItem,index) => <div key={index}>{career.iconContent}{contentItem}</div>)
                                                    }
                                                </div>  
                                            )  
                                        })
                                    }
                                </div>
                                <button type="button" onClick={() => openModal(index)}>Job Detail</button>
                                <a href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer">Apply Now</a>
                            </>
                        )
                    })
                }
            </div>
            <Modal  isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel = 'MOdal Example'
            >
                {
                    CareersList.map((career, index) =>{
                        return (
                          index === modalID &&  <div>
                              <div key={index}>
                                    <div>{career.jobName}</div>
                                    <div>{career.iconCalendar}{career.datePublish}</div>
                                    {
                                        career.description.map((descItem,index) => {
                                            return (
                                                <div key={index} > 
                                                    <div>{career.icontitle}{descItem.title}</div>
                                                    {
                                                        descItem.content.map((contentItem,index) => <div key={index}>{career.iconContent}{contentItem}</div>)
                                                    }
                                                </div>  
                                            )  
                                        })
                                    }
                                </div>
                                <a href="https://forms.gle/61BoPx74zQTUhxRH6" target="_blank" rel="noopener noreferrer">Apply Now</a>
                            </div>
                        )
                    })
                }
               
                <button onClick={closeModal}>Close</button>
            </Modal>           
        
       </>
    )
}

export default Careers;