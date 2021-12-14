import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import FragmentReedem from './Components/FragmentReedem';
import FragmentProductDetails from './Components/FragmentProductDetails';
import FragmentSendProduct from './Components/FragmentSendProduct';
import FragmentCatalog from './Components/FragmentCatalog';
import FragmentProductSpecific from './Components/FragmentProductSpecific';
import FragmentHomeUser from './Components/FragmentHomeUser';
import FragmentRegalos from './Components/FragmentRegalos';
import FragmentLogin from './Components/FragmentLogin';


function App() {
  return (
    <div className="App" style={{width:"100%", height:"100vh"}}>
      <Router>        
        <Switch>
        <Route path="/Reedem/:uuid/:rtoken">
            <FragmentReedem></FragmentReedem>
          </Route>
        
        <Route path="/detallesProducto">
          <FragmentProductDetails></FragmentProductDetails>
        </Route>
        <Route path="/sendProduct">
          <FragmentSendProduct></FragmentSendProduct>
        </Route>
        <Route path="/catalogo">
          <FragmentCatalog></FragmentCatalog>
        </Route>
        <Route path="/product/">
          <FragmentProductSpecific></FragmentProductSpecific>
        </Route>
        <Route path="/home/">
          <FragmentHomeUser></FragmentHomeUser>
        </Route>
        <Route path="/misregalos/">
          <FragmentRegalos></FragmentRegalos>
        </Route>
        <Route path="/login">
          <FragmentLogin></FragmentLogin>
        </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
