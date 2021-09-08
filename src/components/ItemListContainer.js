import {useEffect,useState } from "react";
import React from 'react';
import ItemsList  from "./ItemsList";
import URL_API from "./URL";


export const ItemListContainer = () =>{

const [productoDetallado,setProductoDetallado] = useState([]);

//const {destacado} = useParams();

const promiseItems = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
        resolve(
            fetch(URL_API)
            .then(response => response.json())
            .then(response =>{
                setProductoDetallado(response);
            })
        )
        ,2000
        )})
    };

    useEffect(() =>  {
        promiseItems()
    }, []);
    return (
        <div className="row px-4 px-lg-5 mt-5 mb-5 text-center">
            <h3>Estas son nuestras guitarras:</h3>
            < ItemsList productos={productoDetallado} />
        </div>
        )
}

export default ItemListContainer;