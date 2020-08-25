import React from 'react'
import './contact.css'
import ContactForm from '../contactForm/contactForm'

const Contact = () => {
    return (
        <div className="contact">
            <style jsx>{`
                .contact {
                    background-image: url(${require("../../assets/contact-bg.jpg")});
                    background-size: cover;
                    background-position: botton left;
                }
            `}</style>
            <div className="contact-content">
                <ContactForm />
                <div className="contact-data">

                </div>
            </div>
        </div>
    )
}

export default Contact