import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import FragmentReedem from './Components/FragmentReedem';
import FragmentProductDetails from './Components/FragmentProductDetails';
import FragmentSendProduct from './Components/FragmentSendProduct';


function App() {
  return (
    <div className="App" style={{width:"100%", height:"100vh"}}>
      <Router>        
        <Switch>
        <Route path="/Reedem">
          <FragmentReedem></FragmentReedem>
        </Route>
        <Route path="/detallesProducto">
          <FragmentProductDetails></FragmentProductDetails>
        </Route>
        <Route path="/sendProduct">
          <FragmentSendProduct></FragmentSendProduct>
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
