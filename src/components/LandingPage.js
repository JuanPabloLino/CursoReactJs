import React from "react";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
            <div>
                <h1 className="titlePortada">Bienvenido</h1>
                <div className="containerPotada"><img className="portadaInicio" alt="FondoPortada" src="https://scontent.faep9-2.fna.fbcdn.net/v/t31.18172-8/20626296_1405315612908752_4329081783784558777_o.jpg?_nc_cat=107&ccb=1-5&_nc_sid=973b4a&_nc_ohc=yynIzuqQV-gAX-yjEpR&_nc_ht=scontent.faep9-2.fna&oh=73eda2549ae775d2ea4638afae0a90ec&oe=615C8208"></img></div>
                <div>
                    <ul className="buttonsHome">
                        <li className="nav-link"><button><Link className="nav-link" to="/item">Nuestros productos</Link></button></li>
                        <li className="nav-link"><button><Link className="nav-link" to="/categoria/:destacado">Nuestras ofertas</Link></button></li>
                        <li className="nav-link"><button><Link className="nav-link" to="/nosotros">Sobre Nosotros</Link></button></li>
                    </ul>
                </div>
            </div>
    )
}

export default Home;