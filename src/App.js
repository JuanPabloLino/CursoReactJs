import React from 'react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer  from "./components/ItemDatailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/LandingPage';

//import CustomProvider from './components/Contexto';

const App = () =>{

  return (
    <BrowserRouter>
      {/*<CustomProvider> */}
        <NavBar/>
          <Switch>
              <Route exact path="/"component={Home} />
              <Route exact path="/item" component= {ItemListContainer} />
              <Route path="/categoria/:destacado" component= {ItemListContainer} />
              <Route exact path="/item/:id" component= {ItemDetailContainer} />
          </Switch>
      {/* </CustomProvider> */}

    </BrowserRouter>
  )
}

export default App;

