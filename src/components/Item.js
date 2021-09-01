import React from "react"


export const Item = ({producto}) =>{
    return(
        <li key={producto.id}>Marca: {producto.marca} , Modelo: {producto.modelo}</li>
    )
}


export default Item;