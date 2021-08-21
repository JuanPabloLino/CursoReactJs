import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

const App = () =>{
  return (
    <>
      <NavBar />
      <ItemListContainer marca="Gibson" modelo ="Les Paul 2018"/>
      <ItemCount stock={5} initial={1} onAdd={0}/>
    </>
  )
}

export default App;

