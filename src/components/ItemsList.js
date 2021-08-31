import itemToShow from "./ItemListContainer"
import Items from "./Items"


export const ItemList = () =>{

    itemToShow.length == 0 ? (
        <p>Cargando...</p>
    ) : (
            <ul>
                {itemToShow.map((atribute) => (
                    <ul>
                        <li key ={atribute.id}>Id: {atribute.id}, Marca: {atribute.marca} , Modelo: {atribute.modelo}</li>
                    </ul>
                ))}
            </ul>
    )

return( <Items/>)
}

export default ItemList;

