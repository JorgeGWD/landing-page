import React, { useState } from 'react'
import './contactForm.css'

const ContactForm = () => {

    const [ data, setData ] = useState({
        name: '',
        phone: '',
        email: '',
        selector: '',
        checkbox: false
    })

    const handleChange = (e) => {
        console.log(e.target.value)

        setData({
            ...data,
            [e.target.value] : e.target.name
        })
    }
    return (
        <div className="contact-form">
            <h2>Escríbenos y obtén asesoría inicial personalizada y sin costo</h2>
            <form action="">
                <input type="text" name="name" placeholder="Nombre completo" onChange={handleChange} />
                <input type="text" name="phone" placeholder="Teléfono" onChange={handleChange} />
                <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
                <select name="selector">
                    <option value="">Elija área a tratar</option>
                    <option value="">Estética facial</option>
                    <option value="">Estética corporal</option>
                    <option value="">Depilación laser</option>
                    <option value="">Estética masculina</option>
                    <option value="">Otras especialidades</option>
                </select>
                <input type="text" name="details" placeholder="¿Podría darnos más detalles?"/>
                <div className="checkbox-privaci">
                    <input type="checkbox" id="privaci"/>
                    <label htmlFor="privaci">He leído y acepto la <a href="">política de privacidad</a></label>
                </div>
                <button className="btn-default">Solicitar información</button>
            </form>
        </div>
    )
}

export default ContactForm