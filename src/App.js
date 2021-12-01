import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch,Route,NavLink } from "react-router-dom";
import FragmentReedem from './Components/FragmentReedem';

function App() {
  return (
    <div className="App" style={{width:"100%", height:"100vh"}}>
      <Router>        
        <Switch>
        <Route path="/Reedem">
          <FragmentReedem></FragmentReedem>
        </Route>
        <Route path="/Nosotros">
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
