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
        <div className="">
            <div className=" border border-dark rounded">
                <div className="">
                        <div className="d-flex justify-content-center align-items-center mb-4">
                            <button className="btn btn-outline-dark mx-4" onClick={resta}>-</button>
                                <span className="">{count}</span>
                            <button className="btn btn-outline-dark mx-4" onClick={suma}>+</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-outline-dark w-50" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;




