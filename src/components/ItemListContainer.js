const ItemListContainer = ({marca,modelo}) => {

    return(
    <div>
        <ul className="listaProductos">
            <li>Marca: {marca}. Modelo: {modelo}.</li>
        </ul>
    </div>
)
}

export default ItemListContainer;