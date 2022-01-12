import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Modal,Button } from 'react-bootstrap';

import { ReactComponent as IconInicio } from '../images/iconos/inicio.svg';
import { ReactComponent as IconRegalos } from '../images/iconos/regalos.svg';
import { ReactComponent as IconAdminPerfiles } from '../images/iconos/administrarperfiles1.svg';
import { ReactComponent as IconCampana } from '../images/iconos/crearcampana.svg';
import { ReactComponent as IconCrearProducto } from '../images/iconos/addproducto.svg';
import { ReactComponent as IconListaProducto } from '../images/iconos/listaproductos.svg';


const baseUrl = 'https://wishesinpoints.herokuapp.com/users/api/get_list/';
var token = localStorage.getItem('tokenAdmin');

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentAdminPerfiles = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    const [list, setList] = useState([]);

    useEffect(() =>{  
        try {
          axios.post(baseUrl,{
              full_name:"",
              is_staff: "True"
          },{headers})
          .then((response) => {
              console.log(response);
              setList(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList])
      
      function methodName(id) {
        console.log(id);
        handleShow();
      }

      function methodUpdate(id) {
        console.log(id);
        window.location.href = "/update-direccion/"+id ;
        
    }

    /*

      function eliminar() {
          console.log(id_direccion);
          axios.delete(baseUrldel+id_direccion+'/',{headers})
          .then((response) => {
              console.log(response);
              window.location.href = "/misdirecciones";
          })
          .catch((error) => {
            console.log(error);
          });
      }

      */

    return(    
        <>
        <div className="l-navbar" style={{padding:"1rem 0rem 0 0"}} id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/admin/home" className="nav_link"> <IconInicio style={{width:26,height:"100%"}}/></a>
                    <a href="http://localhost:3000/admin/regalos" className="nav_link"> <IconRegalos style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/administrarperfiles" style={{backgroundColor:"gray"}} className="nav_link"> <IconAdminPerfiles style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/crearcampañas"  className="nav_link"><IconCampana style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/crearproducto"  className="nav_link"><IconCrearProducto style={{width:26,height:"100%"}}/></a> 
                    <a href="http://localhost:3000/admin/listaproducto"  className="nav_link"><IconListaProducto style={{width:26,height:"100%"}}/></a> 
                </div>
            </div>
        </nav>
        </div>
        <div className="height-100">
            <div className="container">
                    <div>
                        <h4 style={{fontWeight: 300,paddingTop:15}}>Administrar</h4>
                        <div className="row">
                                <div className="col">
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Direcciones</h3> 
                                    
                                </div>
                                <div style={{textAlign:"right"}} className="col">
                                    <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick={event =>  window.location.href='/add-direccion'} >Por campaña</button>
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>
            
            <div className="container">
                <div className="row">
                    {list.map((item,index)=>(
                        <>
                        <div className="col-sm-8" style={{paddingBottom:20}}>
                            <div className="card" style={{background:"#EFEFEF"}}>
                            <div className="card-body">
                                <div className="row">
                                    <div className='col-sm-4'>
                                        <img style={{width:"100%"}} src="https://image.shutterstock.com/z/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg" alt=""></img>
                                    </div>
                                    <div className='col-sm-8'>
                                        <h5 className="card-title">Empleado: {list[index][0][0]["first_name"]}</h5>
                                        <p style={{margin:0}}>Correo: {list[index][0][0]["email"]}</p>
                                        <p>Telefono: {list[index][1][0]["phone"]}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div style={{textAlign:"right"}} className="contianer">
                                
                                <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white",marginRight:10}} className="btn" onClick = {() => { methodUpdate(item.id);} }  >Editar Perfil</button>
                                <button style={{borderRadius:15,backgroundColor:"#E75353",color:"white"}} className="btn" onClick = {() => { methodName(item.id);} }  >Eliminar Empleado</button>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        </>
                    ))}
                </div>
            </div>
        </div>

        <Modal  show={show} size="md" onHide={handleClose} >
        <Modal.Body>
                <div>
                  <div className="container">
                  <h4 style={{fontWeight: 300}}>Eliminar</h4>
                  <h3 style={{fontSize:34, fontWeight:"bold"}}>Direccion</h3>
              </div>
                <h5 style={{textAlign:"center"}}>¿Seguro que quieres eliminar la direccion?</h5>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick = {() => { } } >
            Eliminar
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    )

}
export default FragmentAdminPerfiles;