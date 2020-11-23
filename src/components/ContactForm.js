import React, { useRef, useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [successfulSubmit, setSuccessfulSubmit] = useState("");
    const messageCharLimit = 300;
    const formRef = useRef();

    const handleSubmitPress = (e) => {
        const all = {
            name: name,
            email: email,
            number: number,
            message: message
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...all })
          })
            .then(() => {
                    console.log(all)
                    setSuccessfulSubmit("success")
                })
            .catch(error => alert(error));
    
          e.preventDefault();
        setTimeout( () => clearTable(), 500)
        
    }

    const clearTable = () => {
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
        formRef.current.reset();
    }

    const promptFull = () => {
        
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }


    const handleMessageChange = (e) => {
        if (e.length < messageCharLimit+1){
            setMessage(e);
        } else {
            promptFull();
        }
    }
    return (
        
    <form  ref={formRef} onSubmit={(e) => handleSubmitPress(e)} className="container-fluid contact-form-wrapper" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <div className="row">
            <div className="col-12 col-lg-4 px-2">
                <div>
                    Name
                </div>
                <input name="name" style={{width:"100%"}} value={name} onChange={(e) => setName(e.target.value)} type="text" required></input>
            </div>
            <div className="col-12 col-lg-4  px-2">
                <div>
                    Email
                </div>
                <input name="email" style={{width:"100%"}} value={email} onChange={(e) => setEmail(e.target.value)} type="email" required></input>
            </div>
            <div className="col-12 col-lg-4  px-2">
                <div>
                    Phone number (opt)
                </div>
                <input name="number" style={{width:"100%"}} value={number} onChange={(e) => setNumber(e.target.value)} type="number"></input>
            </div>
        </div>
        <div className="row">
            <div className="col-12 px-2 contact-message-wrapper">
                <div className="contact-message-header">
                    <span>Say hi!</span> 
                    <span className="contact-char-counter">{message.length} / {messageCharLimit}</span>
                </div>
                <textarea name="message" style={{width:"100%", height:"200px"}} value={message} onChange={(e) => handleMessageChange(e.target.value)} type="text"></textarea>
            </div>
        </div>
        <div className="row">
            <div className="col-12 px-2 contact-button-wrapper">
                {successfulSubmit==="success" &&
                    <div>Message sent successfully.</div>
                }
                {successfulSubmit==="failure" &&
                <div></div>}
                {(successfulSubmit!=="success" && successfulSubmit!=="failure")&&<div></div>}
                <button type="submit">Send away</button>
            </div>
        </div>
    </form>
        
    );
}

export default ContactForm;