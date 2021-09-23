import { React, useContext, useEffect, useState } from "react";
import { contexto } from "../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {Carrito,removeProduct,clear} = useContext(contexto);
    const[PrecioTotal,setPrecioTotal] = useState(0);

    useEffect( () => {
    const precioTotal = () => {

        let todosLosProductos = 0
        for (const e of Carrito){
            todosLosProductos += e.cantidad * e.producto.price
        }
        setPrecioTotal(todosLosProductos)
    }
    precioTotal()
    }, [removeProduct,Carrito]);

    return(
        <>
        {Carrito.length===0 ?(<div><p>No hay Producto en el carrito</p><Link to="/"><p>Volver a la tienda</p></Link></div>):
            (
            <div>
                <div className="d-flex align-items-center justify-content-space-evenly">
                    <div className="row mt-5 justify-content-center w-25">
                        <h2 className="text-center">Tu carrito:</h2>
                            {Carrito.map(
                                e =>
                                <div key={e.producto.id} className="card m-2 w-75 justify-content-center " >
                                    <div className="d-flex justify-content-center">
                                        <img className="imagenCarrito mt-3" alt="Imagen" src={e.producto.image} />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="mt-5">{e.producto.mark} {e.producto.model} (X{e.cantidad})</p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="btn btn-danger mb-3 w-50" onClick={()=>removeProduct(e.producto.id)} >Eliminar producto</button>
                                    </div>
                                </div>
                            )}
                    </div>
                    <div className="card m-2 row text-center">
                        <p className="mt-2">Total de su compra : $ {PrecioTotal}</p>
                        <div className="justify-content-center">
                            <div>
                                <a className="nav-link"><button className="btn btn-success w-100">Realizar Pago</button></a>
                            </div>
                            <div>
                                <Link to="/" className="nav-link" ><button className="btn btn-secondary w-100">Ver mas productos</button></Link>
                            </div>
                            <div>
                                <a className="nav-link"><button className="btn btn-danger w-100" onClick={()=>clear()}>Limpiar Carrito</button></a>
                            </div>
                            <div className="d-flex text-center justify-content-center">
                                <p className="mx-2">Envío Gratis</p><p className="material-icons">local_shipping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}

        </>
    )
}



export default Cart