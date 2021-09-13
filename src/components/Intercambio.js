import { useState } from "react";




export const Intercambio = ({contador}) =>{
    const [inputType,setInputType] = useState('button')

    const IrAlCarrito = () =>{
        console.log("Este boton me lleva al carrito")
    }

    const AgregarAlCarrito = () => {
        console.log("Se agrego", contador)
    }
    
    const InputCount = () =>{
        return <button onClick={IrAlCarrito} className="btn d-flex justify-content-center btn-outline-dark m-2"> Ir al carrito</button>
    
    }
    const ButtonCount = () =>{
        return (
        <button onClick={AgregarAlCarrito} className="btn d-flex justify-content-center btn-outline-dark m-2">
            Agregar al carrito
        </button>)
    }
    const handleInter=()=>{
        setInputType('input')
    }
    return(
            <div onClick={handleInter}>
                {
                    inputType === 'button' ?
                    <ButtonCount/> : <InputCount/>
                }
            </div>
    )
}

export default Intercambio;