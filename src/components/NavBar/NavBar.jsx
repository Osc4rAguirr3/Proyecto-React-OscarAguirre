import React from 'react'
import './NavBar.css'
import CartWidget from '../Cartwidget/Cartwidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
    <header>
    
    <Link to="/">
        <img  className='logoIrenoved' src={"./img/logo.png"} alt="Logo Irenoved" />
    </Link>
        <nav>
            <ul>
                <li>
                <NavLink to="/"> Irenoved </NavLink>
                </li>
                <li>
                <NavLink to="/categoria/phone"> Iphones </NavLink>
                </li>
                <li>
                <NavLink to="/categoria/accesories"> Accesorios </NavLink> 
                </li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
)
}

export default NavBar