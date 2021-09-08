import React from "react";
import URL_API from "./URL";
import { useState,useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

export const ItemDetailContainer = () =>{

const [productoDetallado,setProductoDetallado] = useState([]);

const {destacado} = useParams();

const getItems = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
        resolve(
            fetch(URL_API)
            .then(response => response.json())
            .then(response =>{
            let oferta
                if(destacado){
                    oferta = response.filter((element)=> element.destacado === true);
                }
                setProductoDetallado(oferta);
            })
        )
        ,2000
        )})
    };

    useEffect(() =>  {

        getItems()
        }, [destacado]);
        return (
            <section className="container py-5">
                <div className="container px-4 px-lg-5 mt-5 text-center" >
                <h3>Ofertas:</h3>
                    <div className="row gx-4 gx-lg-5 row-cols-2  row-cols-xl-4 justify-content-center ">
                        < ItemDetail productos={productoDetallado} />
                    </div>
                </div>
            </section>
            )
}

export default ItemDetailContainer;
