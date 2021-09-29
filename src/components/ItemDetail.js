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
    };
        return(producto.length === 0 ? (
            <div className="containerCargando"><p>Cargando..</p></div>
        ):(
            <div>
                    <div key={producto.id} className="p-3 vistaProductoDetallada">
                        <div className="vistaProductoDetallada1">
                            <div className="text-center ">
                                <h3 className="mt-3">Guitarra {producto.mark}</h3>
                            </div>
                            <div className="imagenGuitarra">
                                <img alt="Item" className="card-img-top imagenGuitarra m-4" src={producto.image}/>
                            </div>
                            <div className="card-body  text-center">
                                <h5 className="m-2">Modelo: {producto.model}</h5>
                            </div>
                        </div>
                        <div className="vistaProductoDetallada2">
                            <div className="card-body m-2 text-center">
                            <h5 className="mb-1">Descripción:</h5>
                                <p>{producto.description}</p>
                                <p className="m-2 lead">Precio: ${producto.price}</p>
                            </div>
                            {Compra === false ? (<ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                            ):(
                            <div>
                                <div>
                                    <Link to="/"><button className="btn btn-outline-dark m-2">Seguir comprando</button></Link>
                                </div>
                                <div>
                                    <Link to="/chango/cart"><button className="btn btn-outline-dark m-2">Finalizar Compra</button></Link>
                                </div>
                            </div>
                            )
                        }
                        </div>
                        </div>
                    </div>
        ))
};

export default ItemDetail;

