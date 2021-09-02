import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
import ItemDetailContainer  from "./components/ItemDatailContainer";

const App = () =>{
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemCount stock={5} initial={1} onAdd={0}/>
      <ItemDetailContainer/>
    </>
  )
}

export default App;

