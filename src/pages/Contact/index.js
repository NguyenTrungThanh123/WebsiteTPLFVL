import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import home from '../Home/home.module.scss';
import contact from '../Contact/contact.module.scss';

import Iframe from "react-iframe";
const Contact = () => {
    const contactList = [
        { title: 'VoIP:', content: ['+1 (650) 472 2233 (USA)'] },
        { title: 'Phone:', content: ['+ (84) 28 3948 4086 (Vietnam)'] },
        { title: 'General Inquiries:', content: ['info@1stvirtue.com - info@transcendpeople.com'] },
        { title: 'Careers:', content: ['hr@1stvirtue.com - hr@transcendpeople.com'] },
        {
            title: 'Address:', content: [
                'First Virtue Limited Liability Company',
                'Transcend People Limited Liability Company',
                '78/2A Binh Loi, Ward 13, Binh Thanh District, Ho Chi Minh City, Vietnam.'
            ]
        },
    ]

    return (
        <>
            <div className={home.content}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className={contact.ctcContent}>
                                <h6>
                                    Please contact our managers to learn more about how your business can make the most of business process outsourcing (BPO) solutions.
                                    Any information you provide will be kept strictly confidential. We look forward to hearing from you.
                                </h6>
                                {
                                    contactList.map((contactItem, index) => {
                                        return (
                                            <div className="" key={index}>
                                                <h6>{contactItem.title}</h6>
                                                {
                                                    contactItem.content.map((contentItem, index) => {
                                                        return (
                                                            <div className="">
                                                                <p>{contentItem}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7664454057117!2d106.70432401515346!3d10.829177192285716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bc115d2bfb%3A0x44aef6a404d4fbaa!2s1st%20Virtue%20Ltd.!5e0!3m2!1sen!2s!4v1679882255371!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen=""
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;