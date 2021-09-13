import {React,useState} from 'react';
import Intercambio from "./Intercambio"



const ItemCount = ({stock,initial,onAdd}) => {
    const [count,setCount] = useState(initial)

    const crece = () =>{
        if(count < stock){
            setCount(count + 1);
        }
    };

    const decrece = () =>{
        if(count > 1){
            setCount(count - 1);
        };
    }

    const confirmar = () => {
        if(stock > 0){
        onAdd(count);
        }
    };

    return (
        <div className="col d-flex justify-content-center">
            <div className=" border border-dark rounded m-2 w-50 ">
                <div className="row justify-content-center ">
                        <div className="d-flex flex-nowrap justify-content-around m-2">
                            <button className="btn btn-outline-dark m-2" onClick={decrece}>-</button>
                                <span className="d-flex align-items-center">{count}</span>
                            <button className="btn btn-outline-dark m-2" onClick={crece}>+</button>
                        </div>
                        <div id="botonConfirmar" onClick={confirmar}><Intercambio contador={count}/></div>
                </div>
            </div>
        </div>
    );
};

export default ItemCount;




