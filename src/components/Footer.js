import React from "react";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () =>{
    return(
        <>
            <footer className="footer__style">
                <div>
                    <div className="style__f1">
                        <h5>Sobre Nosotros</h5>
                    </div>
                    <div className="style__f2">
                    <h5>Productos</h5>
                        <a href="/">Nuestras Guitarras</a>
                        <a href="/guitarra/:tipoElectrica">Eléctricas</a>
                        <a href="/:tipoAcustica">Acústicas</a>
                        <a href="/categoria/:sale">Ofertas</a>
                    </div>
                    <div className="style__f3">
                    <h5>Seguinos</h5>
                        <div className="socialMedia">
                            <div className="mediaIconons"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}/></a></div>
                            <div className="mediaIconons"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/?hl=es"><FontAwesomeIcon icon={faInstagram} /></a></div>
                            <div className="mediaIconons"><a target="_blank" rel="noreferrer" href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube }/></a></div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;