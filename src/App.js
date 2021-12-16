import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FragmentReedem from './Components/FragmentReedem';
import FragmentProductDetails from './Components/FragmentProductDetails';
import FragmentSendProduct from './Components/FragmentSendProduct';
import FragmentCatalog from './Components/FragmentCatalog';
import FragmentProductSpecific from './Components/FragmentProductSpecific';

import Login from './Components/Login';
import Home from './Components/Home';
import SpecificCampaign from './Components/SpecificCampaign';
import Signup from './Components/Signup';
import Profile from './Components/Profile';


function App() {
  return (
    <div className="App" style={{ width: "100%", height: "100vh" }}>
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


          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/home/">
            <Home></Home>
          </Route>
          <Route path="/campaign/:id">
            <SpecificCampaign></SpecificCampaign>
          </Route>
          <Route path="/profile/:username">
            <Profile></Profile>
          </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
