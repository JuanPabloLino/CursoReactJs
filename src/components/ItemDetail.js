import  { useContext,React, useState} from "react";
import ItemCount from "./ItemCount"
import { Link } from "react-router-dom";
import { contexto } from "../context/CartContext";

export const ItemDetail = ({producto}) =>{
    const [Compra, setCompra] = useState(false);
    const {addProducto} = useContext(contexto);

    function onAdd(cantidad) {
        setCompra(true)
        addProducto(producto,cantidad)
    }
        return(producto.length === 0 ? (
            <div className="col text-center">
                <p>Cargando..</p></div>
                )   :   (
                <div className="row vistaProductoDetallada justify-content-center">
                    <div className="col m-5">
                        <div key={producto.id} className="card h-100 mb-4">
                            <div className="text-center ">
                                <h3 className="mt-3">Guitarra {producto.marca}</h3>
                            </div>
                            <div className="imagenGuitarra">
                                <img alt="Item" className="card-img-top imagenGuitarra m-4" src={producto.image}/>
                            </div>
                            <div className="card-body  text-center">
                                <h5 className="m-2">{producto.marca} {producto.modelo}</h5>
                            </div>
                            <div className="card-body text-center">
                                <p className="m-2 lead">Precio: ${producto.price}</p>
                            </div>
                            <div className="card-body m-2 text-center">
                                <p className="mb-4 m-3 justify-content">Precio: {producto.description}</p>
                            </div>
                            <div className="">
                            {Compra === false ? (<ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />):
                        <div>
                            <div>
                                <Link to="/"><button className="btn btn-outline-dark m-2">Seguir comprando</button></Link>
                            </div>
                            <div>
                                <Link to="/chango/cart"><button className="btn btn-outline-dark m-2">Finalizar Compra</button></Link>
                            </div>
                        </div>
                        }
                            </div>
                        </div>
                    </div>
                </div>
                )
        )};

export default ItemDetail;

