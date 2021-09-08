import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDatailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/LandingPage';
import { DetalleDeProducto } from './components/DetalleDeProducto';

const App = () =>{
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/"component={Home} />
        <Route exact path="/item" component= {ItemListContainer} />
        <Route path="/categoria/:destacado" component= {ItemDetailContainer} />
        <Route exact path="/item/:id" component= {DetalleDeProducto} />
      </Switch>

    </BrowserRouter>
  )
}

export default App;

