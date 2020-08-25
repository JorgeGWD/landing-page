import React from 'react'
import './about.css'

const About = () => {

    const styling = {
        backgrounImage: 'url()'
    }

    return (
        <div className="about" style={styling}>
            <div className="about-content">
                <div className="about-text">
                    <h2>Acerca de CIFES IPS</h2>
                    <hr/>
                    <p>Contamos con expertos profesionales en medicina estética con más de 47 tratamientos para 58 soluciones corporales y faciales que hacen de nuestras clínicas IPS las mejores del país.</p>

                    <p>Cada uno de nuestros tratamientos se encuentran protocolizados para no dejar al azar cada detalle técnico y estético llevando registro fotográfico del proceso para evidenciar tus resultados y alcances tu satisfacción.</p>

                    <p>Podrás realizar citas de control al finalizar cualquier tratamiento para que chequees tus postcuidados.</p>

                    <p>Contamos con todos los permisos legales por la secretaría de salud y equipos biomédicos de última tecnología que garantizan la rapidez y calidad de cada sesión y te sientas en manos de profesionales.</p>

                    <p>Disponemos de una ubicación especial en Bogotá para facilitar los desplazamientos.</p>
                    <button className="btn-withe-blue">Solicitar información</button>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default About
