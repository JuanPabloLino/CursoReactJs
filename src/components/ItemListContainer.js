import {useEffect,useState} from "react";
import React from 'react';
import ItemList from './ItemsList'
import URL_API from "../URL"
import { useParams } from "react-router";


export const ItemListContainer = () =>{
    const {tipoAcustica,destacado,tipoElectrica} = useParams();
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
                                oferta = response.filter((e)=> e.destacado)
                                setProducto(oferta);
                            }
                            else if(tipoAcustica){
                                let typeAcustica
                                typeAcustica = response.filter((e)=> e.type === "acústica")
                                setProducto(typeAcustica);
                            }
                            else if(tipoElectrica){
                                let typeElectrica
                                typeElectrica = response.filter((e)=> e.type === "eléctrica")
                                setProducto(typeElectrica)}
                            else{setProducto(response)}
                        }))
                    ,0
                    )})};
            getItems()
            }, [destacado,tipoElectrica,tipoAcustica]);
            return (
                <section>
                    <div className="col text-center justify-content-center" >
                        <h3 className="mt-3">Nuestras Guitarras:</h3>
                            <div className="d-flex row justify-content-center">
                                < ItemList producto={productos} />
                            </div>
                        </div>
                </section>
                )
    }

export default ItemListContainer;
