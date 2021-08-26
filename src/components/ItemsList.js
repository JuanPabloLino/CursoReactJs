
import { product } from "prelude-ls";
import { useEffect } from "react";
import { useState } from "react";
import items from "./Items"

const promiseItem = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
        resolve(items),2000
    )})};

export const ItemList = () =>{
    const [itemToShow, setItemShow] = useState([]);
    useEffect(()=>{
        promiseItem().then((item)=>{
            setItemShow(item)
        })}, []);

    return(itemToShow.length == 0 ? (
            <p>Cargando...</p>
        ) : (
                <ul>
                    {itemToShow.map((atribute) => (
                        <ul>
                            <li key ={atribute.id}>Id: {atribute.id}, Marca: {atribute.marca} , Modelo: {atribute.modelo}</li>
                        </ul>
                    ))}
                </ul>
        )
    )
}

export default ItemList;