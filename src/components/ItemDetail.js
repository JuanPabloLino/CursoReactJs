import React from "react";
import ItemCount from "./ItemCount"

export const ItemDetail = ({producto}) =>{

    const onAdd = (cantidad) => {
       // const productoConFormato = {cantidad}
    }

            return(producto.length === 0 ? (
                <div className="col text-center">
                <p>Cargando..</p></div>
                )   :   (
                <div className="row justify-content-center">
                    <div className="col m-5">
                        <div key={producto.id} className="card h-100 m-5 w-25">
                            <div className="text-center ">
                                <h3 className="mt-3">Guitarra {producto.marca}</h3>
                            </div>
                            <div className="imagenGuitarra">
                                <img alt="Item" className="card-img-top imagenGuitarra m-4" src={producto.image }/>
                            </div>
                            <div className="card-body  text-center">
                                <h5 className="m-2">{producto.marca} {producto.modelo}</h5>
                            </div>
                            <div className="card-body text-center">
                                <p className="m-2 lead">Precio: {producto.price}</p>
                            </div>
                            <div className="card-body m-2 text-center">
                                <p className="mb-4 m-3 justify-content">Precio: {producto.description}</p>
                            </div>
                            <div className="text-center justify-content-center">
                                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                            </div>
                        </div>
                    </div>
                </div>
                )
        )};

export default ItemDetail;

