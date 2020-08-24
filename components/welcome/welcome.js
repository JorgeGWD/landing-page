import React, { useState } from 'react'
import './welcome.css'

const Welcome = () => {

    const [ data, useData ] = useState({

    })

    return (
        <div className="welcome">
            <div className="welcome-content">
                <div className="welcome-text">
                    <h1>¿Qué parte de tu cuerpo deseas mejorar hoy?</h1>
                    <p>Atendemos más de 47 tratamientos para 58 soluciones corporales y faciales en 15 años de experiencia como IPS en estética.</p>
                    <p>Inicia hoy tu proyecto de mejoramiento facial y corporal financiando tu tratamiento en cuotas sin intereses.</p>
                </div>
                <div className="form">

                </div>
            </div>
        </div>
    )
}

export default Welcome