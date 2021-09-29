import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { React } from 'react';


const NavBar = () => {

    return(
        <>
            <nav className="navbar navbar__estilo navbar-expand-lg navbar-dark bg-dark static-top barraEstilo">
            <div><h5 className="navbar__titulo1">DoMenor</h5><h5 className="navbar__titulo2">Guitarras</h5><p className="material-icons navbar__titulo2">music_note</p></div>
                <div className=" navbarCss container-fluid">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid ">
                        <ul className="nav navbar-nav menuPrincipal">
                            <li><Link className="nav-link" to="/">Productos</Link></li>
                            <li><Link className="nav-link" to="/categoria/:sale">Ofertas</Link></li>
                            <li><Link className="nav-link" to="/:tipoAcustica">Acústicas</Link></li>
                            <li><Link className="nav-link" to="/guitarra/:tipoElectrica">Eléctricas</Link></li>
                            <li><Link className="nav-link" to="/nosotros">Sobre Nosotros</Link></li>
                            <li><Link className="nav-link" to="/chango/cart"><CartWidget/></Link></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </nav>
    </>
    )}


export default NavBar;