import './App.css';
import React from "react";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import FragmentReedem from './Components/FragmentReedem';
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
import FragmentRegistro from './Components/FragmentRegister';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

var token = localStorage.getItem('token');
function App() {
  return (
    <div className="App" style={{width:"100%", height:"100vh"}}>
      <Router>        
        <Switch>
        <Route path="/Reedem/:uuid/:rtoken">
            <FragmentReedem></FragmentReedem>
        </Route>
        <Route path="/reedem-direccion">
          <FragmentSendProduct></FragmentSendProduct>
        </Route>
        <Route path="/catalogo">
          <FragmentCatalog></FragmentCatalog>
        </Route>
        <Route path="/product/">
          <FragmentProductSpecific></FragmentProductSpecific>
        </Route>
        <Route path="/add-direccion-api/">
          <FragmentSendProduct></FragmentSendProduct>
        </Route>


        <Route path="/registrarse">
          <FragmentRegistro></FragmentRegistro>
        </Route>

        <Route path="/login" render={() => {
          return token ? <Redirect to='/home'></Redirect> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        <Route path="/home/" render={() => {
          return token ? <FragmentHomeUser></FragmentHomeUser> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        <Route path="/misregalos" render={() => {
          return token ? <FragmentRegalos></FragmentRegalos> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        <Route path="/miperfil" render={() => {
          return token ? <FragmentPerfil></FragmentPerfil> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        <Route path="/actualizar-perfil" render={() => {
          return token ? <FragmentPerfilUpdate></FragmentPerfilUpdate> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>

        <Route path="/misdirecciones" render={() => {
          return token ? <FragmentDirecciones></FragmentDirecciones> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        <Route path="/add-direccion" render={() => {
          return token ? <FragmentAddDirecciones></FragmentAddDirecciones> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        <Route path="/update-direccion/:iddireccion" render={() => {
          return token ? <FragmentUpdateDirecciones></FragmentUpdateDirecciones> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>

        <Route path="/logout" render={() => {
          return token ? <FragmentLogout></FragmentLogout> : <FragmentLogin></FragmentLogin>
        }}>
        </Route>
        
        
        
        <Route path="/detallesCanje/:idproduct/">
            <FragmentDetalleCanje></FragmentDetalleCanje>
          </Route>
        <Route path="/cancelarCanje/:idorder/">
          <FragmentCancelarCanje></FragmentCancelarCanje>
        </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
