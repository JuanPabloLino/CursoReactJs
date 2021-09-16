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
        <div className="col d-flex justify-content-center">
            <div className=" border border-dark rounded m-2 w-50 ">
                <div className="row justify-content-center ">
                        <div className="d-flex flex-nowrap justify-content-around m-2">
                            <button className="btn btn-outline-dark m-2" onClick={resta}>-</button>
                                <span className="d-flex align-items-center">{count}</span>
                            <button className="btn btn-outline-dark m-2" onClick={suma}>+</button>
                        </div>
                        <div className="d-flex flex-nowrap justify-content-around m-2">
                            <button className="btn btn-outline-dark m-2" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;




