import { React } from "react";
import { Link } from "react-router-dom";

export const Item = ({producto}) =>{

    return(
            <div className="row justify-content-center m-5">
                <div className="col m-5">
                    <div key={producto.id} className="d-flex card vistaProducto text-aling-center justify-content-between">
                        <div className="text-center ">
                            <h3 className="m-3">Guitarra {producto.mark}</h3>
                        </div>
                        <div className="imagenGuitarraLista">
                            <img alt="Item" className="card-img-top m-4" src={producto.image }/>
                        </div>
                        <div className="card-body  text-center">
                            <h4 className="m-2">{producto.mark}</h4>
                            <h5>{producto.model}</h5>
                        </div>
                        <div className="text-center justify-content-center">
                            <div className="d-flex justify-content-center mt-3 mb-3">
                            <Link to={`/item/${producto.id}`}><button className="btn btn-outline-dark m-2">Detalle</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;