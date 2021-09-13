import React from "react";
import URL_API from "./URL";
import {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

export const ItemDetailContainer = () =>{
    const {id} = useParams();

    const [productoDetallado,setProducto] = useState([]);

        useEffect(() =>  {
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
            getItem()
        }, [id]);
        return (
        <section className="container py-5">
            <div className="container px-4 px-lg-5 mt-5 text-center" >
                < ItemDetail producto={productoDetallado} />
            </div>
        </section>
            )
    }


export default ItemDetailContainer;

