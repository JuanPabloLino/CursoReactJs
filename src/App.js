import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDatailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomProvider from './context/CartContext';
import Cart from "./components/Cart"

const App = () =>{
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar/>
          <Switch>
              <Route exact path="/" component= {ItemListContainer} />
              <Route exact path="/categoria/:sale" component= {ItemListContainer} />
              <Route exact path="/:tipoAcustica" component= {ItemListContainer} />
              <Route exact path="/guitarra/:tipoElectrica" component= {ItemListContainer} />
              <Route exact path="/item/:id" component= {ItemDetailContainer} />
              <Route path="/chango/cart" component={Cart} />
          </Switch>
      </CustomProvider>
    </BrowserRouter>
  )
}

export default App;

