import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDatailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomProvider from './context/CartContext';
import Cart from "./components/Cart"
import Footer from "./components/Footer"
// import Ordenes from './components/Ordenes';

const App = () =>{
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar/>
          <Switch>
              <Route exact path="/" component= {ItemListContainer} />
              <Route exact path="/:sale" component= {ItemListContainer} />
              <Route exact path="/categoria/:idCategoria" component= {ItemListContainer} />
              <Route path="/item/:id" component= {ItemDetailContainer} />
              <Route path="/chango/cart" component={Cart} />
              {/* <Route path="/Comprobante/:id" component={Ordenes} /> */}
          </Switch>
          <Footer/>
      </CustomProvider>
    </BrowserRouter>
  )
}

export default App;

