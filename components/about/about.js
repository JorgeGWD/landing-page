import React from 'react'
import './about.css'
import Link from 'next/link'

const About = () => {
    return (
        <div className="about">
            <style jsx>{`
                .about {
                    background-image: url(${require("../../assets/about-bg.jpg")});
                    background-size: cover;
                    background-position: botton left;
                    background-attachment: fixed;
                }
            `}</style>
            <div className="about-content">
                <div className="about-text">
                    <h2>Acerca de LUVANIA Innovación estética</h2>
                    <hr/>
                    <p>Financiamos tu proyecto de mejoramiento corporal sin intereses con garantía, efectividad y control post tratamiento.</p>

                    <p>Contamos con expertos profesionales en el área estética con más de 47 tratamientos para 58 soluciones corporales y faciales que hacen de nuestros centros los mejores del país</p>

                    <p>Cada uno de nuestros tratamientos se encuentran protocolizados para no dejar al azar cada detalle técnico y estético llevando registro fotográfico del proceso para evidenciar tus resultados y alcances tu satisfacción.</p>

                    <p>Podrás realizar citas de control al finalizar cualquier tratamiento para que chequees tus postcuidados.</p>

                    <p>Contamos con todos los permisos legales por la secretaría de salud y equipos de última tecnología que garantizan la rapidez y calidad de cada sesión y te sientas en manos de profesionales.</p>

                    <p>Disponemos de 3 sedes en Bogotá para facilitar los desplazamientos.</p>

                    <Link href="#contact">
                        <button className="btn-withe-blue">Solicitar información</button>
                    </Link>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default About
