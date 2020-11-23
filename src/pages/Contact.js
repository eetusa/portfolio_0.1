import React, { useEffect } from 'react';
import useSite from "../api/useSite";
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const {projectState, setProjectState} = useSite();
    useEffect(() => {
        if (projectState[2]===true){
            let temp = [...projectState];
            temp[2] = false;
            setProjectState(temp);
        }
    })
    return (
        <>
            <div className="row py-2 px-0 mx-0">
                <div className="col-0 col-sm-1 px-0 mx-0"></div>
                <div className="col-12 col-sm-10 px-0 mx-0"><ContactForm/></div>
                <div className="col-0 col-sm-1 px-0 mx-0"></div>
                
            </div>
            <div className="row px-0 mx-0">
                <div className="col-0 col-sm-1 px-0 mx-0"></div>
                <div className="col-12 col-sm-10 py-2 px-2 mx-0 text-right text-muted">
                    You can also hit me up at <span className="contact-info-span">eetu . salli ( AT ) gmail ( dot ) com</span>.
                </div>
                <div className="col-0 col-sm-1 px-0 mx-0"></div>
                    
            </div>
        </>
    );
}

export default Contact;