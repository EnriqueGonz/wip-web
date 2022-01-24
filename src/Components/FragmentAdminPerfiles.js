import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Modal,Button } from 'react-bootstrap';
import { MdStars } from 'react-icons/md';

import { ReactComponent as IconInicio } from '../images/iconos/inicio.svg';
import { ReactComponent as IconRegalos } from '../images/iconos/regalos.svg';
import { ReactComponent as IconAdminPerfiles } from '../images/iconos/administrarperfiles1.svg';
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
    const [listCampanas, setlistCampanas] = useState([]);

    useEffect(() =>{  
        try {
          axios.post(baseUrl,{
              full_name:"",
              is_staff: "False"
          },{headers})
          .then((response) => {
              console.log(response.data)
              console.log(response.data[2][2]);
              setList(response.data);
              setlistCampanas(response.data)
          })
          .catch((error) => {
            console.log(error);
          });
    
        } catch (error) {
          console.log(' . ', error);
        }// eslint-disable-next-line react-hooks/exhaustive-deps
      },[setList],[setlistCampanas])
      
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
                                    <h3 style={{fontSize:34, fontWeight:"bold"}}>Clientes</h3> 
                                    
                                </div>
                                <div style={{textAlign:"right"}} className="col">
                                    <button style={{borderRadius:15,backgroundColor:"#7B3E90",color:"white"}} className="btn" onClick={event =>  window.location.href='/add-direccion'} >Por campaña</button>
                                </div>
                            </div>
                    </div>
                    <hr style={{height: 9}}></hr>
            </div>
            
            <div className="container">
                <table className="table">
                    <thead className="thead-dark" style={{backgroundColor: "#BFB3CF", color:"black"}}>
                        <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre completo</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Puntos</th>
                        <th scope="col">Campañas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((item,index) => (
                                <tr key={index}>
                                    <td>
                                        <img style={{width:60}} alt='' src="https://image.shutterstock.com/z/stock-photo-the-word-example-is-written-on-a-magnifying-glass-on-a-yellow-background-1883859943.jpg"></img>
                                    </td>
                                    <td>
                                        {list[index][0][0]["first_name"] +" "+list[index][0][0]["last_name"]}
                                    </td>
                                    <td>
                                        {list[index][0][0]["email"]}
                                    </td>
                                    <td>
                                        {list[index][1][0]["phone"]}
                                    </td>
                                    <td>
                                        <MdStars style={{fontSize:28,color:"#7B3E90"}}/>{list[index][1][0]["points"]}
                                    </td>
                                    <td>
                                        {(list[index][2]).map((data,index2) =>
                                            <li key={index2}>{data.campaign_name}</li>
                                         )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
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