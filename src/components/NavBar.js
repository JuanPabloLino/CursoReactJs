import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
import { React } from 'react';


const NavBar = () => {

    return(
        <>
            <nav className="navbar navbar__estilo navbar-expand-lg navbar-dark bg-dark static-top barraEstilo">
            <div><Link className="linkNavbar" to="/"><h5 className="navbar__titulo1">DoMenor</h5><h5 className="navbar__titulo2">Guitarras</h5><p className="material-icons navbar__titulo2">music_note</p></Link></div>
                <div className=" navbarCss container-fluid">
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid ">
                        <ul className="nav navbar-nav menuPrincipal">
                            <li><Link className="nav-link" to="/sale">Ofertas</Link></li>
                            <li><Link className="nav-link" to="/categoria/2">Acústicas</Link></li>
                            <li><Link className="nav-link" to="/categoria/1">Eléctricas</Link></li>
                            <li><Link className="nav-link" to="/chango/cart"><CartWidget/></Link></li>
                        </ul>
                        </div>
                    </nav>
                </div>
            </nav>
    </>
    )}


export default NavBar;