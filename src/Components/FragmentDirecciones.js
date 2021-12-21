import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Modal,Button } from 'react-bootstrap';

const baseUrl = 'https://wishesinpoints.herokuapp.com/useraddresses/api/my_addresses/';
const baseUrldel = 'https://wishesinpoints.herokuapp.com/useraddresses/api/delete/';
var token = localStorage.getItem('token');
var id_usuario = localStorage.getItem('id_usuario');
var id_direccion = "";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Token ${token}`
};

const FragmentDirecciones = () =>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    const [listName, setListName] = useState([]);

    useEffect(() =>{  
        try {
          axios.get(baseUrl+id_usuario+'/',{headers})
          .then((response) => {
              console.log(response);
            setListName(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setListName])
      
      function methodName(id) {
        console.log(id);
        id_direccion = id;
        handleShow();
      }

      function methodUpdate(id) {
        console.log(id);
        window.location.href = "/update-direccion/"+id ;
        
    }

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


    return(    
        <>
        <div className="l-navbar" id="nav-bar">
        <nav className="nav">
            <div>
                <div className="nav_list">
                    <a href="http://localhost:3000/home" className="nav_link"> <i className='bx bx-home nav_icon'></i></a>
                    <a href="http://localhost:3000/misregalos" className="nav_link"> <i className='bx bx-gift nav_icon'></i></a> 
                    <a href="http://localhost:3000/miperfil" className="nav_link"> <i className='bx bx-user nav_icon'></i></a> 
                    <a href="http://localhost:3000/misdirecciones" style={{color:"blueviolet"}} className="nav_link"> <i className='bx bx-directions bx-tada nav_icon' ></i> </a> 
                    <a href="http://localhost:3000/" className="nav_link"> <i className='bx bx-log-out-circle nav_icon'></i></a> 
                </div>
            </div>
        </nav>
        </div>
        <div className="height-100">
            <div className="container">
                    <div>
                        <h4 style={{fontWeight: 300,paddingTop:15}}>Mis</h4>
                        <div className="row">
                                <div className="col">
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Direcciones</h3> 
                                    
                                </div>
                                <div style={{textAlign:"right"}} className="col">
                                    <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick={event =>  window.location.href='/add-direccion'} >Agregar Direccion</button>
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>
            
            <div className="container">
                <div className="row">
                    {listName.map((item) => (
                        <div key={item.id} style={{marginBottom:10}} className="col-sm-4">
                            <div  style={{backgroundColor:"#D8D8D8",borderRadius:20,height:"100%"}} className="card">
                            <div className="card-body">
                                <p className="card-title">{item.street + " " + item.first_name+ " "}</p>
                                <p className="card-title">{item.references}</p>
                                <p className="card-title">{"Num.Ext: "+item.phone}</p>
                                <p className="card-text">{item.neighborhood +" " +item.state+" C.P:  " +item.postal_code}</p>
                            </div>
                            <div className="card-footer">
                                <div style={{textAlign:"right"}} className="contianer">
                                
                                <button style={{borderRadius:15,backgroundColor:"#E75353",color:"white"}} className="btn" onClick = {() => { methodName(item.id);} }  >Eliminar</button>
                                <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white",marginLeft:10}} className="btn" onClick = {() => { methodUpdate(item.id);} }  >Editar</button>
                                </div>
                            </div>
                            </div>
                        </div>
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
          <Button variant="danger" onClick = {() => { eliminar();} } >
            Eliminar
          </Button>
        </Modal.Footer>
        </Modal>
        </>
    )

}
export default FragmentDirecciones;