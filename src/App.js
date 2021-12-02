import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import FragmentReedem from './Components/FragmentReedem';

import GiftInvitation from './Components/GiftInvitation';
import RegisterAddress from './Components/RegisterAddress';
import ProductCatalog from './Components/ProductCatalog';
import SpecificProduct from './Components/SpecificProduct';


function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
      <Router>
        <Switch>
          <Route path="/Reedem">
            <FragmentReedem></FragmentReedem>
          </Route>
          <Route path="/Nosotros">
          </Route>

          <Route path="/enlace-regalo">
            <GiftInvitation></GiftInvitation>
          </Route>

          <Route path="/registrar-direccion">
            <RegisterAddress></RegisterAddress>
          </Route>

          <Route path="/catalogo">
            <ProductCatalog></ProductCatalog>
          </Route>
          

          <Route path="/producto/:id" component={SpecificProduct}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
