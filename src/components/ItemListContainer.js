import items from "./Items"
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemsList";

const ItemListContainer = () => {

    const promiseItem = () =>{
        return new Promise((resolve,reject)=>{
        setTimeout(()=>
            resolve(items),2000
        )})};
        const [itemToShow, setItemShow] = useState([]);
        useEffect(()=>{
            promiseItem().then((item)=>{
                setItemShow(item)
            })}, []);

        return(
            <ItemList/>
        )
    }

export default ItemListContainer;