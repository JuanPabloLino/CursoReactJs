import React from "react";
import Item  from "./Item";

export const ItemsList = ({productos}) => {
return(productos.length === 0 ? (
    <div className="row text-center">
                <p>Cargando..</p></div>
    )   :   (
    productos.map((producto) =>(
    <div key={producto.id} className="row">
        <Item producto={producto}/>
    </div>
))))
}

export default ItemsList;
