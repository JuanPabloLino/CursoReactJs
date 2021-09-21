import { React, memo } from "react";
import Item  from "./Item";

export const ItemsList = memo (({producto}) => {
    return(producto.length === 0 ? (
        <div className="col text-center">
                    <p>Cargando..</p></div>
        )   :   (
        producto.map((producto) =>(
        <div key={producto.id}>
            <Item producto={producto}/>
        </div>
    ))))
    }
,(oldProps,newProps) => oldProps.producto.length === newProps.producto.length)



export default ItemsList;
