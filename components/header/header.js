import React, { useState } from 'react'
import './header.css'
import Logo from '../logo/logo'

const Header = () => {

    const [ data, useData ] = useState({
        phoneNumber: '744 8989',
        extNumber: '601 - 316 509 5657'
    })

    return (
        <div>
            <Logo />
            <h2>Llámenos ahora: {data.phoneNumber}</h2>
        </div>
    )
}

export default Header