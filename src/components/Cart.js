import { React, useContext, useEffect, useState } from "react";
import { contexto } from "../context/CartContext";
import { Link } from "react-router-dom";
import { firestore } from "../firebase";
import changoSucces from "../Images/changoSucces.png"
import reloj from "../Images/reloj.png"

const Cart = () => {
    const {Carrito,removeProduct,clear} = useContext(contexto);
    const [PrecioTotal,setPrecioTotal] = useState(0);
    const [Pago,setPago] = useState(false);
    const [Procesando, setProcesando] = useState(false);
    const [NombreCliente, setNombreCliente] = useState("");
    const [EmailCliente, setEmailCliente] = useState("");
    const [TelefonoCliente, setTelefonoCliente] = useState("");

    const CompraConfirmada = () =>{
        setPago(true)
        GenerateOrders()
    }

    const UpdateStock = () => {
        const collection = firestore.collection("productos")
        for (const producto of Carrito){
            collection.doc(producto.producto.id).update({
                stock:producto.producto.stock-producto.cantidad
            })
            console.log(collection.doc(producto.producto.id))
        }
    }

    const GenerateOrders = () => {
        let productoComprado = [];
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
        buyer:{nombre: NombreCliente,
        telefono:TelefonoCliente,
        email:EmailCliente},
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
        });
    };
    const nombreCliente = (e) => {
        setNombreCliente(e.target.value)
    };
    const emailCliente = (e) => {
        setEmailCliente(e.target.value)
    };
    const telefonoCliente = (e) => {
        setTelefonoCliente(e.target.value)
    };

    useEffect(() => {
        const precioTotal = () => {

            let todosLosProductos = 0
            for (const e of Carrito){
                todosLosProductos += e.cantidad * e.producto.price
            }
            setPrecioTotal(todosLosProductos)
        }
        precioTotal();
    }, [removeProduct,Carrito])

    return(
        <>
        {Carrito.length === 0 && Procesando === false? (
                <div className="d-flex aling-items-center justify-content-center cart__StyleVacio"> 
                    <div className="styleVacio__info">
                        <p>No hay Producto en el carrito</p><Link to="/"><p className="mx-3">Volver a la tienda</p></Link>
                    </div>
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
                                            <button className="button menu__btn0 w-50" onClick={()=>removeProduct(e.producto.id)} >Eliminar producto</button>
                                        </div>
                                    </div>
                        )}
                    </div>
                    <div className="carrito__menu">
                        <div className="bar"></div>
                        <div className="formularioCliente">
                            <form onSubmit={(e)=>e.preventDefault()}>
                                <div className="campo__formularioCliente">
                                    <label className="mx-2">Nombre y Apellido</label>
                                    <input onChange={nombreCliente} type="text" placeholder="Nombre y Apellido" />
                                </div>
                                <div className="campo__formularioCliente">
                                    <label>Email</label>
                                    <input onChange={emailCliente} type="email" placeholder="Email" />
                                </div>
                                <div className="campo__formularioCliente">
                                    <label>Telefono</label>
                                    <input onChange={telefonoCliente} type="tel" placeholder="Telefono"/>
                                </div>
                                <div>
                                    <a className="nav-link" href="/#"><button onClick={CompraConfirmada} className="button menu__btn1 w-50">Confirmar Pedido</button></a>
                                </div>
                            </form>
                        </div>
                        <div className="detalleOrden2">
                                <p className="mx-2">Total de su compra: </p><b>${PrecioTotal} </b> <div id="redi"></div>
                            </div>

                        <div className="d-flex flex-column align-items-center">
                            <div className="d-flex container justify-content-center">
                                <div>
                                    <a href="/#" className="nav-link" ><button className="button menu__btn2  w-100">Ver mas productos</button></a>
                                </div>
                                <div>
                                    <a href="/#" className="nav-link"><button className="menu__btn3 button w-100" onClick={()=>clear()}>Limpiar Carrito</button></a>
                                </div>
                            </div>
                            <div className="envioStyle">
                                <p className="">Envío Gratis</p><p className="material-icons">local_shipping</p>
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