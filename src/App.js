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
import FragmentPerfil from './Components/FragmentPerfil';
import FragmentDetalleCanje from './Components/FragmentDetalleCanje';
import FragmentCancelarCanje from './Components/FragmentCancelOrder';
import FragmentDirecciones from './Components/FragmentDirecciones';
import FragmentAddDirecciones from './Components/FragmentAddDireccion';
import FragmentUpdateDirecciones from './Components/FragmentUpdateDireccion';
import FragmentPerfilUpdate from './Components/FragmentPerfilUpdate';
import FragmentLogout from './Components/FragmentLogout';


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
        
        <Route path="/detallesCanje/:idproduct/">
            <FragmentDetalleCanje></FragmentDetalleCanje>
          </Route>
        <Route path="/cancelarCanje/:idorder/">
          <FragmentCancelarCanje></FragmentCancelarCanje>
        </Route>



        <Route path="/miperfil">
          <FragmentPerfil></FragmentPerfil>
        </Route>
        <Route path="/actualizar-perfil">
          <FragmentPerfilUpdate></FragmentPerfilUpdate>
        </Route>




        
        <Route path="/misdirecciones">
          <FragmentDirecciones></FragmentDirecciones>
        </Route>
        <Route path="/add-direccion">
          <FragmentAddDirecciones></FragmentAddDirecciones>
        </Route>
        <Route path="/update-direccion/:iddireccion">
          <FragmentUpdateDirecciones></FragmentUpdateDirecciones>
        </Route>

        <Route path="/logout">
          <FragmentLogout></FragmentLogout>
        </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
