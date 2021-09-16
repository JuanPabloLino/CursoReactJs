import {createContext, useState } from "react";

export const contexto = createContext();

const {Provider} = contexto;

const CustomProvider = ({children}) => {
    const [Carrito,setCarrito] = useState([])
    console.log(Carrito)

    function addProducto(detalle,cantidad){
        let exist = Carrito.find( i => i.producto.id === detalle.id)
        if(exist !== undefined){
            for (const a of Carrito) {
                if(a.producto.id === detalle.id){
                    a.cantidad += cantidad
                }
            }
        }else{
            let producto = {"item":detalle,"cantidad":cantidad}
            setCarrito(Carrito=>[...Carrito, producto])
        }
    }

    function removeProduct(id){
        let item = Carrito.filter( i => i.item.id !== id)
        setCarrito(item)
    }


    function clear(){
        setCarrito([])
    }

    return(
        <div>
            <Provider value={{Carrito,addProducto,removeProduct,clear}}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider;