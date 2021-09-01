import { useEffect } from "react";
import { useState } from "react";
import ItemsList  from "./ItemsList";

export const ItemListContainer = () =>{

const promiseItems = () =>{
    return new Promise((resolve,reject)=>{
    setTimeout(()=>
        resolve(
        [{id:1,marca:'Yamaha',modelo:'FG800M'},
        {id:2,marca:'Epiphone',modelo:'EJ200'},
        {id:3,marca:'Guild',modelo:'D240E'},
        {id:4,marca:'Takamine',modelo:'EF341'}
        ]),2000
    )})
};
    const [itemToShow, setItemShow] = useState([]);
    useEffect(()=>{
        promiseItems().then((item)=>{
            setItemShow(item)
        })}, []);
        return (<ItemsList productos={itemToShow}/>)
}

export default ItemListContainer;