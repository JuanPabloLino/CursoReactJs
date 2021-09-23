import React from "react";
import { firestore } from "../firebase";
import {useState,useEffect} from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router";

export const ItemDetailContainer = () =>{
    const {id} = useParams({});

    const [productoDetallado,setProducto] = useState([]);

        useEffect(() =>  {
            const coleccion=firestore.collection("productos")
            const query=coleccion.get()
                query.then((snapshot)=>{
                    snapshot.forEach(doc => {
                        if (doc.id === id) {
                            setProducto(doc.data())
                        }})})},[id])



        return (
        <section className="container d-flex justify-content-center py-5">
            <div className="container px-4 px-lg-5 mt-5 text-center" >
                < ItemDetail producto={productoDetallado} />
            </div>
        </section>
            )
    }


export default ItemDetailContainer;

