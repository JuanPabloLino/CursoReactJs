import React from "react";
import ItemDetailContainer from "./ItemDatailContainer";

export const ItemDetail = ({productoDetalle}) =>{
    return(
        productoDetalle.length === 0 ? (
        <p>Cargando...</p>
        )   :   (
        <>
            <div key={productoDetalle.id}>Marca: {productoDetalle.marca}</div>
            <div>Modelo: {productoDetalle.modelo}</div>
            <div>Descripcion: {productoDetalle.description}</div>
            <div>Precio: {productoDetalle.price}</div>
            <div className="imagenGuitarra">Image:<img src={productoDetalle.image}/></div>

        </>
    ))

    console.log(productoDetalle.length)};



export default ItemDetail;