import React from "react";
import Item  from "./Item";

export const ItemsList = ({producto}) => {

return(producto.length === 0 ? (
    <div className="col text-center">
                <p>Cargando..</p></div>
    )   :   (
    producto.map((producto) =>(
    <div key={producto.id} className="col">
        <Item producto={producto}/>
    </div>
))))
}

export default ItemsList;
