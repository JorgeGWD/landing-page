import React, { useState } from 'react'
import './welcome.css'
import ContactForm from '../contactForm/contactForm'

const Welcome = () => {

    const [ data, useData ] = useState({

    })

    return (
        <div className="welcome">
            <div className="welcome-content">
                <div className="welcome-text">
                    <h1>¿Qué parte de tu cuerpo deseas mejorar hoy?</h1>
                    <hr/>
                    <p>Atendemos más de <span>47 tratamientos para 58 soluciones</span> corporales y faciales en 15 años de experiencia como IPS en estética.</p>
                    <p>Inicia hoy tu proyecto de mejoramiento facial y corporal financiando <span>tu tratamiento en cuotas sin intereses</span>.</p>
                </div>
                <div className="form">
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Welcome