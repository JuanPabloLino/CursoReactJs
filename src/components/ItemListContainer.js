import {useEffect,useState} from "react";
import React from 'react';
import ItemList from './ItemsList'
import { useParams } from "react-router";
import { firestore } from "../firebase";


export const ItemListContainer = () =>{
    //const {tipoAcustica,sale,tipoElectrica} = useParams();
    const [productos,setProducto] = useState([]);
    const { idCategoria , sale } = useParams();

    // idCategoria  :  1  => Electricas;
    // idCategoria  :  2  => Acusticas;

    useEffect(() =>  {
            const collection = firestore.collection("productos");
            if (idCategoria !== undefined) {
                setProducto([])
                const query=collection.where("idCategoria","==",parseInt(idCategoria)).get()
                console.log(idCategoria)
                query.then((snapshot)=>{
                    let productos=[]
                    const docs=snapshot.docs
                    docs.forEach(doc => {
                        let producto=doc.data()
                        producto.idCategoria=doc.idCategoria
                        productos.push(producto)
                    });
                    setProducto(productos)
                })
            }else{
                setProducto([])
                const query=collection.get()
                query.then((snapshot)=>{
                    let productos=[]
                    const docs=snapshot.docs
                    docs.forEach(doc => {
                        let producto=doc.data()
                        producto.idCategoria = doc.idCategoria;
                        productos.push(producto)
                    });
                    setProducto(productos)
                })
            }if(sale){
                        const query = collection.where("sale","==",true).get();
                            query
                                .then((snapshot)=>{
                                    const docs = snapshot.docs;
                                    let productos = [];
                                    docs.forEach((doc)=>{
                                        const docSnapshot = doc
                                        let producto = {...docSnapshot.data(),idCategoria:docSnapshot.idCategoria}
                                        productos.push(producto)
                                    });
                                    setProducto(productos);
                                })};
        },[idCategoria, sale])

            return (
                <section className="seccion__principal">
                    <div key={productos.id} className="principal__contenedor" >
                        <div className="row justify-content-center principal__listadoProductos">
                            < ItemList producto= {productos} />
                        </div>
                    </div>
                </section>
                )
}

export default ItemListContainer;
