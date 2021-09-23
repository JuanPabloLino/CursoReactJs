import {useEffect,useState} from "react";
import React from 'react';
import ItemList from './ItemsList'
import { useParams } from "react-router";
import { firestore } from "../firebase";


export const ItemListContainer = () =>{
    const {tipoAcustica,sale,tipoElectrica} = useParams();
    const [productos,setProducto] = useState([]);

        useEffect(() =>  {
            const collection = firestore.collection("productos");
            if(sale){
            const query = collection.where("sale","==",true).get();
                query
                    .then((snapshot)=>{
                        const docs = snapshot.docs;
                        const productos = [];
                        docs.forEach((doc)=>{
                            const docSnapshot = doc;
                            let producto = {...docSnapshot.data(),id:docSnapshot.id}
                            productos.push(producto);
                        })
                        setProducto(productos)})}else if(tipoAcustica){
                            const query = collection.where("type","==","acústica").get();
                        query
                            .then((snapshot)=>{
                            const docs = snapshot.docs;
                            const productos = [];
                            docs.forEach((doc)=>{
                                const docSnapshot = doc;
                                let producto = {...docSnapshot.data(),id:docSnapshot.id}
                                productos.push(producto);
                        })
                        setProducto(productos)})
                        }else if(tipoElectrica){
                            const query = collection.where("type","==","eléctrica").get();
                        query
                            .then((snapshot)=>{
                            const docs = snapshot.docs;
                            const productos = [];
                            docs.forEach((doc)=>{
                                const docSnapshot = doc;
                                let producto = {...docSnapshot.data(),id:docSnapshot.id}
                                productos.push(producto);
                        })
                        setProducto(productos)})
                        }else{
                        const query = collection.get();
                            query
                                .then((snapshot)=>{
                                    const docs = snapshot.docs;
                                    const productos = [];
                                    docs.forEach((doc)=>{
                                        const docSnapshot = doc;
                                        let producto = {...docSnapshot.data(),id:docSnapshot.id}
                                        productos.push(producto);
                                    })
                                    setProducto(productos)
                        })}},[sale,tipoElectrica,tipoAcustica])

            return (
                <section  className="container justify-content-center">
                    <div key={productos.id} className="text-center" >
                        <h3 className="mt-3">Nuestras Guitarras:</h3>
                        <div className="row justify-content-center">
                            < ItemList producto={productos} />
                        </div>
                    </div>
                </section>
                )
    }

export default ItemListContainer;
