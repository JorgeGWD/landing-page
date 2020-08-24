import React, { useState } from 'react'
import './ourAdvantages.css'
import chatBubble from '../../assets/chat-bubble.svg'
import thumbsUp from '../../assets/thumbs-up.svg'
import diamond from '../../assets/diamond.svg'

const OurAdvantages = () => {

    const [ data, useData] = useState([
        {
            id: 1,
            icon: chatBubble,
            title: `Consulta sin costo`,
            content: `Tus consultas con nuestros especialistas no tienen costo. Puedes consultar con ellos cualquiera de las 58 categorías de tratamientos.`
        },
        {
            id: 2,
            icon: thumbsUp,
            title: `Garantía de satisfacción`,
            content: `Damos garantía que al finalizar un tratamiento si no quedas satisfecho, lo repetiremos*. (Aplica condiciones y restricciones).`
        },
        {
            id: 3,
            icon: diamond,
            title: `Cifes Premium`,
            content: `Al vincularte como paciente regular te acreditarán cliente Premium con beneficios en formaciones, descuentos y regalos especiales.`
        }
    ])

    return (
        <div className="our-advantages">
            <div className="our-advantages-content">
                <h2>Nuestras ventajas</h2>
                <hr/>
                <div className="our-advantages-cards">
                    {
                        data.map((data, key) => 
                        <div className="card-box" key={key}>
                            <img src={data.icon} alt=""/>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                        </div>
                        )
                    }
                </div>
                <button className="btn-withe">Solicitar información</button>
            </div>
        </div>
    )
}

export default OurAdvantages