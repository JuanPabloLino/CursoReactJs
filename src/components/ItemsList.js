import React from "react";
import Item  from "./Item";

export const ItemsList = ({productos}) => {

return(productos.length === 0 ? (
    <p>Cargando..</p>
    )   :   (
    productos.map((producto) =>(
    <Item producto={producto}/>
))))

}

export default ItemsList;
