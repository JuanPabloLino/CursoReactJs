import {createContext, React , useState } from "react";

export const contexto = createContext();
const {Provider} = contexto;

const CustomProvider = ({children}) => {
    const [Carrito,setCarrito] = useState([])

    function addProducto(producto,cantidad){
        let exist = Carrito.find( i => i.producto.id === producto.id)
        if(exist !== undefined){
            for (const a of Carrito) {
                if(a.producto.id === producto.id){
                    a.cantidad += cantidad
                }
            }
        }else{
            let productosSeleccionados = {"producto":producto,"cantidad":cantidad}
            setCarrito(Carrito => [...Carrito, productosSeleccionados])
        }
    }

    const removeProduct = (id) => {
        let producto = Carrito.filter( i => i.producto.id !== id)
        setCarrito(producto)
    }
    const clear = () => setCarrito([])

    const contexto = {
        Carrito ,
        addProducto,
        removeProduct,
        clear
    }

    return(
        <div>
            <Provider value={contexto}>
                {children}
            </Provider>
        </div>
    )
}

export default CustomProvider;