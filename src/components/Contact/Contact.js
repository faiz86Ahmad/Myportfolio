import React, { useState } from 'react'
import "./contact.scss";

const Contact = () => {
    const [Message,setMessage]  = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">

            <div className="left">
                <img src="assets/shake.svg" alt="shake" />
            </div>
            <div className="right">
                <h2>Contact</h2>

                <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" />
                <textarea placeholder="Enter Message..."></textarea>
                <button type="submit">Send</button>
                 {Message && <span>Thanks,I'll reply ASAP :)</span>}
                </form>
            </div>
            
        </div>
    )
}

export default Contact;
