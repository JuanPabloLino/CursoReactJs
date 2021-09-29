import { React, useContext, useEffect, useState } from "react";
import { contexto } from "../context/CartContext";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import changoSucces from "../Images/changoSucces.png"
import reloj from "../Images/reloj.png"


const Cart = () => {
    const {Carrito,removeProduct,clear} = useContext(contexto);
    const[PrecioTotal,setPrecioTotal] = useState(0);
    const [Pago,setPago] = useState(false);
    const [Procesando, setProcesando] = useState(false);

    const precioTotal = () => {

        let todosLosProductos = 0
        for (const e of Carrito){
            todosLosProductos += e.cantidad * e.producto.price
        }
        setPrecioTotal(todosLosProductos)
    }

    const CompraConfirmada = () =>{
        setPago(true)
        GenerateOrders()
    }

    /* Error "Uncaught (in promise) FirebaseError: No document to update: projects/ecommerceguitarras/databases/(default)/documents/productos/ H7joxbDzSPOTPzolNiHX" */

    const UpdateStock = () => {
        const collection = firestore.collection("productos")  /* <= indico cual es la coleccion que quiero actualizar */
        for (const producto of Carrito) 
            {collection.doc(producto.producto.id).update({ /* <= Indico a traves del id del producto seleccionado cual es el que quiero actualizar */
                stock:(producto.producto.stock - producto.cantidad) /* <= Indico como quiero modificar la propiedad del producto en la coleccion */
            })}
    }

    /* */
    const GenerateOrders = () => {
        let productoComprado=[];
        let dia = new Date();
        let date = dia.getDate() + '-' + (dia.getMonth() + 1) + '-' + dia.getFullYear();
        for (const producto of Carrito) {
            let cantidad = producto.cantidad
            let mark = producto.producto.mark
            let model = producto.producto.model
            let id = producto.producto.id
            let price = producto.producto.price
            let it = {id:id,mark:mark,model:model,price:price,cantidad:cantidad}
            productoComprado.push(it)
        }

    let pedido={
        buyer:{nombre:"Juan",email:"juan@gmail.com"},
        productos:productoComprado,
        date:date,
        PrecioFinal:PrecioTotal
    }

    UpdateStock()
        const colecction = firestore.collection("pedidos")
        const query = colecction.add(pedido);
        query.then(()=>{
            setProcesando(true)
            clear()
        })
    }

    useEffect(() => {
        precioTotal();
    }, [removeProduct])

    return(
        <>
        {Carrito.length === 0 && Procesando === false? (
                <div className="d-flex aling-items-center justify-content-center cart__Style">
                    <p>No hay Producto en el carrito</p><Link to="/"><p>Volver a la tienda</p></Link>
                </div>
        ):(
            <div>
                {Pago === false ? "":(
                <div>
                    {Procesando === false?(
                        <div className="changoImagen cart">
                            <img alt="reloj"src={reloj} width={120}></img>
                            <p>Procesando Pago</p>
                        </div>
                    ):(
                        <div className="changoImagen cart">
                            <img src={changoSucces} width={120}alt="chango"></img>
                            <p>Pago Realizado</p>
                        </div>
                    )}
                </div>
            )}
            {Pago === false ?(
                <div className="d-flex justify-content-center cart__Style">
                    <div className="carrito__productos">
                        {Carrito.map(
                            e =>
                                <div key={e.producto.id} className="productos__estilo">
                                    <div className="">
                                        <img className="imagenCarrito mt-3" alt="Imagen" src={e.producto.image} />
                                    </div>
                                    <div className="">
                                        <p className="mt-5">{e.producto.mark} {e.producto.model} (X{e.cantidad})</p>
                                    </div>
                                        <div className="">
                                            <button className="btn btn-danger mb-3" onClick={()=>removeProduct(e.producto.id)} >Eliminar producto</button>
                                        </div>
                                    </div>
                        )}
                    </div>
                        <div className="carrito__menu">
                            <p className="mt-2">Total de su compra : $ {PrecioTotal}</p>
                            <div className="container justify-content-center">
                                <div>
                                    <a className="nav-link"><button onClick={CompraConfirmada} className="button menu__btn1 w-100">Realizar Pago</button></a>
                                </div>
                                <div>
                                    <Link to="/" className="nav-link" ><button className="button menu__btn2  w-100">Ver mas productos</button></Link>
                                </div>
                                <div>
                                    <a className="nav-link"><button className="menu__btn3 button w-100" onClick={()=>clear()}>Limpiar Carrito</button></a>
                                </div>
                                <div className="d-flex text-center justify-content-center">
                                    <p className="mx-2">Envío Gratis</p><p className="material-icons">local_shipping</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ):("")}
            </div>
        )}
        </>
    )
}

export default Cart