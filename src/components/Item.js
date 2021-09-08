import React from "react";
import { Link } from "react-router-dom";

export const Item = ({producto}) =>{

    return(
            <p>
                {producto.id}.
                Marca: {producto.marca}.
                Modelo: {producto.modelo}.
                <Link className="mx-3" to={`/item/${producto.id}`}>Detalle</Link>
            </p>
    )
}

export default Item;