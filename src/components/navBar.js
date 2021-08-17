import CartWidget from "./CartWidget"

const NavBar = () => {
    return(<nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top barraEstilo">
    <div className="container-fluid">
        <nav className="navbar navbar-inverse">
            <div className="container-fluid ">
            <ul className="nav navbar-nav menuPrincipal">
                <li className="nav-link" ><a className="nav-link" href="#">Home</a></li>
                <li className="nav-link" ><a className="nav-link" href="#">Nuestros productos</a></li>
                <li className="nav-link" ><a className="nav-link" href="#">Nuestras ofertas</a></li>
                <li className="nav-link" ><a className="nav-link" href="#">Sobre Nosotros</a></li>
                <li><CartWidget/></li>
            </ul>
            </div>
        </nav>
        
    </div>
</nav>
    )}


export default NavBar;