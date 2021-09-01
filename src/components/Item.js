import React from "react"


export const Item = ({producto}) =>{
    return(
        <div key={producto.id}>Marca: {producto.marca} , Modelo: {producto.modelo}</div>
    )
}


export default Item;