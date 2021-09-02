import React from "react";
import URL_API from "./URL";
import { useState } from "react";
import { useEffect } from "react";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () =>{

const getItems = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
        resolve(
            fetch(URL_API).then(response => response.json())
        )
        ,2000
        )})
    };
    const [productoDetallado,setProductoDetallado] = useState([]);
    useEffect(() =>  {
        getItems().then((productoDetallado)=>{
            const id= 1;
            const aux = productoDetallado.find(element => element.id === id)
            setProductoDetallado(aux);
        })
        }, []);
        return (
            <ItemDetail productoDetalle = {productoDetallado}/>
            )
}

export default ItemDetailContainer;