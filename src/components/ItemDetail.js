import React from "react";

export const ItemDetail = ({productos}) =>{
    return(
        productos.length === 0 ? <div className="container"><p>Cargando...</p> </div> :
        <div>
        {productos.map( (productos) =>{
            return(
                <div key={productos.id} className="col m-5 ">
                    <div key={productos.id}className="card m-5 w-25">
                    <div className="text-center "><h3 className="mt-3">Guitarra {productos.marca}</h3></div>
                        <div className="imagenGuitarra">
                            <img alt="Item" className="card-img-top imagenGuitarra m-5 " src={productos.image }/>
                        </div>
                        <div className="card-body p-2 text-center m-5">
                            <h6 className="m-3">{productos.marca} {productos.modelo}</h6>
                        </div>
                        <div className="card-body p-4 text-center m-5 mb-5">
                            <a>Precio: {productos.price}</a>
                        </div>
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent mx-5" >
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-dark mx-5 mb-3 mt-3 w-50" href="#">Detalle</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-dark mx-5 mb-5 w-50 " href="#">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
        )})}
        </div>
    )
};

export default ItemDetail;

