import { React, memo } from "react";
import Item  from "./Item";
import { Spinner } from "react-bootstrap";

export const ItemsList = memo (({producto}) => {
    return(producto.length === 0 ? (
        <div className="containerCargando">
                    <Spinner className="spinnerCarga" animation="border" />
        </div>
    ):(
        producto.map((producto) =>(
        <div key={producto.id}>
            <Item producto={producto}/>
        </div>
        ))
    ));
}
,(oldProps,newProps) => oldProps.producto.length === newProps.producto.length);



export default ItemsList;
