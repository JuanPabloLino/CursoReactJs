import {React,useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) => {
    const [count,setCount] = useState(initial);

    const suma = () =>{
        if(count < stock){
            setCount(count + 1)
        }};

    const resta = () =>{
        if(count > 1){
            setCount(count - 1);
        }};

    return (
        <div  className="botoneraContainer">
            <div className="botonera">
            <div className="buttonsBotonera">
                    <button className="btn btn-outline-dark" onClick={resta}>-</button>
                        <span className="">{count}</span>
                    <button className="btn btn-outline-dark" onClick={suma}>+</button>
                </div>
                <div className="">
                    <button className="btn btn-outline-dark w-50" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;




