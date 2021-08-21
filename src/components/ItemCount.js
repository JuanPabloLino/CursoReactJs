import {useState} from 'react';

const ItemCount = ({stock,initial,onAdd}) => {


    let [count,setCount] = useState(initial)

    const crece = () =>{
        if(count < stock){
            setCount(count + 1);
            console.log("sumar")
        }
    };

    const decrece = () =>{
        if(count > 1){
            setCount(count - 1);
            console.log("restar")
        };
    }

    const confirmar = () => {
        console.log('Has realizado un pedido.')

    };

    return (
    <div className="cuadro">
        <p>Guitarra Gibson</p>
            <div className="botonesCuadro">
                <button onClick={decrece}>-</button>
                    <span>{count}</span>
                <button onClick={crece}>+</button>
            </div>
        <button onClick={confirmar}>Confirmar</button>
    </div>
    );
};

export default ItemCount;

