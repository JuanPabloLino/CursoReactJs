import {useEffect,useState} from "react";
import React from 'react';
import ItemList from './ItemsList'
import URL_API from "./URL";
import { useParams } from "react-router";


export const ItemListContainer = () =>{
    const {destacado} = useParams();
    const [productos,setProducto] = useState([]);

        useEffect(() =>  {
            const getItems = () =>{
                return new Promise((resolve,reject)=>{
                setTimeout(()=>
                    resolve(
                        fetch(URL_API)
                        .then(response => response.json())
                        .then(response =>{
                            if(destacado){
                                let oferta
                                oferta = response.filter((element)=> element.destacado === true);
                                setProducto(oferta);
                            }else{setProducto(response)}
                        }))
                    ,2000
                    )})};
            getItems()
            }, [destacado]);
            return (
                <section className="container py-5">
                    <div className="container px-4 px-lg-5 mt-5 text-center" >
                    <h3>Nuestras Guitarras:</h3>
                        <div className="col gx-4 gx-lg-5 row-cols-2  row-cols-xl-4 justify-content-center ">
                            < ItemList producto={productos} />
                        </div>
                    </div>
                </section>
                )
    }

export default ItemListContainer;
