import React from "react";
import { useParams } from "react-router";
import URL_API from "./URL";
import { useState, useEffect } from "react";

export const DetalleDeProducto = () =>{
    const {id} = useParams();

    const [producto,setProducto] = useState([]);

    const getItem = () =>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve(
                fetch(URL_API)
                .then(response => response.json())
                .then(response =>{
                let producto
                    if(id){
                        producto = response.filter((element)=> element.id === parseInt(id,10));
                    }
                    setProducto(producto[0]);
                })
            )
            ,2000
            )})
        };
        useEffect(() =>  {
            getItem(producto)
            }, []);
            return (producto.length === 0 ? (
                <div className="container text-center">
                <p className="mt-3">Cargando..</p></div>
                )   :   (
                <div className="row justify-content-center">
                    <div className="col m-5">
                        <div key={producto.id} className="card h-100 m-5 w-25">
                        <div className="text-center "><h3 className="mt-3">Guitarra {producto.marca}</h3></div>
                            <div className="imagenGuitarra">
                                <img alt="Item" className="card-img-top imagenGuitarra m-4" src={producto.image }/>
                            </div>
                        <div className="card-body  text-center">
                            <h5 className="m-2">{producto.marca} {producto.modelo}</h5>
                        </div>
                        <div className="card-body text-center">
                            <p className="m-2 lead">Precio: {producto.price}</p>
                        </div>
                        <div className="card-body m-2 text-center">
                            <p className="mb-4 m-3 justify-content">Precio: {producto.description}</p>
                        </div>
                        <div className="card-footer p-4  pt-0 border-top-0 bg-transparent" >
                            <div className="d-flex justify-content-center">
                                <a className="btn btn-outline-dark w-50 mb-4  " href="#">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                ))
    }



