import React from "react";
import Guitar from "../Images/Guitar.png"


const Footer = () =>{
    return(
        <>
            <footer className="footer__style">
                <div className="">
                    <div className="style__f1">
                        <h5>Sobre Nosotros</h5>
                        <small className="d-block mb-3 text-muted">© 2021</small>
                    </div>
                    <div className="style__f2">
                    <h5>Productos</h5>
                        <a href="https://www.google.com/">Nuestras Guitarras</a>
                        <a href="https://www.google.com/">Eléctricas</a>
                        <a href="https://www.google.com/">Acústicas</a>
                        <a href="https://www.google.com/">Ofertas</a>
                    </div>
                    <div className="style__f3">
                    <h5>Seguinos</h5>
                        <small className="d-block mb-3 text-muted">© 2021</small>
                    </div>
                    <div className="style__f4">
                    <img alt="imagen"className="mb-2" width={100} height={100} src={Guitar}></img>
                        <small className="d-block mb-3 text-muted">© 2021</small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;