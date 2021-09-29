import React from "react";

const Footer = () =>{
    return(
        <>
            <footer className="footer__style">
                <div>
                    <div className="style__f1">
                        <h5>Sobre Nosotros</h5>
                        <small className="d-block mb-3">© 2021</small>
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
                        <small className="d-block mb-3">© 2021</small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;