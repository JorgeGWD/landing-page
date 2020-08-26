import React, { useState } from 'react'
import './facialAesthetics.css'
import TabManager from '../tabs/tabs'

const FacialAesthetics = () => {

    const TABS = [
        { 
            label: "Eliminación de arrugas",
            value: 1,
            title: "Líneas de expresión, arrugas profundas y finas",
            text: "Tratamiento para surco nasogeniano, líneas marioneta, arrugas de frente, ojos, boca con láser CO2, toxina botulínica, ácido hialurónico, plasma, dermapen e hilos tensores."
        },
        {
            label: "Perfilamiento facial y flacidez",
            value: 2,
            title: "Ojeras, flacidez facial moderada a severa",
            text: "Tratamiento para ojeras, papada, perfilamiento de labios, pómulos, mentón, flacidez en cuello y manos, rinomodelación (perfilamiento de nariz) con hidroxiapatita de calcio, vital firm, radiofrecuencia 3G,  plasma e hilos tensores entre otros. "
        },
        {
            label: "Eliminación de manchas",
            value: 3,
            title: "Manchas, melasmas, pecas y lunares",
            text: "ratamiento para Manchas rojas, manchas marrones difusas y extensas pecas y lunares con peeling, laser tatoo, cosmelan  y láser de CO2."
        },
        {
            label: "Eliminación de Acné",
            value: 4,
            title: "Acné leve, severo y cicatrices",
            text: "Tratamiento para Acné comedogénico, conglobata y cicatrices profundas con autosanguis, biorevitalización, detoxificación y láser de CO2 fraccionado."
        }
      ];

    const [ activeTab, handleTab ] = useState(1);

    return (
        <div className="container">
            <div className="content">
                <div className="content-data">
                    <h1>Estética Facial</h1>
                    <hr/>
                    <div className="treatment-data">
                        <p>37 Tratamientos | 21 Zonas de tu cara a tratar</p>
                        <h3>Selecciona tu área de interés:</h3>
                    </div>
                    <div className="tabs-container">
                        <TabManager tabs={TABS} activeTab={activeTab} handleTab={handleTab} />
                        <div className="tab-content">
                            <div>{activeTab}</div>
                            <button className="btn-default-hover">Agenda tu cita</button>
                        </div>
                    </div>
                </div>
                <div className="content-img">
                    <style jsx>{`
                        .content-img {
                            background-image: url(${require("../../assets/facial.jpg")});
                            background-size: cover;
                            background-position: center;
                        }
                    `}</style>
                </div>
            </div>
        </div>
    )
}

export default FacialAesthetics