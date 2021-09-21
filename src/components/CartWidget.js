import {React, useContext, useEffect, useState} from 'react';
import { contexto } from "../context/CartContext";

const CartWidget = () => {
    const {Carrito} = useContext(contexto)
    const [countCarrito,setcountCarrito] = useState(Carrito.length)

    useEffect(()=>{
        let resultado = Carrito.map(a => a.cantidad)
        let total = resultado.reduce((a, b) => Number(a) + Number(b), 0);
        setcountCarrito(total)
    },[Carrito])

    if(Carrito.length > 0 ){
    return (
        <div className="d-flex"><p key={Carrito} className="material-icons mb-0 ">shopping_cart</p>{countCarrito}</div>
    )}else{
        return(<></>)

    }
}

export default CartWidget;