import CartWidget from "./CartWidget"
import {Link} from "react-router-dom";
import React from 'react';

const NavBar = () => {
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top barraEstilo">
    <div className=" navbarCss container-fluid">
        <nav className="navbar navbar-inverse">
            <div className="container-fluid ">
            <ul className="nav navbar-nav menuPrincipal">
                <li className="nav-link" ><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-link" ><Link className="nav-link" to="/item">Nuestros productos</Link></li>
                <li className="nav-link" ><Link className="nav-link" to="/categoria/:destacado">Nuestras ofertas</Link></li>
                <li className="nav-link" ><Link className="nav-link" to="/nosotros">Sobre Nosotros</Link></li>
                <li><CartWidget/></li>
            </ul>
            </div>
        </nav>
    </div>
</nav>
    )}


export default NavBar;